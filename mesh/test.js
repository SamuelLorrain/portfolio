import * as THREE from 'three';

export class Test {
  constructor() {
    this.geometry = new THREE.IcosahedronGeometry(
      1,
      3
    );
    this.material = new THREE.MeshBasicMaterial({color: 0xff00ff});
    this.mesh =  new THREE.Mesh(this.geometry, this.material);
  }

  getMesh() {
    return this.mesh;
  }
}
