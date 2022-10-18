import styled from "styled-components"

const sideWidth = "250px"
const navHeight = "70px"

export const Container = styled.div`

width: 100% ;
height: 100vh ;
display: inline-flex ;
flex-wrap: wrap ;



`

export const Header = styled.div`

width: 100% ;
height:${navHeight};

`

export const Side = styled.div`

width: ${sideWidth} ;
height: calc( 100vh - ${navHeight} ) ;
background-color: red ;

`

export const Content = styled.div`

width: calc(100% - ${sideWidth}) ;
height: calc( 100vh - ${navHeight} ) ;
background-color: green ;

`