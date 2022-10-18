import React from "react";

import NavbarComponent from "../../Components/navbar/navbar";
import SidebarComponent from "../../Components/sidebar/sidebar";

import { Container, Content, Header, Side } from "./style"



function MainPage() {
    return (
        <>
            <Container>
                <Header>
                    <NavbarComponent />
                </Header>
                <Side>
                    <SidebarComponent />
                </Side>
                <Content>

                </Content>

            </Container>
        </>
    )
}

export default MainPage