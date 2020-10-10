import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  background-color: #180051;
  width: 100%;
  padding: 0 1%;
  border-bottom: 5px solid #ff8000;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  overflow: hidden;
  img {
    width: 100px;
    height: 40px;
  }
`;

export const RigthSide = styled.div`
  width: 50%;
  display: grid;
  justify-content: right;

  ul {
    display: flex;
    width: 100%;
    align-items: center;
    justify-items: right;
  }
  li {
    margin: 10px;
  }

  ul li a {
    color: #fff;
    font-weight: bold;
    &:hover {
      color: #ff8000;
    }
  }

  #notification {
    background: none;
    border: none;
    outline: none;
    img {
      position: relative;
      height: 25px;
      width: 20px;
      z-index: 1;
    }

    span {
      position: relative;
      background-color: #fff;
      color: #ff8000;
      padding: 2px 6px;
      border-radius: 50%;
      z-index: 2;
      top: -15px;
      right: 8px;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  .dividir::after {
    content: '|';
    padding: 0 10px;
    color: #fff;
  }
`;
