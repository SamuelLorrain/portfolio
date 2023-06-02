import * as THREE from 'three';
import { fixResize } from './helpers';
import { Cube } from './mesh/cube';
import { Test } from './mesh/test';
import { PointerRaycaster } from './pointerRaycaster';

export function init(el) {
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setClearColor(0xffffff, 0);
  renderer.sortObjects = false;

  const pointerRaycaster = new PointerRaycaster();

  const light = new THREE.DirectionalLight( 0xFFFFFF );
  const cube = new Cube();
  const test = new Test();

  const scene = new THREE.Scene();
  scene.add(light);
  scene.add(test.getMesh());
  scene.add(cube.getMesh());

  renderer.render(scene, camera);
  fixResize(camera, renderer);

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotateCube();
    pointerRaycaster.setFromCamera(camera);
    const intersects = pointerRaycaster.intersectObjects(scene.children);
    cube.onIntersect(intersects);
    test.onIntersect(intersects, cube);
    renderer.render(scene, camera);
  }
  return animate;
}
