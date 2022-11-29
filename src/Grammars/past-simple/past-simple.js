import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Description, Title, Test } from '../style/style'

function PastSimple() {

  //Test


  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const questions = [
    {
      questionText: "I ____ to school yesterday",
      answerOptions: [
        { answerText: "went", isCorrect: true },
        { answerText: "goed", isCorrect: false },
        { answerText: "gone", isCorrect: false },
        { answerText: "wented", isCorrect: false },
      ]

    },
    {
      questionText: "He ____ a doctor year ago",
      answerOptions: [
        { answerText: "were", isCorrect: false },
        { answerText: "did", isCorrect: false },
        { answerText: "was", isCorrect: true },
        { answerText: "is", isCorrect: false },
      ]

    },
    {
      questionText: "Who aaa ?",
      answerOptions: [
        { answerText: "Mee", isCorrect: false },
        { answerText: "Yeou", isCorrect: false },
        { answerText: "Wee", isCorrect: false },
        { answerText: "correct", isCorrect: true },
      ]

    },
    {
      questionText: "Who asddasdu ?",
      answerOptions: [
        { answerText: "Mre", isCorrect: false },
        { answerText: "correct", isCorrect: true },
        { answerText: "Wre", isCorrect: false },
        { answerText: "Trhey", isCorrect: false },
      ]

    }
  ]

  const answerButton = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
      setShowScore(true)
    }
  }
  return (
    <Container>

      <Title><p>Past simple</p></Title>

      <Description>
        <p>We use <b>Past Simple</b> to talk about a completed action in a time before now.</p>
        <p className='title'>With most verbs, the past tense is formed by adding <b>–ed</b> </p>
        <li>call -- call<b>ed</b></li>
        <li>like -- lik<b>ed</b></li>
        <li>want -- want<b>ed</b></li>
        <p className='title'>But there are a lot of irregular verbs in English</p>
        <li>be -- <b>was/were</b></li>
        <li>go -- <b>went</b></li>
        <li>say -- <b>said</b></li>
        <p className='title'>Click <Link>here </Link>for irregular  verbs list</p>
        <h4 className='formula'>Formula: Subject + Verb<sup>2</sup> + Object</h4>
        <p className='title'>1) Something that happened once in the past: </p>
        <li>I <b>met</b> my wife in 1983.</li>
        <li>We <b>went</b>  to Spain for our holidays.</li>
        <li>They <b>got</b>  home very late last night.</li>
        <p className='title'>2) Something that happened several times in the past:</p>
        <li>When I <b>was</b>  a boy, I walked a mile to school every day.</li>
        <li>We <b>swam</b> a lot while we were on holiday.</li>
        <li>They always <b> enjoyed</b> visiting their friends.</li>
        <p className='title'>3) Something that was true for some time in the past: </p>
        <li>I <b>lived</b> abroad for ten years</li>
        <li>He <b>enjoyed</b> being a student.</li>
        <li>She <b>played</b> a lot of tennis when she was younger.</li>
        <p className='title'>4) We often use expressions with ago with the past simple:</p>
        <li>I <b>met</b> my wife a long time ago.</li>
      </Description>

      <Test>
        {showScore ? (<div className='score'> {score} Correct {score<2?(<span>answer</span>):(<span>answers</span>)}</div>) :(<><h2>Question {currentQuestion + 1}/{questions.length}</h2>
        <div className='questions'>
          <div className='question'>
            {questions[currentQuestion].questionText}
          </div>
          <div className='answer'>
            {questions[currentQuestion].answerOptions.map((answerOption) =>
              <button onClick={() => answerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
            )}
          </div>
        </div></>)}
      </Test>

      <Title>Past simple questions and negatives</Title>

      <Description>
        <p className='title'>1) We use did to make questions with the past simple</p>
        <h4 className='formula'>Formula: Did + Subject + Verb<sup>1</sup> + Object ?</h4>
        <li><b>Did</b> she <b>play</b> tennis when she was younger?</li>
        <li><b>Did</b> you <b>live</b> abroad?</li>
        <li>When <b>did</b> you <b>meet</b>  your wife?</li>
        <li>Where <b>did</b> you <b>go</b> for your holidays?</li>
        <p className='title'>2) But questions with who often don't use did</p>
        <li>Who discovered penicillin?</li>
        <li>Who wrote Don Quixote?</li>
        <p className='title'>3) We use didn't (did not) to make negatives with the past simple</p>
        <h3 className='formula'>Formula: Subject + Did not + Verb<sup>1</sup> + Object.</h3>
        <li>They <b> didn't go </b> to Spain this year </li>
        <li>We <b> didn't get </b> home until very late last night. </li>
        <li>I <b> didn't see </b> you yesterday. </li>
      </Description>
    </Container>
  )
}

export default PastSimple