import { GeneralMesh } from './GeneralMesh';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

export class Cube extends GeneralMesh {
    constructor() {
        super(new RoundedBoxGeometry(4.5, 4.5, 4.5));
    }
}
