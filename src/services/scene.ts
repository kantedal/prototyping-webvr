
export class Scene {
  private _scene: THREE.Scene
  private _cube: THREE.Mesh;
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
      let object = new THREE.Mesh(geometry, material)
      object.position.set(0, 1.3, -1);
      object.scale.set(0.06, 0.06, 0.06);
      this._scene.add(object)
    })

    // Add cube mesh to your three.js scene
    this._scene.add(this._cube);
  }

  public render(delta: number) {
    // Apply rotation to cube mesh
    //this._cube.rotation.y += delta * 0.0006;
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

    // Place the cube in the middle of the scene, at user height.
    this._cube.position.set(0, 1.5, 0);
  }

  get scene(): THREE.Scene { return this._scene; }
}
