import styled from "styled-components";

import { devicesMax, devicesMin } from "../../Materials/responsive/responsive";

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
background-color: #010101;
padding: 15px 0;
color: white;

@media screen and (${devicesMax.to}) {
     display: none;
}
ul{
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column ;
    gap: 20px;
    .title:hover{
        background-color: black;
    }
    li{
text-align: start;
padding: 5px 0;
transition: .6s;

&:hover{
    background-color: rgba(219, 218, 215,.03);
}
        h3{
            color: lightgray;
            font-weight: 300;
            font-size: 17px;
            margin: 5px 0;
            padding: 8px 10px;
            border-bottom: 1px solid gray;
        }
        a{
            color: white;
            font-size: 20px;
            padding-left: 15px;
        }
    }
}
`

export const ContainerResponsive = styled.div`
@media (${devicesMin.to}) and (${devicesMax.desktop}) {
     display: none;
}
`
export const SidebarContainerResponsive = styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
background-color: black;
padding: 15px 0;
color: white;

ul{
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column ;
    gap: 20px;
    .title:hover{
        background-color: black;
    }
    li{
text-align: start;
padding: 5px 0;
transition: .6s;

&:hover{
    background-color: rgba(219, 218, 215,.03);
}
        h3{
            color: lightgray;
            font-weight: 300;
            font-size: 15px;
            margin: 5px 0;
            padding: 8px 10px;
            border-bottom: 1px solid gray;
        }
        a{
            color: white;
            font-size: 17px;
            padding-left: 15px;
        }
    }
}

`