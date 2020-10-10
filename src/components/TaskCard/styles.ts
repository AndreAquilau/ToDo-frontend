import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 140px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  margin: 10px;
  transition: all ease 1s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  padding: 1%;
`;

export const TopCard = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
  }

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
`;
export const BottomCard = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  .date {
    color: #ff8000;
  }

  .time {
    color: #707070;
  }
`;
