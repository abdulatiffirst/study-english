import styled from "styled-components";

const bgColor = "#171717"
const borderRadius = "6px"


export const Container = styled.div`
width: 100%;
height: 100%;
background-color: #1E1E1E;
display: inline-block;
overflow: auto;
text-align: start;
padding: 10px 0 20px 0;
`

export const Title = styled.div`
width: 90%;
height: 55px;
background-color:${bgColor} ;
margin: 20px auto;
color: white;
border-radius: ${borderRadius};
display: flex;
align-items: center;
font-size: 33px;
padding-left: 30px;

`

export const Description = styled.div`
width: 90%;
height: fit-content;
background-color: ${bgColor};
margin: auto;
border-radius: ${borderRadius};
padding: 10px;
color: white;
font-size: 20px;
p{
    margin: 10px 0;
}
.title{
    margin:20px 0 5px 0;
}
.formula{
    width: 100%;
    background-color: black;
    padding: 5px 10px;
    font-size: 23px;
    border-radius: ${borderRadius};
}
li{
    margin: 10px 0;
}
`