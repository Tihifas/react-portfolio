import chicken from '../Images/EOS_R10/IMG_0089.JPG'
// import smallLizard from '../Images/EOS_R10/IMG_0300.JPG'
// import spider from '../Images/EOS_R10/IMG_0301.JPG'
import macaque from '../Images/EOS_R10/IMG_0727.JPG'
import dog from '../Images/EOS_R10/IMG_0858.JPG'
// import anhinga from '../Images/EOS_R10/IMG_1017.JPG'
import pelican from '../Images/EOS_R10/IMG_1554.JPG'
import bigLizard from '../Images/EOS_R10/IMG_2078.JPG'
// import bumblebee from '../Images/EOS_R10/IMG_2346.JPG'
import mouse from '../Images/EOS_R10/IMG_4188_01.jpg'

const PageWithImagesNotUsingLayout = () => {
    return (
        <>
            <div className='triangle-imgs-container' style={{ width: '500px', height: '500px', transform: 'translateX(100px) translateY(100px)', position: 'absolute' }}>
                <img src={chicken} />
                <img src={macaque} />
                <img src={dog} />
                <img src={pelican} />
                <img src={bigLizard} />
                <img src={mouse} />
            </div>
        </>
    )
}

export default PageWithImagesNotUsingLayout
