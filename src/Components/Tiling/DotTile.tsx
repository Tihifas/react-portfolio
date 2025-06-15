import Vector from '../../TsLibrary/Vector.ts';

type DotTileProps = {
    pos: Vector
}

const DotTile = ({ pos }: DotTileProps) => {
    return (
        <div style={{ position: 'absolute', left: pos.x + 'px', top: pos.y + 'px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'red', pointerEvents: 'none' }}>
        </div>
    )
}

export default DotTile;