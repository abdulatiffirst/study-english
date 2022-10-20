import styled from "styled-components"

const navHeight = "70px"

export const Container = styled.div`

width: 100% ;
`

export const Header = styled.div`

width: 100% ;
height:${navHeight};
position: sticky;
z-index: 9999;
top: 0;
left: 0;

@media screen and (max-width: 1000px) {
    height: 60px;
}

`

