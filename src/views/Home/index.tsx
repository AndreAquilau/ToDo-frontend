import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from 'src/services/api';
import { Container, FilterArea, ContainerTask, Title } from './styles';
import icon from '../../assets/icons/filter@2x.png';
import icons from '../../utils/typeIcons';

// Components
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard/index';

export default (): JSX.Element => {
  const [all, today, week, month, year] = [
    'all',
    'today',
    'week',
    'month',
    'year',
  ];
  const [filterActived, setFilterActived] = useState('');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState([]);

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(error.message));
  }

  async function lateVerify() {
    await api
      .get(`/task/filter/late/11:11:11:11:11:11`)
      .then((response) => {
        console.log(response.data);
        setLateCount(response.data);
      })
      .catch((error) => console.log(error.message));
  }

  async function notification() {
    setFilterActived('late');
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActived]);

  return (
    <Container>
      <Header
        lateCount={lateCount}
        click={setTasks}
        setFilterActived={notification}
      />
      <FilterArea>
        <FilterCard
          icon={icon}
          title="Todos"
          actived={filterActived === all}
          typeFilter={all}
          setFilterActived={setFilterActived}
        />
        <FilterCard
          icon={icon}
          title="Hoje"
          actived={filterActived === today}
          typeFilter={today}
          setFilterActived={setFilterActived}
        />
        <FilterCard
          icon={icon}
          title="Semana"
          actived={filterActived === week}
          typeFilter={week}
          setFilterActived={setFilterActived}
        />
        <FilterCard
          icon={icon}
          title="Mês"
          actived={filterActived === month}
          typeFilter={month}
          setFilterActived={setFilterActived}
        />
        <FilterCard
          icon={icon}
          title="Ano"
          actived={filterActived === year}
          typeFilter={year}
          setFilterActived={setFilterActived}
        />
      </FilterArea>
      <Title>
        <h3>{filterActived === 'late' ? 'Tarefas Atrasadas' : 'Tarefas'}</h3>
      </Title>
      <ContainerTask>
        {tasks.map(
          (task: {
            id: string;
            title: string;
            when: string;
            description: string;
            type: number;
          }) => {
            return (
              <Link to={`/task/${task.id}`} key={task.id}>
                <TaskCard
                  title={task.title}
                  description={task.description}
                  when={task.when}
                  icon={icons[task.type] || ''}
                />
              </Link>
            );
          },
        )}
      </ContainerTask>

      <Footer />
    </Container>
  );
};
