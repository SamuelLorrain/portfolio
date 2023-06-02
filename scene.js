import * as THREE from 'three';
import { fixResize } from './helpers';
import { Cube } from './mesh/cube';
import { PointerRaycaster } from './pointerRaycaster';

export function init(el, width, height) {
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  // renderer.setClearColor(0x030303, 1);
  renderer.setClearColor(0xffffff, 1);
  renderer.sortObjects = false;

  const pointerRaycaster = new PointerRaycaster();

  const light = new THREE.DirectionalLight( 0xFFFFFF );
  const cube = new Cube();

  const scene = new THREE.Scene();
  scene.add(light);
  scene.add(cube.getMesh());

  renderer.render(scene, camera);
  // fixResize(camera, renderer);

  const animate = () => {
    requestAnimationFrame(animate);
    cube.animate();
    pointerRaycaster.setFromCamera(camera);
    renderer.render(scene, camera);
  }
  return animate;
}
