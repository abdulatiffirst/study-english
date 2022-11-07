import styled from "styled-components";
import RobotoBold from "../../assets/fonts/roboto/Roboto-Bold.ttf"
export const Container = styled.div`
width: 100%;
height: calc(100vh - 70px ) ;
overflow: auto;
@font-face {
    font-family:roboto ;
    src: url(${RobotoBold});
}
.box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
background-color: black;
position: relative;

    h1{
color: white;
font-family: roboto;
font-size: 42px;
border: 1px solid white ;
padding: 15px 20px ;
border-radius: 5px;
span{
    
    text-shadow: 10px 10px 10px #202124;
}
    }

    .text{
        position: absolute;
        bottom: 40px;
        left: 80px;
        font-size: 25px;
        color: white;
        text-shadow: 10px 10px 40px white;
    }
    .text-2{
        position: absolute;
        top: 60px;
       right: 50px;
        font-size: 25px;
        color: white;
        text-shadow: 10px 10px 50px white;
    }
    .text-3{
        position: absolute;
        bottom: 100px;
       right: 500px;
        font-size: 25px;
        color: white;
        text-shadow: 10px 10px 60px white;
    }
    
    .text-4{
        position: absolute;
        bottom: 310px;
       left: 300px;
        font-size: 40px;
        color: white;
        text-shadow: 0 10px 70px white;
    }
    .text-5{
        position: absolute;
        bottom: 400px;
       right: 600px;
        font-size: 30px;
        color: white;
        text-shadow: 10px 10px 80px white;
    }
    .text-6{
        position: absolute;
        bottom: 200px;
       right: 200px;
        font-size: 30px;
        color: white;
        text-shadow: 10px 10px 90px white;
    }
    .text-7{
        position: absolute;
       top: 80px;
       left: 100px;
        font-size: 30px;
        color: white;
        text-shadow: 10px 10px 100px white;
    }
    .text-8{
        position: absolute;
       bottom: 100px;
       left: 400px;
        font-size: 30px;
        color: white;
        text-shadow: 0 0 40px white;
    }
    
}
`