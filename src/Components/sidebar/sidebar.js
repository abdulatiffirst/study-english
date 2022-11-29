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
          <li style={{ backgroundColor: `${pathname === '/grammar/past-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/past-perfect"}>Past Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/past-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/past-perfect-continious"}>Past Perfect Continious</Link>
          </li>
          <li className='title'>
            <h3 >Present Tenses</h3>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/present-simple' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/present-simple"}>Present Simple</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/present-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/present-continious"}>Present Continious</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/present-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/present-perfect"}>Present Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/present-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/present-perfect-continious"}>Present Perfect Continious</Link>
          </li>
          <li className='title'>
            <h3 >Future Tenses</h3>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/future-simple' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/future-simple"}>Future Simple</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/future-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/future-continious"}>Future Continious</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/future-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/future-perfect"}>Future Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/future-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/future-perfect-continious"}>Future Perfect Continious</Link>
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