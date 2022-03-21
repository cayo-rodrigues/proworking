import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

// lembre-se de usar html semântico
export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h1 {
    padding-top: 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  img {
    display: none;
  }
  @media (max-width: 850px) {
    .time {
      display: block;
      width: 640px;
    }
    height: 100%;
    margin-top: 100px;
    flex-direction: row;
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  width: 90vw;
  height: auto;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 10px;
    margin-top: 50px;
    width: auto;
    height: auto;
    display: flex;
  }
`;

export const Card = styled.div`
  width: 260px;
  max-height: 300px;
  background-color: var(--color-secondary);
  margin: 0 auto;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 20px;
  line-height: 2.5em;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 30px;
    height: 200px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-size: 20px;
    top: 0;
    left: 0;
    padding-left: 10px;
  }
  h2,
  h3 {
    padding-left: 10px;
    font-size: 14px;
  }

  img {
    width: 60px;
    display: block;
    padding-right: 10px;
  }
`;

export const OurTeam = styled.div`

  margin: 50px auto;
  max-width: 1400px;
  h1{
    font-size: 60px;
    text-align: center;
    @media (max-width: 460px) {
        font-size: 30px;
    }
  }
  p{
    max-width: 900px;
    padding: 0 20px;
    font-size: 20px;
    text-align: center;
    line-height: 1.6rem;
    margin: 40px auto 50px;
    @media (max-width: 460px) {
        font-size: 16px;

    }
  }
  h3{
    font-size: 40px;
    text-align: center;
    @media (max-width: 460px) {
        font-size: 25px;
      }
  }

  .linha{
    height: 3px;
    background-color: blue;
    margin: 20px auto;
    width: 120px;
  }
  ul{
    margin: 0px auto 40px;
    max-width: 1000px;
    
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    gap: 30px;
    li{
      position: relative;
      width: 290px;
      height: 290px;
      margin: 0px 0;
      background-color: #f4f4f4;
      border-radius: 30px;
      @media (max-width: 460px) {
        width: 300px;
        height: 300px;
      }
      img{
        object-fit: cover;
        border-radius: 0px;
        width: 100%;
        height: 100%;
        
      }
      div{
        display: none;
        animation: fadeIn 0.5s;
        position: absolute;
        bottom: 0px;
        width: 100%;
        left: 0;
        padding: 10px;
        background-color: rgba(0,0,0,0.5);
        color: white;
        text-align: center;
        transition: 1.5s;
        border-radius: 0 0 0px 0px;
        h4{
          font-size: 20px;
        }
        p{
          font-size: 15px;
          margin: 5px 0;
        }
        a{
          color: white;
          svg{
            width: 30px;
            height: 30px;
            color: #ddd;
            transition: 0.5s all;
            cursor: pointer;
            :hover{
              transform: scale(1.4);
              transition: 0.5s all;
              color: #fff;
            }
          }
        }
      }
    }
    li:hover{
      transition: 1.5s;
      div{
        display: initial;
      }
    }
  }

`