import styled from "styled-components";

// lembre-se de usar html semântico
export const Container = styled.main`
  margin: 0 auto;

  background-color: #8396cd;
  min-height: 100vh;
  .labelStates {
    max-width: 350px;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  .labelCities {
    max-width: 350px;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    padding-left: 29px;
    font-size: 24px;
    margin-left: 78px;
    text-shadow: #000 2px 3px 2px;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
  }
  @media (max-width: 881px) {
    display: grid;
    h1 {
      margin-left: 0px;
      position: unset;
      padding-left: 20px;
    }
    justify-content: center;
    height: 82vh;
  }
`;

export const ContainerNamePicture = styled.div`
  img {
    /* position: relative;
    top: 69px; */
  }
  display: flex;

  justify-content: space-between;
  width: 96%;
  padding-left: 28px;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  @media (max-width: 881px) {
    padding-left: 0px;
    width: 90%;
    img {
      position: inherit;
    }
  }
`;

export const Container = styled.main`
  margin: 40px auto 100px;
  max-width: 1000px;
  width: 90%;
  padding: 20px 40px;
  background-color: #eee;
  @media (max-width:768px) {
    padding: 20px 15px;
    h3{
      font-size: 15px;
    }
  }
  input,
  button,
  select,
  textarea {
    width: 100%;
    border: none;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px 10px;
    margin: 10px 0;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 300;
    font-family: var(--font-text);
  }
  input[type="submit"],
  button {
    text-transform: capitalize;
    font-weight: 800;
    color: white;
    cursor: pointer;
    background-color: var(--color-primary);
    :hover {
      background-color: var(--color-aux);
    }
  }
  li{
    display: inline-flex;
    align-items: center;
  }
  li > button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    font-size: 11px;
    height: 20px;
    padding: 0 1px 2px 0;
    margin: 0 6px 0 0;
    border-radius: 50%;
    font-weight: 600;
    text-transform: lowercase;
  }
  .labelStates {
    display: flex;
    flex-direction: column;
  }
  .labelCities {
    display: flex;
    flex-direction: column;
  }
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;
  }
  .cidades-registradas {
    margin: 25px 0;
    ul {
      li {
        display: inline-block;
        padding: 10px 15px;
        color: var(--color-primary);
        margin: 10px;
        background-color: lightblue;
        border-radius: 10px;
        cursor: pointer;
        button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          font-size: 12px;
          height: 20px;
          padding: 0;
          margin: 0 6px 0 0;
          border-radius: 50%;
          font-weight: 600;
          text-transform: lowercase;
        }
      }
    }
  }
  .checkin {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin: 0;
      @media (max-width:768px) {
        font-size: 11px;
        width: 80%;
      }
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      display: inline-block;
      margin: 0 10px 0 0;
      cursor: pointer;
    }
  }
  h1 {
    font-size: 26px;
    text-align: center;
    margin: 20px auto 40px;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px;
    width: 100%;
    max-width: 400px;
    letter-spacing: -1px;

    @media (max-width:768px) {
      font-size: 26px;
      padding: 0;
    }
  }
  label,
  p {
    font-weight: 600;
    margin: 20px 0 0;
  }

  @media (max-width: 881px) {
    display: grid;
    h1 {
      margin: 40px 0;
      text-align: center;
    }
    justify-content: center;
  }
`;

export const ContainerDescription = styled.div`
  textarea {
    width: 70%;
  }
  text-transform: uppercase;
  font-family: var(--font-title);
  color: #04164d;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 881px) {
    textarea {
      width: 90%;
      min-width: 200px;
    }
  }
`;

export const ContainerServiceCities = styled.div``;

export const ContainerDad = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
