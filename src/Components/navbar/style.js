import styled from "styled-components";





export const Container = styled.div`

width: 100% ;
height: 100% ;
padding: 0 40px ;
display: flex ;
align-items: center ;
justify-content: space-between ;
background-color: white;
.logo{

    width: 50px ;
    height: 50px ;

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
}
}
}


.slogan{
    font-size: 30px;
    font-weight: 300;
    background-color: black;
    color: white;
    padding: 5px 10px ;
    border-radius: 3px;
    
}


`