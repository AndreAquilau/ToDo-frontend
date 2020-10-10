import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { Container, BottomCard, TopCard } from './styles';
import CardTaskInterface from './interface/CardTaskInterface';

export default (props: CardTaskInterface): JSX.Element => {
  const { icon, when, title, key } = props;
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'), [when]);
  const time = useMemo(() => format(new Date(when), 'HH:mm'), [when]);
  return (
    <Container key={key}>
      <TopCard className="headerCard">
        <img src={icon} alt="Futebol" />
        <span>{title}</span>
      </TopCard>
      <BottomCard className="footerCard">
        <span className="date">{date}</span>
        <span className="time">{time}</span>
      </BottomCard>
    </Container>
  );
};
