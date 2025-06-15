import TilingElement from './TilingElement.tsx';
import Vector from '../../TsLibrary/Vector.ts';

type TilingManagerProps = {
    // expandingVector: Vector,
    // elementGeter: elementGeter
}

const TilingManager = ({ }: TilingManagerProps) => {
    //Expanding vectors
    const r = 20;
    const r1 = new Vector(1.731 * r, -r);
    const r2 = new Vector(0, -2 * r);

    const pos1 = new Vector(0, 0);
    const pos2 = new Vector(75, 75);

    const tilingElements = [];
    for (let i = -5; i < 5; i++) {
        for (let j = -5; j < 5; j++) {
            const pos = Vector.add(r1.scale(i), r2.scale(j));
            tilingElements.push(<TilingElement pos={pos} />);
        }
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <h2>Tiling Manager</h2>
            <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
                {tilingElements}
            </div>
        </div>
    )
}

export default TilingManager;