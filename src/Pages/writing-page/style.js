import styled from "styled-components";

import { devicesMax } from "../../Materials/responsive/responsive";
import bg from "../../assets/images/Bg.png"
import bgR from "../../assets/images/BgResponsive.png"
export const Container = styled.div`
width: 100% ;
height: calc(100vh - 70px) ;
background-color: black ;
display: flex ;
align-items: center ;
justify-content: center ;
font-size: 60px ;
color: white ;
background-image: url(${bg});
background-position: center;
background-size: cover;
@media screen and (${devicesMax.tablet}) {
background-image: url(${bgR});
       
       
    }
`
