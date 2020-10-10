import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TypeIcons = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0 10px 0;

  .inative {
    opacity: 0.5;
  }
  button {
    background: none;
    border: none;
    outline: none;
  }
  img {
    width: 40px;
    height: 40px;
    transition: all ease 1s;

    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Input = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  margin: 10px 0 10px 0;

  span {
    color: #707070;
    margin-bottom: 10px;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ff8000;
    color: #000000;
    font-weight: bold;
    &::-webkit-calendar-picker-indicator {
      /* Your CSS here */
      background: none;
      z-index: 2;
      cursor: pointer;
    }
  }

  img {
    width: 15px;
    height: 15px;
    position: relative;
    z-index: 1;
    left: 96%;
    bottom: 30%;
  }
`;

export const TextArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  margin: 10px 0 10px 0;

  span {
    color: #707070;
    margin-bottom: 10px;
  }

  textarea {
    border: 1px solid #ff8000;
    outline: none;
    color: #000000;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const Options = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin: 10px 0 10px 0;

  #options {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div span {
    color: #ff8000;
    font-weight: bold;
  }

  input {
    width: 20px;
    height: 20px;
  }

  button {
    background: none;
    border: none;
    outline: none;
    color: #180051;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
  }
`;

export const Save = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-content: center;

  margin: 10px 0 10px 0;

  button {
    width: 100%;
    background: #ff8000;
    border: none;
    outline: none;
    border-radius: 36px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    padding: 3% 0%;
    font-size: 16px;
  }
`;
