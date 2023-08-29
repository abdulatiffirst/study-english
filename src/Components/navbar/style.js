import styled from "styled-components";
import { devicesMax, devicesMin } from "../../Materials/responsive/responsive";





export const Container = styled.div`

width: 100% ;
height: 100% ;
padding: 0 40px ;
display: flex ;
align-items: center ;
justify-content: space-between ;
background-color: white;
.logo-border{
    width: 200px;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
}
.logo{
width: 250px;

}
.links{
    @media screen and (${devicesMax.tablet}) {
        display: none;
    }
}

ul{

    display: flex ;
    gap: 30px ;
    list-style: none ;
    height: fit-content ;
    
    li{
    padding: 4px 8px ;
    border-radius: 3px ;
    transition: .6s ;
    &:hover{

    background-color: black ;
  
   }
 &:hover a{
    color: white;
 }
 a{
    
    color: black;
    font-size: 18px;
    transition: .6s;
    @media (${devicesMin.tablet}) and (${devicesMax.laptop}) {
        font-size: 17px;
    }
    
}
}
}
.openBtn{
    @media (${devicesMin.tablet}) and (${devicesMax.desktop}) {
        display: none;
    }
}

.slogan{
    font-size: 30px;
    font-weight: 300;
    background-color: black;
    color: white;
    padding: 5px 10px ;
    border-radius: 3px;
    @media (${devicesMin.tablet}) and (${devicesMax.laptop}) {
        font-size: 20px;
    }
    @media screen and (${devicesMax.tablet}) {
        display: none;
    }
}


`

export const LinksResponsive = styled.ul`

   
    list-style: none ;
    height: fit-content ;

   
    li{
    padding: 4px 8px ;
    border-radius: 3px ;
    transition: .6s ;
    margin: 4px 0;
    &:hover{

    background-color: black ;
  
   }
 &:hover a{
    color: white;
 }
 a{
    
    color: black;
    font-size: 18px;
    transition: .6s;
    @media (${devicesMin.tablet}) and (${devicesMax.laptop}) {
        font-size: 15px;
    }
    
}
}
`