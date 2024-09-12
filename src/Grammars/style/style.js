import styled from "styled-components";

// import RobotoBold from "../../assets/fonts/roboto/Roboto-Bold.ttf";
import { devicesMax } from "../../Materials/responsive/responsive";

const bgColor = "#1e2359";
const borderRadius = "6px";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: white; */
  display: inline-block;
  overflow: auto;
  text-align: start;
  padding: 10px 0 20px 0;
  color: white;
`;

export const Title = styled.div`
  width: 90%;
  height: 55px;
  background-color: ${bgColor};
  margin: 20px auto;
  color: white;
  border-radius: ${borderRadius};
  display: flex;
  align-items: center;
  font-size: 33px;
  opacity: 75%;
  padding-left: 30px;

  opacity: 75%;
  @media screen and (${devicesMax.tablet}) {
    font-size: 18px;
    padding: 10px 15px;
    height: auto;
  }
`;

export const Description = styled.div`
  width: 90%;
  height: fit-content;
  background-color: ${bgColor};
  opacity: 75%;
  margin: auto;
  border-radius: ${borderRadius};
  padding: 10px;
  color: white;
  font-size: 20px;
  border: 1px solid gray;
  p {
    margin: 10px 0;
  }
  .title {
    margin: 20px 0 5px 0;
  }
  .formula {
    width: 100%;
    background-color: black;
    color: white;
    padding: 8px 15px;
    font-size: 22px;
    border-radius: ${borderRadius};
    @media screen and (${devicesMax.tablet}) {
      font-size: 18px;
      padding: 5px 10px;
    }
  }
  li {
    margin: 10px 5px;
  }
`;

export const Test = styled.div`
  width: 90%;
  margin: 20px auto;
  color: white;
  background-color: ${bgColor};
  border-radius: ${borderRadius};
  padding: 15px;
  opacity: 75%;
  .mistakes {
    font-size: 20px;
    .cont {
      /* background-color: white; */
      margin: 3px 0;
      h4 {
        /* background-color: green; */
        padding: 0 10px;
      }
      p {
        /* background-color: red; */
        width: fit-content;
        padding: 2px 15px;
      }
      .uA{
       color: red;
      }
      .cA{
    color: green;
      }
    }
  }
  .score {
    width: 100%;
    text-align: center;
    font-size: 25px;
  }
  h2 {
    width: 100%;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
    @media screen and (${devicesMax.tablet}) {
      font-size: 20px;
    }
  }

  .questions {
    width: 100%;
    padding: 10px 5px;

    .question {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 22px;
      margin-bottom: 20px;
      @media screen and (${devicesMax.tablet}) {
        width: 100%;
        font-size: 18px;
      }
    }
    .answer {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;

      @media screen and (${devicesMax.tablet}) {
        width: 100%;
      }
      button {
        background-color: black;
        color: white;
        border: 1px solid gray;
        padding: 5px;
        border-radius: ${borderRadius};
        font-size: 20px;
        transition: 0.3s;

        :hover {
          opacity: 50%;
        }
      }
    }
  }

  .restartBtn{
    background-color: lightgreen;
    color: black;
    padding: 4px 6px;
    font-size: 18px;
    border: none;
    border-radius: ${borderRadius};
   margin: 10px 20px;
  }
`;
