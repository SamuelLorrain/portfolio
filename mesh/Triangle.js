import * as THREE from 'three';
import { GeneralMesh } from './GeneralMesh';

export class Triangle extends GeneralMesh {
    constructor() {
        super(new THREE.TetrahedronGeometry(5));
    }
}
