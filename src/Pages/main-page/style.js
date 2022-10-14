import styled from "styled-components"

const navHeight = "70px"

export const Container = styled.div `

width: 100% ;
height: 100vh ;
display: flex ;
flex-wrap: wrap ;
background-color: black ;

`


export const Header = styled.div `

width: 100% ;
height:navHeight;
background-color: white ;


`

export const Side = styled.div `

width: 300px ;
height: calc( 100vh - navHeight) ;

`