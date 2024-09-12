import styled from "styled-components";
import { devicesMax, devicesMin } from "../../Materials/responsive/responsive";
// import schoolbell from "../../assets/fonts/Scoolbell/Schoolbell-Regular.ttf"
import comforta from "../../assets/fonts/comforta/static/Comfortaa-Bold.ttf";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #01081a;

  .logo-border {
    width: 15%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    @media screen and (${devicesMax.tablet}) {
     width: 40% ;
    }
  }
  .logo {
    width: 100%;
  }
  .links {
    @media screen and (${devicesMax.tablet}) {
      display: none;
    }
  }

  ul {
    width: 70%;
    display: flex;
    justify-content: space-around;
    /* gap: 30px; */
    list-style: none;
    height: fit-content;

    li {
      padding: 4px 8px;
      border-radius: 3px;
      transition: 0.6s;
      &:hover {
        background-color: white;
      }
      &:hover a {
        color: black;
      }
      a {
        color: white;
        font-size: 30px;
        transition: 0.6s;
        @media (${devicesMin.tablet}) and (${devicesMax.laptop}) {
          font-size: 17px;
        }
      }
    }
  }
  .openBtn {
    @media (${devicesMin.tablet}) and (${devicesMax.desktop}) {
      display: none;
    }
  }

  .slogan {
  
    text-align: center;
    font-size: 25px;
    font-weight: 300;
    font-family: ${comforta};
    /* background-color: red; */
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    width: 15%;
    text-align: center;
    @media (${devicesMin.tablet}) and (${devicesMax.laptop}) {
      font-size: 20px;
    }
    @media screen and (${devicesMax.tablet}) {
      display: none;
    }
  }
`;

export const LinksResponsive = styled.ul`
  list-style: none;
  height: fit-content;

  li {
    padding: 4px 8px;
    border-radius: 3px;
    transition: 0.6s;
    margin: 4px 0;
    &:hover {
      background-color: black;
    }
    &:hover a {
      color: white;
    }
    a {
      color: black;
      font-size: 18px;
      transition: 0.6s;
      @media (${devicesMin.tablet}) and (${devicesMax.laptop}) {
        font-size: 15px;
      }
    }
  }
`;
