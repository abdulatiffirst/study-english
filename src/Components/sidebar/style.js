import styled from "styled-components";

import { devicesMax, devicesMin } from "../../Materials/responsive/responsive";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 15px 0;
  color: white;
  background-color: #1e2359;
  opacity: 75%;

  @media screen and (${devicesMax.to}) {
    display: none;
  }
  ul {
    width: 100%;
    height: 100%;
    overflow: auto;
    .title:hover {
      background-color: black;
    }
    li {
      transition: 0.6s;
      margin-top: 10px;
      padding: 5px 0;
      &:hover {
        background-color: rgba(219, 218, 215, 0.03);
      }
      h3 {
        color: lightgray;
        font-weight: 300;
        font-size: 17px;
        margin: 5px 0;
        padding: 8px 10px;
        border-bottom: 1px solid gray;
      }
      a {
        width: 2000000px;
        color: white;
        font-size: 20px;
        padding-left: 20px;
      }
    }
  }
`;

export const ContainerResponsive = styled.div`
  @media (${devicesMin.to}) and (${devicesMax.desktop}) {
    display: none;
  }
`;
export const SidebarContainerResponsive = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #1e2359;
  opacity: 75%;
  padding: 15px 0;
  color: white;

  ul {
    width: 100%;
    height: 100%;
    overflow: auto;

    li {
      text-align: start;
      padding: 5px 0;
      transition: 0.6s;

      h3 {
        color: lightgray;
        font-weight: 300;
        font-size: 15px;
        margin: 5px 0;
        padding: 8px 10px;
        border-bottom: 1px solid gray;
      }
      a {
        width: 100%;
        color: white;
        font-size: 17px;
        padding-left: 15px;
      }
    }
  }
`;
