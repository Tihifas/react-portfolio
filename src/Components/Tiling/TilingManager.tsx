import DotTile from './DotTile.tsx';
import ImageTile from './ImageTile.tsx';
import Vector from '../../TsLibrary/Vector.ts';

type TilingManagerProps = {
    // expandingVector: Vector,
    // elementGeter: elementGeter
}

const TilingManager = ({ }: TilingManagerProps) => {
    //Expanding vectors
    const r = 65;
    const t = 2/Math.sqrt(3)*r;
    const r1 = new Vector(1.731 * r, -r);
    const r2 = new Vector(0, -2 * r);
    // const r1 = new Vector(2 * r, 0);
    // const r2 = new Vector(r, -1.499999 * r);

    const pos1 = new Vector(0, 0);
    const pos2 = new Vector(75, 75);

    const ijMax = 10;
    const tilingElements = [];
    for (let i = -ijMax; i < ijMax; i++) {
        for (let j = -ijMax; j < ijMax; j++) {
            const pos = Vector.add(r1.scale(i), r2.scale(j));
            if (pos.norm() > 4 * r) {
                continue; // Skip outside radius
            }
            tilingElements.push(<ImageTile pos={pos} width={2 * t} />);
        }
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <h2>Tiling Manager</h2>
            <div style={{ position: 'relative', left: '50%', top: '25%' }}>
                {tilingElements}
            </div>
        </div>
    )
}

export default TilingManager;