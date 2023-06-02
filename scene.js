import * as THREE from 'three';
import { Cube } from './mesh/cube';
import { Test } from './mesh/test';
import { Triangle } from './mesh/Triangle';

function visibleMeshFunction(meshes) {
    return (visibleIndex) => {
        for(const [index, mesh] of meshes.entries()) {
            if (index === visibleIndex) {
                mesh.visible = true;
            } else {
                mesh.visible = false;
            }
        }
    }
}

export function init(el, width, height) {
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  // renderer.setClearColor(0x030303, 1);
  // renderer.setClearColor(0xffffff, 0);
  renderer.sortObjects = false;

  const light = new THREE.DirectionalLight( 0xFFFFFF );
  const cube = new Cube();
  const test = new Test();
  const triangle = new Triangle()

  const scene = new THREE.Scene();
  scene.add(light);
  scene.add(cube.getMesh());
  scene.add(test.getMesh());
  scene.add(triangle.getMesh());

  renderer.render(scene, camera);

  const animate = () => {
    requestAnimationFrame(animate);
    cube.animate();
    renderer.render(scene, camera);
  }
  return {
      animate,
      chooseVisibleMesh: visibleMeshFunction([
          cube.getMesh(),
          test.getMesh(),
          triangle.getMesh()
      ])
  };
}
