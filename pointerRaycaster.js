import * as THREE from 'three';

export class PointerRaycaster {
  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    window.addEventListener('pointermove', (event) => {
      this.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      this.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    });
  }

  setFromCamera(camera) {
    this.raycaster.setFromCamera(this.pointer, camera);
  }

  intersectObjects(...args) {
    return this.raycaster.intersectObjects(...args);
  }
}

