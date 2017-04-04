import {Injectable} from '@angular/core'
import {Scene} from './scene'

declare const webvrui;
declare const navigator;

@Injectable()
export class RenderService {
  private _renderer: THREE.WebGLRenderer;
  private _scene: Scene;
  private _renderTime: number = 0;
  private _camera: THREE.PerspectiveCamera;
  private _vrEffect: THREE.VREffect;
  private _vrControls: any;
  private _vrDisplay: any;
  private _vrButton: any;

  constructor() {}

  public init() {
    this._scene = new Scene();
    this._renderer = new THREE.WebGLRenderer({antialias: true});
    this._renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this._renderer.domElement);

    this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    this._vrControls = new THREE.VRControls(this._camera);
    this._vrControls.standing = true;
    this._camera.position.y = this._vrControls.userHeight;

    this._vrEffect = new THREE.VREffect(this._renderer);
    this._vrEffect.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', this.onResize, true);
    window.addEventListener('vrdisplaypresentchange', this.onResize, true);

    // Initialize the WebVR UI.
    let uiOptions = {
      color: 'black',
      background: 'white',
      corners: 'square'
    };

    this._vrButton = new webvrui.EnterVRButton(this._renderer.domElement, uiOptions);
    this._vrButton.on('exit', () => {
      this._camera.quaternion.set(0, 0, 0, 1);
      this._camera.position.set(0, this._vrControls.userHeight, 0);
    });

    this._vrButton.on('hide', () => document.getElementById('ui').style.display = 'none');
    this._vrButton.on('show', () => document.getElementById('ui').style.display = 'inherit');

    document.getElementById('vr-button').appendChild(this._vrButton.domElement);
    document.getElementById('magic-window').addEventListener('click', () => this._vrButton.requestEnterFullscreen());

    setTimeout(() => this.setupStage(), 1000)
  }

  private render = (timestamp) => {
    let delta = Math.min(timestamp - this._renderTime, 500);
    this._renderTime = timestamp;

    this._scene.render(delta);

    // Only update controls if we're presenting.
    if (this._vrButton.isPresenting()) {
      this._vrControls.update();
    }
    // Render the scene.
    this._vrEffect.render(this._scene.scene, this._camera);

    this._vrDisplay.requestAnimationFrame(this.render);
  };

  private onResize = (e) => {
    this._vrEffect.setSize(window.innerWidth, window.innerHeight);
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
  };

  private setupStage() {
    navigator.getVRDisplays().then((displays) => {
      if (displays.length > 0) {
        this._vrDisplay = displays[0];
        if (this._vrDisplay.stageParameters) {
          this._scene.setStageDimensions(this._vrDisplay.stageParameters);
        }
        this._vrDisplay.requestAnimationFrame(this.render);
      }
    });
  }


}
