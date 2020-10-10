import styled from 'styled-components';
import filterCardConfig from '../../config/filterCard';

const { backgroundColor } = filterCardConfig;

export const Container = styled.div`
  width: 230px;
  height: 70px;
  border-radius: 6px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all ease 1s;

  background: ${(props: { actived: boolean }) =>
    props.actived ? backgroundColor.default : backgroundColor.selected};

  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
  span {
    align-self: flex-end;
    color: #ffff;
    font-weight: bold;
    font-size: 18px;
  }
`;
