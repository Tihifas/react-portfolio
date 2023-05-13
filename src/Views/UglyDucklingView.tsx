import TsTest from '../Components/TsTest'
import { ContentViewLayout } from './ContentViewLayout'

type UglyDucklingParams = {
  textParam: string
}

export const UglyDucklingView = ({textParam} : UglyDucklingParams ) => {
    return (
      <>
      <ContentViewLayout>
          <h2>The Ugly Duckling</h2>
          <div>
            <h2>TsTest:</h2>
            <TsTest textParam="textParamFromUgly" />
            {/* <TsTest textParam={textParam} /> */}
              {/* <p>{textParam}</p> */}
              {/* <p>Once upon a time, in a parallel universe far, far away, there was a rather peculiar duckling named Quackers. Quackers had the most unusual appearance anyone had ever seen. His feathers were a mishmash of vibrant colors, ranging from neon pink to electric blue, with a few splotches of polka dots thrown in for good measure. While other ducks quacked gracefully, Quackers sounded more like a kazoo stuck in a blender. He was undoubtedly the ugly duckling of the pond.</p> */}
              {/* <p>Quackers longed for acceptance and friendship. Every time he tried to waddle over to join the other ducks, they would scuttle away, giggling and whispering amongst themselves. Even the frogs would hop off their lily pads, fearing Quackers' strange appearance.</p> */}
          </div>
      </ContentViewLayout>
      </>
    )
  }
  