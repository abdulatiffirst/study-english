import styled from "styled-components";

import RobotoBold from "../../assets/fonts/roboto/Roboto-Bold.ttf"
import { devicesMax } from "../../Materials/responsive/responsive";

const bgColor = "#010101"
const borderRadius = "6px"





export const Container = styled.div`
width: 100%;
height: 100%;
background-color: white;
display: inline-block;
overflow: auto;
text-align: start;
padding: 10px 0 20px 0;
`

export const Title = styled.div`
@font-face {
    font-family:roboto ;
    src: url(${RobotoBold});
}
width: 90%;
height: 55px;
background-color:${bgColor} ;
margin: 20px auto;
color: white;
border-radius: ${borderRadius};
display: flex;
align-items: center;
font-size: 33px;
font-family: roboto;
padding-left: 30px;

@media screen and (${devicesMax.tablet}) {
       font-size: 25px;
       padding:  5px ;
       height: auto;
    }

`

export const Description = styled.div`
width: 90%;
height: fit-content;
background-color: white;
margin: auto;
border-radius: ${borderRadius};
padding: 10px;
color: #010101;
font-size: 20px;
border: 1px solid gray;
p{
    margin: 10px 0;
}
.title{
    margin:20px 0 5px 0;
}
.formula{
    width: 100%;
    background-color: black;
    color: white;
    padding: 8px 15px;
    font-size: 22px;
    border-radius: ${borderRadius};
    @media screen and (${devicesMax.tablet}) {
        font-size: 18px;
        padding: 5px 10px;
    }
}
li{
    margin: 10px 5px;
}
`

export const Test = styled.div`
width:90%;
margin:20px  auto;
color: white;
background-color: ${bgColor};
border-radius: ${borderRadius};
padding: 15px;
.score{
    width: 100%;
    text-align: center;
    font-size: 25px;
   
}
h2{
    width: 100%;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
}
.questions{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 5px ;
    .question{
        width: 40%;
        display: flex;
        align-items: center;
        
        font-size: 22px;
    }
    .answer{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 5px ;
        button{
            background-color: black;
            color: white;
            border: 1px solid gray;
            padding: 5px;
            border-radius: ${borderRadius};
            font-size: 15px;
        }
    }
}
`