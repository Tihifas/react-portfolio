import { ContentViewLayout } from './ContentViewLayout.tsx'

import koalaImg from '../Images/DALL·E 2023-01-25 18.07.04 - Koala Programmer by Leonardo Da Vinci.png';
import guineaPigImg from '../Images/DALL·E 2023-01-25 18.07.07 - Guinea pig having an existential crisis in a grocery store.png';
import uglyDucklingImg from '../Images/DALL·E 2023-01-25 18.07.12 - An old school scifi book cover about the ugly duckling.png';
import passwordVIaDk from '../Images/password.via.dk.PNG';

export const ViewWithTextAndImage = () => {
    return (
      <>
      <ContentViewLayout>
          <h2>Title</h2>
          <div>
              <p>A configuration of mitv2.via.dk, used noly for changing peoples password. The normal routing is overridden so the root page is the change password page that is normally under /MinProfil/Password </p>
          </div>
          <div className='img-row-container'>
            <img src={passwordVIaDk} />
            {/* <img src={guineaPigImg} /> */}
            {/* <img src={uglyDucklingImg} /> */}
          </div>
      </ContentViewLayout>
      </>
    )
  }
  