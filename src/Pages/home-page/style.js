import styled from "styled-components";
// import RobotoBold from "../../assets/fonts/roboto/Roboto-Bold.ttf";
import { devicesMax } from "../../Materials/responsive/responsive";
import bg from "../../assets/images/BgMainPage.png"

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow: auto;
 
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: black; */
    position: relative;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    div {
      @media screen and (${devicesMax.laptop}) {
        display: none;
      }
    }
    h1 {
      color: white;
      /* font-family: roboto; */
      font-size: 50px;
      border: 1px solid white;
      padding: 15px 20px;
      border-radius: 5px;
      text-shadow: 4.2px 4px 1px gray;

      @media screen and (${devicesMax.tablet}) {
        padding: 5px 10px;
        border: none;
        width: 90%;
        text-align: left;
      }
      span {
  
      }
    }
    .anime {
      position: absolute;
      color: white;
      animation: anime 0.6s infinite ease-in-out alternate;
      @keyframes anime {
        from {
          transform: translateY(1px) scale(1.01);
        }
        to {
          transform: translateY(-1px) scale(1.06);
        }
      }
    }
    .text {
      bottom: 40px;
      left: 80px;
      font-size: 25px;
      text-shadow: 10px 10px 40px white;
    }
    .text-2 {
      top: 60px;
      right: 50px;
      font-size: 25px;
      text-shadow: 10px 10px 40px white;
      animation-delay: 0.1s;
    }
    .text-3 {
      bottom: 100px;
      right: 500px;
      font-size: 25px;
      text-shadow: 10px 10px 50px white;
      animation-delay: 0.2s;
    }

    .text-4 {
      top: 150px;
      left: 300px;
      font-size: 40px;
      text-shadow: 0 0 20px white;
      animation-delay: 0.3s;
    }
    .text-5 {
      bottom: 400px;
      right: 600px;
      font-size: 30px;
      text-shadow: 10px 10px 60px white;
      animation-delay: 0.4s;
    }
    .text-6 {
      bottom: 200px;
      right: 200px;
      font-size: 30px;
      text-shadow: 10px 10px 30px white;
      animation-delay: 0.5s;
    }
    .text-7 {
      top: 80px;
      left: 100px;
      font-size: 30px;
      text-shadow: 10px 10px 20px white;
      animation-delay: 0.6s;
    }
    .text-8 {
      bottom: 100px;
      left: 400px;
      font-size: 30px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.7s;
    }
    .text-9 {
      bottom: 250px;
      left: 50px;
      font-size: 30px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.8s;
    }
    .text-10 {
      top: 50px;
      left: 500px;
      font-size: 30px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.9s;
    }
    .text-11 {
      top: 50px;
      right: 400px;
      font-size: 30px;
      text-shadow: 0 0 30px white;
      animation-delay: 1s;
    }
    .text-12 {
      top: 150px;
      right: 250px;
      font-size: 30px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.1s;
    }
    .text-13 {
      bottom: 80px;
      right: 100px;
      font-size: 30px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.2s;
    }
    .text-14 {
      bottom: 50px;
      left: 500px;
      font-size: 25px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.3s;
    }
    .text-15 {
      bottom: 150px;
      left: 180px;
      font-size: 25px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.4s;
    }
    .text-16 {
      bottom: 300px;
      right: 120px;
      font-size: 30px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.5s;
    }
    .text-17 {
      top: 150px;
      left: 450px;
      font-size: 30px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.6s;
    }
    .text-18 {
      bottom: 150px;
      left: 550px;
      font-size: 27px;
      text-shadow: 0 0 30px white;
      animation-delay: 0.7s;
    }
  }
`;
