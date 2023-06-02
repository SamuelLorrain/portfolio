import * as THREE from 'three';
import { lerp } from '../helpers';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { matcapMaterial, matcapHighlight } from '../materials';

export class Cube {
  constructor() {
    this.xRotation = 0;
    this.xRotationIncrement = 0.002;
    this.yRotation = 0.8;
    this.yRotationIncrement = 0.002;
    this.cubeCote = 5;
    this.material = matcapMaterial;
    this.geometry = new RoundedBoxGeometry(this.cubeCote, this.cubeCote, this.cubeCote, 1, .25);
    this.mesh =  new THREE.Mesh(this.geometry, this.material);
  }

  getMesh() {
    return this.mesh;
  }

  rotateLerp(x) {
    return lerp(-0.3, 0.3, x)
  }

  animate() {
    this.mesh.rotation.x = this.rotateLerp(this.xRotation);
    if (this.xRotation > 1 || this.xRotation < 0) {
      this.xRotationIncrement *= -1;
    }
    this.xRotation += this.xRotationIncrement;
    this.mesh.rotation.y = this.rotateLerp(this.yRotation);
    if (this.yRotation > 1 || this.yRotation < 0) {
      this.yRotationIncrement *= -1;
    }
    this.yRotation += this.yRotationIncrement;

    if (this.isActive) {
      this.mesh.material = matcapHighlight;
    } else {
      this.mesh.material = this.material
    }
  }

  onIntersect(intersects) {
    let containsCube = false;
    for(let i of intersects) {
      if (i.object === this.mesh) {
        containsCube = true;
      }
    }
    if (containsCube) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
}
