import * as THREE from 'three';

export class Test {
  constructor() {
    this.geometry = new THREE.IcosahedronGeometry(
      1,
      3
    );
    this.material = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
    });
    this.materialHighlight = new THREE.MeshPhongMaterial({
      transparent: true,
      opacity: 0.5,
    });
    this.mesh =  new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.z += -4;
  }

  getMesh() {
    return this.mesh;
  }

  onIntersect(intersects, cube) {
    let containsCube = false;
    for(let i of intersects) {
      if (i.object === cube.getMesh()) {
        containsCube = true;
      }
    }
    if (containsCube) {
      this.mesh.material = this.materialHighlight;
    } else {
      this.mesh.material = this.material;
    }
  }
}
