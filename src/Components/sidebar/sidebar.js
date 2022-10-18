import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

function SidebarComponent() {



  return (
    <>
      <Container>
        <ul>
          <li>
             <h3 className='title'>Past Tenses</h3>
          </li>
          <li>
            <Link to={"/past-simple"}>Past Simple</Link>
          </li>
          <li>
            <Link to={"/past-continious"}>Past Continious</Link>
          </li>
          <li>
            <Link to={"/past-perfect"}>Past Perfect</Link>
          </li>
          <li>
            <Link to={"/past-perfect-continious"}>Past Perfect Continious</Link>
          </li>
          <li>
             <h3 className='title'>Present Tenses</h3>
          </li>
          <li>
            <Link to={"/present-simple"}>Present Simple</Link>
          </li>
          <li>
            <Link to={"/present-continious"}>Present Continious</Link>
          </li>
          <li>
            <Link to={"/present-perfect"}>Present Perfect</Link>
          </li>
          <li>
            <Link to={"/present-perfect-continious"}>Present Perfect Continious</Link>
          </li>
          <li>
             <h3 className='title'>Future Tenses</h3>
          </li>
          <li>
            <Link to={"/future-simple"}>Future Simple</Link>
          </li>
          <li>
            <Link to={"/future-continious"}>Future Continious</Link>
          </li>
          <li>
            <Link to={"/future-perfect"}>Future Perfect</Link>
          </li>
          <li>
            <Link to={"/future-perfect-continious"}>Future Perfect Continious</Link>
          </li>
        </ul>
      </Container>
    </>
  )
}

export default SidebarComponent