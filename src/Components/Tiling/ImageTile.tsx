import Vector from '../../TsLibrary/Vector.ts';
import chicken from '../../Images/EOS_R10/IMG_0089.JPG'


type ImageTileProps = {
    pos: Vector,
    width: number
}

const ImageTile = ({ pos, width}: ImageTileProps) => {
    // let width = 200;
    return (
        <div className='hex-image-container' style={{position: 'absolute', width: width + 'px', height: width + 'px'}}>
            {/* <img className={'hexagonClip'} src={chicken} style={{ position: 'absolute', left: pos.x + 'px', top: pos.y + 'px', width: width + 'px' }} /> */}
            <img className={'hexagonClip'} src={chicken} style={{ position: 'absolute', left: pos.x + 'px', top: pos.y + 'px', width: '100%' }} />
        </div>
    )
}

export default ImageTile;