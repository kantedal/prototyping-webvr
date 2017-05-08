
export class Scene {
  private _scene: THREE.Scene
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
      object.position.set(0, 1.3, -1.5);
      object.scale.set(0.06, 0.06, 0.06);
      this._scene.add(object)
    })


    let modeller1Texture = THREE.ImageUtils.loadTexture('../assets/modeller1.png')
    let modeller2Texture = THREE.ImageUtils.loadTexture('../assets/modeller2.png')
    let viewerTexture = THREE.ImageUtils.loadTexture('../assets/viewer.png')

    let uiPlaneGeometry = new THREE.PlaneGeometry(16,9,1,1);
    let uiPlaneMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, map: modeller1Texture, transparent: true })
    let uiPlane = new THREE.Mesh(uiPlaneGeometry, uiPlaneMaterial)
    uiPlane.scale.set(0.11, 0.11, 0.11)
    uiPlane.position.set(0, 1.6, -1.0)
    this._scene.add(uiPlane)

    window.onkeydown = e => {
      switch (e.which) {
        case 49:
          uiPlaneMaterial.map = modeller1Texture
          uiPlaneMaterial.needsUpdate = true
          break
        case 50:
          uiPlaneMaterial.map = modeller2Texture
          uiPlaneMaterial.needsUpdate = true
          break
        case 51:
          uiPlaneMaterial.map = viewerTexture
          uiPlaneMaterial.needsUpdate = true
          break
      }
    }



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
  }

  get scene(): THREE.Scene { return this._scene; }
}
