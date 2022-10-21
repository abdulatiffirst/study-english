import React from "react";

import NavbarComponent from "../../Components/navbar/navbar";

import HomePage from "../home-page/home";
import VocabularyPage from "../vocabulary-page/vocabulary"
import ReadingPage from "../reading-page/reading";
import WritingPage from "../writing-page/writing";
import SpeakingPage from "../speaking-page/speaking";


import { Route, Routes } from "react-router-dom";

import { Container,  Header } from "./style"
import GrammarPage from "../grammar-page/grammar";
import PastSimple from "../../Grammars/past-simple/past-simple";


function MainPage() {
    return (
        <>
            <Container>
                <Header>
                    <NavbarComponent />
                </Header>  
                <Routes>
                    <Route  path={"/"} element={<HomePage />} />
                    <Route path={"grammar"} element={<GrammarPage/>} >
                        <Route index path={"past-simple"} element={<PastSimple/>}/>
                    </Route>
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