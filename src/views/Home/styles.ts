import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const FilterArea = styled.div`
  padding: 2%;
  display: flex;
  justify-content: space-around;
`;

export const ContainerTask = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0% 1%;

  a {
    color: #000000;
  }
`;
export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #180051;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  h3 {
    color: #180051;
    position: relative;
    top: 8px;
    background: #ffff;
    padding: 0px 10px;
  }
`;
