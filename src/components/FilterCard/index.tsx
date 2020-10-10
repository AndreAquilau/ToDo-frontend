import React from 'react';
import { Container } from './styles';
import Filter from '../../interface/FilterCard';

export default function FilterCard(props: Filter): JSX.Element {
  const { typeFilter, icon, actived, setFilterActived, title } = props;

  return (
    <Container
      actived={actived}
      onClick={(e) => {
        setFilterActived(typeFilter);
      }}
    >
      <img src={icon} alt="Filtro" />
      <span>{title}</span>
    </Container>
  );
}
