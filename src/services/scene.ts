
export class Scene {
  private _scene: THREE.Scene
  private _mainObject: THREE.Mesh
  private _mainObjectMaterial: THREE.Material
  private _mainObjectWireframeMaterial: THREE.Material
  private _skybox: any;

  constructor() {
    this._scene = new THREE.Scene();

    let loader = new THREE.TextureLoader();
    loader.load('../assets/box.png', (texture) => {
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(5, 5)

      let geometry = new THREE.BoxGeometry(5, 5, 5)
      let material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0x01BE00,
        side: THREE.BackSide
      });

      // Align the skybox to the floor (which is at y=0).
      this._skybox = new THREE.Mesh(geometry, material)
      this._skybox.position.y = 5 / 2
      this._scene.add(this._skybox)
    });

    // Create 3D objects.
    let material = new THREE.MeshNormalMaterial();

    let light = new THREE.AmbientLight()
    light.position.set(3,3,3)
    this._scene.add(light)

    let objLoader = new THREE.JSONLoader();
    objLoader.load('../assets/saloon.js', (geometry, materials) => {
      console.log(materials)
      this._mainObjectMaterial = material
      this._mainObjectWireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true})

      this._mainObject = new THREE.Mesh(geometry, this._mainObjectMaterial)
      this._mainObject.position.set(0, 1.3, -1.5)
      this._mainObject.scale.set(0.07, 0.07, 0.07)
      this._scene.add(this._mainObject)
    })


    let modellerTranslateTexture = THREE.ImageUtils.loadTexture('../assets/modeller-translate.png')
    let modellerScaleTexture = THREE.ImageUtils.loadTexture('../assets/modeller-scale.png')
    let modellerWireframeTexture = THREE.ImageUtils.loadTexture('../assets/modeller-wireframe.png')
    let modellerGridTexture = THREE.ImageUtils.loadTexture('../assets/modeller-grid.png')
    let viewerTexture = THREE.ImageUtils.loadTexture('../assets/viewer.png')

    let uiPlaneGeometry = new THREE.PlaneGeometry(16,9,1,1);
    let uiPlaneMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, map: modellerTranslateTexture, transparent: true })
    let uiPlane = new THREE.Mesh(uiPlaneGeometry, uiPlaneMaterial)
    uiPlane.scale.set(0.11, 0.11, 0.11)
    uiPlane.position.set(0, 1.6, -1.0)
    this._scene.add(uiPlane)

    window.onkeydown = e => {
      switch (e.which) {

        // Test case: Change to scale tool
        case 49: // 1 button -> Change to grid
          uiPlaneMaterial.map = modellerTranslateTexture
          uiPlaneMaterial.needsUpdate = true
          this.setObjectDefaults()

          break
        case 50: // 2 button -> Change to grid
          uiPlaneMaterial.map = modellerGridTexture
          uiPlaneMaterial.needsUpdate = true
          this.setObjectDefaults()

          break
        case 51: // 3 button -> Scale tool enabled
          uiPlaneMaterial.map = modellerScaleTexture
          uiPlaneMaterial.needsUpdate = true
          this.setObjectDefaults()

          setTimeout(() => {
            let scaleAnim = { scale: 0.07 }
            let tween = new TWEEN.Tween(scaleAnim)
              .to({ scale: 0.11}, 1500)
              .onUpdate(() => {
                this._mainObject.scale.set(scaleAnim.scale, scaleAnim.scale, scaleAnim.scale)
              })
              .onComplete(() => {
                let backScaleAnim = { scale: 0.11 }
                let tween = new TWEEN.Tween(scaleAnim)
                  .to({ scale: 0.07}, 1500)
                  .onUpdate(() => this._mainObject.scale.set(scaleAnim.scale, scaleAnim.scale, scaleAnim.scale))
                  .start();
              })
              .start();
          }, 1000)

          break

        // Test case: Change to wireframe mode
        case 52: // 4 button -> Change to main screen, scale enabled
          uiPlaneMaterial.map = modellerScaleTexture
          uiPlaneMaterial.needsUpdate = true
          this.setObjectDefaults()

          break
        case 53: // 5 button -> Change to grid
          uiPlaneMaterial.map = modellerGridTexture
          uiPlaneMaterial.needsUpdate = true
          this.setObjectDefaults()

          break
        case 54: // 6 button -> Change to wireframe
          uiPlaneMaterial.map = modellerWireframeTexture
          uiPlaneMaterial.needsUpdate = true
          this._mainObject.material = this._mainObjectWireframeMaterial
          this._mainObject.material.needsUpdate = true

          break

        // Test case: Change to viewer mode
        case 55: // 7 button -> Change to main screen, scale enabled
          uiPlaneMaterial.map = modellerTranslateTexture
          uiPlaneMaterial.needsUpdate = true
          this.setObjectDefaults()

          break
        case 56: // 8 button -> Change to grid
          uiPlaneMaterial.map = modellerGridTexture
          uiPlaneMaterial.needsUpdate = true
          this.setObjectDefaults()

          break
        case 57: // 9 button -> Change to viewer mode
          uiPlaneMaterial.map = viewerTexture
          uiPlaneMaterial.needsUpdate = true
          this.setObjectDefaults()

          setTimeout(() => {
            let rotAnim = { rotation: 0 }
            let tween = new TWEEN.Tween(rotAnim)
              .to({ rotation: 2 * Math.PI }, 3000)
              .onUpdate(() => this._mainObject.rotation.set(0,rotAnim.rotation,0))
              .start();
          }, 2000)

          break
      }
    }

  }

  setObjectDefaults() {
    this._mainObject.material = this._mainObjectMaterial
    this._mainObject.material.needsUpdate = true
  }

  public render(delta: number) {
    // Apply rotation to cube mesh
    //this._cube.rotation.y += delta * 0.0006;

    TWEEN.update();
  }

  public setStageDimensions(stage: any) {
    // Make the skybox fit the stage.
    let material = this._skybox.material;
    this._scene.remove(this._skybox);

    // Size the skybox according to the size of the actual stage.
    let geometry = new THREE.BoxGeometry(stage.sizeX, 5, stage.sizeZ);
    this._skybox = new THREE.Mesh(geometry, material);

    // Place it on the floor.
    this._skybox.position.y = 5 / 2;
    this._scene.add(this._skybox);
  }

  get scene(): THREE.Scene { return this._scene; }
}
