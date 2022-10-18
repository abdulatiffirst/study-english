import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
background-color: black;
padding: 15px 5px;
color: white;
ul{
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column ;
    gap: 20px;
    li{
text-align: start;

        h3{
            color: lightgray;
            font-weight: 300;
            font-size: 15px;
            margin: 5px 0;
            padding: 5px 5px;
            border-bottom: 1px solid gray;
        }
        a{
            color: white;
            font-size: 17px;
            padding-left: 10px;
        }
    }
}
`