import * as THREE from 'three';

const matcap = new THREE.TextureLoader().load( "textures/matcap/matcap_black_hd.png" );

export const matcapMaterial = new THREE.MeshMatcapMaterial(
  {
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
    matcap: matcap
  }
);

export const matcapHighlight = new THREE.MeshMatcapMaterial(
  {
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
    matcap: matcap
  }
);
