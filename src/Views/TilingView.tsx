import TilingManager from '../Components/Tiling/TilingManager.tsx';

const TilingView = () => {
    return (
        <>
        <div className='tiling-view' style={{ position: 'relative', width: '100%', height: '1600px', margin: '50px', border: '1px solid black' }}>
            <h1>Tiling View</h1>
            <TilingManager />
        </div>
        </>
    )
}

export default TilingView
