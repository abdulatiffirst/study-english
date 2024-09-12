import React from "react";

import NavbarComponent from "../../Components/navbar/navbar";

import HomePage from "../home-page/home";
import VocabularyPage from "../vocabulary-page/vocabulary"
import ReadingPage from "../reading-page/reading";
import WritingPage from "../writing-page/writing";
import SpeakingPage from "../speaking-page/speaking";


import { Route, Routes } from "react-router-dom";

import { Container, Header } from "./style"
import GrammarPage from "../grammar-page/grammar";
import PastSimple from "../../Grammars/past-simple/past-simple";
import GrammarsHome from "../../Grammars/grammars-home/grammars-home";


function MainPage() {
    return (
        <>
            <Container>
                <Header>
                    <NavbarComponent />
                </Header>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path={"grammar"} element={<GrammarPage />} >
                        <Route index element={<GrammarsHome/> }/>
                        <Route path={"past-simple"} element={<PastSimple />} />
                        {/* <Route  path={"past-continious"} element={<ReadingPage/>} /> */}
                    </Route>
                    <Route path={"vocabulary"} element={<VocabularyPage />} />
                    <Route path={"reading"} element={<ReadingPage />} />
                    <Route path={"speaking"} element={<SpeakingPage />} />
                    <Route path={"writing"} element={<WritingPage />} />
                    <Route path={"*"} element={<WritingPage />} />
                </Routes>

            </Container>
        </>
    )
}

export default MainPage