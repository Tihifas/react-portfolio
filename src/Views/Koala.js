import React from 'react'
import { ContentViewLayout } from './ContentViewLayout'
import koalaImg from '../Images/DALL·E 2023-01-25 18.07.04 - Koala Programmer by Leonardo Da Vinci.png';
import guineaPigImg from '../Images/DALL·E 2023-01-25 18.07.07 - Guinea pig having an existential crisis in a grocery store.png';
import uglyDucklingImg from '../Images/DALL·E 2023-01-25 18.07.12 - An old school scifi book cover about the ugly duckling.png';

export const KoalaView = () => {
  return (
    <>
    <ContentViewLayout>
        <h2>Koala C. Martin</h2>
        <div>
            <p>Brie cut the cheese bavarian bergkase. Stilton gouda stinking bishop say cheese cream cheese cheese on toast camembert de normandie parmesan. Stinking bishop pecorino emmental cheese and biscuits st. agur blue cheese cheese slices pecorino danish fontina. Edam st. agur blue cheese edam fondue when the cheese comes out everybody's happy cow port-salut ricotta. Cauliflower cheese.</p>
            <p>Ricotta cheesy feet croque monsieur. Parmesan cheese triangles airedale boursin goat fromage boursin cheesy grin. Airedale red leicester cauliflower cheese cheesy grin cheese and wine bavarian bergkase gouda cheese and wine. Bocconcini hard cheese rubber cheese jarlsberg airedale.</p>
        </div>
      {/* <div className='image-row'>
        <a href='http://www.corelangs.com/css/box/image-shadow.html'>
          <img src={koalaImg} className='image-row-nested-img' />
        </a>
          <img src={guineaPigImg} />
          <img src={uglyDucklingImg} />
      </div> */}
    </ContentViewLayout>
    </>
  )
}
