import React from 'react';
import { Header, LeftSide, RigthSide } from './styles';
import logo from '../../assets/logo/logo@2x.png';
import bell from '../../assets/icons/bell@2x.png';
import HeaderInterface from './interface/HeaderInterface';

export default (props: HeaderInterface): JSX.Element => {
  const { lateCount, click, setFilterActived } = props;
  return (
    <>
      <Header className="header">
        <LeftSide>
          <img src={logo} alt="logo" className="logo" />
        </LeftSide>

        <RigthSide>
          <ul>
            <li>
              <a href="/">INICIO</a>
            </li>
            <span className="dividir" />

            <li>
              <a href="/task">NOVA TAREFA</a>
            </li>
            <span className="dividir" />
            <li>
              <a href="#">SINCRONIZAR CELULAR</a>
            </li>
            <span className="dividir" />
            <li>
              <button
                id="notification"
                onClick={(e) => {
                  e.preventDefault();
                  click([...lateCount]);
                  setFilterActived();
                }}
                type="button"
              >
                <img src={bell} alt="notificação" />
                <span>{lateCount.length}</span>
              </button>
            </li>
          </ul>
        </RigthSide>
      </Header>
    </>
  );
};
