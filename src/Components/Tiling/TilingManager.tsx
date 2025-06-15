import TilingElement from './TilingElement.tsx';
import Vector from '../../TsLibrary/Vector.ts';

type TilingManagerProps = {
    // expandingVector: Vector,
    // elementGeter: elementGeter
}

const TilingManager = ({ }: TilingManagerProps) => {

    const pos1 = new Vector(0, 0);
    const pos2 = new Vector(75, 75);
    
    return (
        <div style={{ position: 'relative' }}>
            <TilingElement pos={pos1} />
            <TilingElement pos={pos2} />
        </div>
    )
}

export default TilingManager;