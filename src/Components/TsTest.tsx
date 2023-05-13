import React from 'react'

type TsTestParams = {
  textParam: string
}

const TsTest = ({textParam} : TsTestParams) => {
  return (
    <div>
      <h2>TsTest</h2>
      <div>textParam: {textParam}</div>
    </div>
  )
}

export default TsTest