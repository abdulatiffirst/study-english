import React, { useState } from 'react'
// import { Container } from './style'

function ReadingPage() {

  const [text,setText] = useState("")


  const arr = [
    {
      preText: "wetrsyudgkhbkhuaewg1",
      inputValue: "yes"
    },
    {
      preText: "wetrsyudgkhbkhuaewg2",
      inputValue: "yes2"
    },
    {
      preText: "wetrsyudgkhbkhuaewg3",
      inputValue: "yes3"
    }
  ];




  const exe = arr.map(({ key, preText,inputValue  }) => <div><p>{preText}</p> <input type={"text"}  onChange={(e) => setText(e.target.value)}/><button onClick={function check(params) {
    if (text === inputValue) {
      console.log("wtf")
    }
    else{
      console.log("huy")
    }
  }}>click</button></div>)


  return (
    <>
      {/* <Container>
        <h1>Coming Soon !</h1>
    </Container> */}

      {exe}
    </>
  )
}

export default ReadingPage