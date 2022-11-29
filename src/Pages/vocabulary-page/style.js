import styled from "styled-components";
import { devicesMax } from "../../Materials/responsive/responsive";


export const Container = styled.div`
width: 100% ;
height: calc(100vh - 70px) ;
background-color: black ;
display: flex ;
align-items: center ;
justify-content: center ;
font-size: 60px ;
color: white ;

@media screen and (${devicesMax.tablet}) {
        font-size: 25px;
       
    }
`