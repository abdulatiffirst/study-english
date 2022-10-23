import React from 'react'
import { Outlet } from 'react-router-dom'

import SidebarComponent from '../../Components/sidebar/sidebar'

import { Container, Content, Side } from './style'

function GrammarPage() {
    return (
        <>
            <Container>
                <Side>
                    <SidebarComponent />
                </Side>
                <Content>
                    <Outlet/>
                </Content>
            </Container>
        </>
    )
}

export default GrammarPage