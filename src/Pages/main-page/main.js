import React from "react";

import NavbarComponent from "../../Components/navbar/navbar";
import SidebarComponent from "../../Components/sidebar/sidebar";

import HomePage from "../home-page/home";
import VocabularyPage from "../vocabulary-page/vocabulary"
import ReadingPage from "../reading-page/reading";
import WritingPage from "../writing-page/writing";
import SpeakingPage from "../speaking-page/speaking";


import { Route, Routes } from "react-router-dom";

import { Container, Content, Header, Side } from "./style"


function MainPage() {
    return (
        <>
            <Container>
                <Header>
                    <NavbarComponent />
                </Header>
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/grammar"} element={<>
                        <Side>
                            <SidebarComponent />
                        </Side>
                        <Content>
                       
                        </Content>
                    </>} />
                    <Route path={"/vocabulary"} element={<VocabularyPage />} />
                    <Route path={"/reading"} element={<ReadingPage />} />
                    <Route path={"/speaking"} element={<SpeakingPage />} />
                    <Route path={"/writing"} element={<WritingPage />} />
                </Routes>

            </Container>
        </>
    )
}

export default MainPage