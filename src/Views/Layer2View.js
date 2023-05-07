import React from 'react'
import { LinkBox } from '../Components/LinkBox'
import { ContentViewLayout } from './ContentViewLayout'
import koalaImg from '../Images/DALL·E 2023-01-25 18.07.04 - Koala Programmer by Leonardo Da Vinci.png';
import guineaPigImg from '../Images/DALL·E 2023-01-25 18.07.07 - Guinea pig having an existential crisis in a grocery store.png';
import uglyDucklingImg from '../Images/DALL·E 2023-01-25 18.07.12 - An old school scifi book cover about the ugly duckling.png';
import slenderCruellaImg from '../Images/DALL·E 2023-01-25 18.07.19 - The child of slenderman and Cruella de Vil, digital art.png';
import winnieSupperImg from '../Images/DALL·E 2023-01-25 18.07.24 - The last supper painting by Leonardo with characters from winnie the pooh.png';
import saturnDevouring from '../Images/DALL·E 2023-05-07 14.12.03 - Saturn Devouring His son painting by Francisco Goya with the monster eating a donut instead.png'

const Layer2View = () => {
  return (
    <>
      {/* <div style={{width:'100px',height:'100px', margin:'auto', transform:'translateY(-50%)', backgroundColor:'red'}}> */}
      {/* <h2>Cool stuff</h2> */}

      <div className='triangle-imgs-container' style={{width: '73%', height: '73%', margin:'auto', transform:'translateX(-60%) translateY(-33%)', zIndex:'200', position: 'relative'}}>
        <img src={koalaImg} />
        <img src={guineaPigImg} />
        <img src={uglyDucklingImg} />
        <img src={slenderCruellaImg} />
        <img src={winnieSupperImg} />
        <img src={saturnDevouring} />
      </div>


      {/* <div className='LinkBox-container'>
            <LinkBox link="/koala" heading={"Koala C. Martin"} img={koalaImg} />
            <LinkBox link="/link1" heading={"The Supermarked"} img={guineaPigImg} />
            <LinkBox link="/link1" heading={"Look Away"} img={uglyDucklingImg} />
            <LinkBox link="/link1" heading={"A Crime Against Nature"} img={slenderCruellaImg} />
            <LinkBox link="/link1" heading={"Who framed Winnie?"} img={winnieSupperImg} />
        </div> */}
    {/* </div > */}
    </>
  )
}

export default Layer2View