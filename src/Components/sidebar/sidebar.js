import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SidebarResponsive from '../sidebar-responsive/sidebar-responsive'
import { Container, ContainerResponsive } from './style'


function SidebarComponent() {

  const { pathname } = useLocation()


  return (
    <>
      <Container>
        <ul>
          <li className='title'>
            <h3 >Past Tenses</h3>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/past-simple' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/past-simple"}>Past Simple</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/past-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/past-continious"}>Past Continious</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/past-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/past-perfect"}>Past Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/past-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/past-perfect-continious"}>Past Perfect Continious</Link>
          </li>
          <li className='title'>
            <h3 >Present Tenses</h3>
          </li>
          <li style={{ backgroundColor: `${pathname === '/present-simple' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/present-simple"}>Present Simple</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/present-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/present-continious"}>Present Continious</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/present-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/present-perfect"}>Present Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/present-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/present-perfect-continious"}>Present Perfect Continious</Link>
          </li>
          <li className='title'>
            <h3 >Future Tenses</h3>
          </li>
          <li style={{ backgroundColor: `${pathname === '/future-simple' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/future-simple"}>Future Simple</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/future-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/future-continious"}>Future Continious</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/future-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/future-perfect"}>Future Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/future-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/future-perfect-continious"}>Future Perfect Continious</Link>
          </li>
        </ul>
      </Container>
      <ContainerResponsive>
        <SidebarResponsive />
      </ContainerResponsive>
    </>
  )
}

export default SidebarComponent