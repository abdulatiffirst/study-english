import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Description, Title } from './style'

function PastSimple() {
  return (
    <Container>
      <Title><p>Past Simple</p>  </Title>
      <Description>
        <p>We use <b>Past Simple</b> to talk about a completed action in a time before now.</p>
        <p className='title'>With most verbs, the past tense is formed by adding <b>–ed</b> </p>
        <li>call -- call<b>ed</b></li>
        <li>like -- lik<b>ed</b></li>
        <li>want -- want<b>ed</b></li>
        <p className='title'>But there are a lot of irregular past tense forms in English</p>
        <li>be -- <b>was/were</b></li>
        <li>go -- <b>went</b></li>
        <li>say -- <b>said</b></li>
        <p className='title'>Click <Link>here </Link>for irregular  verbs</p>
        <h4 className='formula'>Formula: Subject + Verb<sup>2</sup> + Object</h4>
        <p className='title'>1) Something that happened once in the past: </p>
        <li>I <b>met</b> my wife in 1983.</li>
        <li>We <b>went</b>  to Spain for our holidays.</li>
        <li>They <b>got</b>  home very late last night.</li>
         <p className='title'>2) Something that happened several times in the past:</p>
         <li>When I was a boy, I walked a mile to school every day.</li>
         <li>We swam a lot while we were on holiday.</li>
         <li>They always enjoyed visiting their friends.</li>
      </Description>
    </Container>
  )
}

export default PastSimple