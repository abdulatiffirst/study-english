import styled from "styled-components"

const sideWidth = "250px"

export const Container = styled.div`
width: 100% ;
height: calc(100vh - 70px ) ;
display: flex;
@media screen and (max-width:1000px) {
height: calc(100vh - 60px ) ;
    
   
    
}
`

export const Side = styled.div`

width: ${sideWidth} ;
height:  100%;

@media screen and (max-width:1000px) {
    width: fit-content;
    height: fit-content;
    position: absolute;
    left: 10px;
    top: 75px;

}
`

export const Content = styled.div`

width: calc(100% - ${sideWidth}) ;
height: 100% ;
background-color: green ;
@media screen and (max-width:1000px) {
    width: 100%;
   
    
}
`