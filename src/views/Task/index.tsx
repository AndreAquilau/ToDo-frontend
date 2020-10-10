import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { format } from 'date-fns';
import api from 'src/services/api';

import {
  Container,
  Form,
  TypeIcons,
  Input,
  TextArea,
  Options,
  Save,
} from './styles';
import iconCalendar from '../../assets/icons/calendar.png';
import iconClock from '../../assets/icons/clock.png';

// Components
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import icons from '../../utils/typeIcons';

export default ({ match }: any): JSX.Element => {
  const [filterActived, setFilterActived] = useState('');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState([]);

  const [type, setType] = useState<number | undefined>();
  const [id, setId] = useState<string>();
  const [done, setDone] = useState<any>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<any>();
  const [hour, setHour] = useState<any>();
  const [macaddress, setMacaddress] = useState<string>('11:11:11:11:11:11');
  const [redirect, setRedirect] = useState(false);

  async function lateVerify() {
    await api
      .get(`/task/filter/late/11:11:11:11:11:11`)
      .then((response) => {
        setLateCount(response.data);
      })
      .catch((error) => console.log(error.message));
  }
  async function notification() {
    setFilterActived('late');
  }

  async function save() {
    if (done && match.params.id) {
      await api
        .put(`/task/${match.params.id}/${done}`, {
          macaddress,
          done,
        })
        .then((response) => {
          setRedirect(true);
        })
        .catch((err) => alert(`${err}`));
    }
    if (match.params.id) {
      await api
        .put(`/task/${match.params.id}`, {
          macaddress,
          type,
          title,
          description,
          when: new Date(`${date}T${hour}:00.000Z`),
          done,
        })
        .then((response) => {
          setRedirect(true);
        })
        .catch((err) => alert(`${err}`));
      return;
    }
    await api
      .post('/task', {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000Z`,
        done,
      })
      .then((response) => {
        setRedirect(true);
      })
      .catch((err) => alert(`${err}`));
  }

  async function deleteTask() {
    if (match.params.id) {
      const validation = window.confirm('Deseja Realmente Deletar a Tarefa?');
      if (validation) {
        await api
          .delete(`/task/${match.params.id}`)
          .then((response) => {
            setRedirect(true);
          })
          .catch((err) => alert(`${err}`));
      }
    }
  }

  async function loadTaskDetails() {
    await api
      .get(`/task/${match.params.id}`)
      .then((response) => {
        setType(response.data[0].type);
        setTitle(response.data[0].title);
        setDescription(response.data[0].description);
        setDate(format(new Date(response.data[0].when), 'yyyy-MM-dd'));
        setHour(format(new Date(response.data[0].when), 'HH:MM'));
        setDone(response.data[0].done);
      })
      .catch((error) => console.log(error.message));
  }

  useEffect(() => {
    lateVerify();
    loadTaskDetails();
  }, [filterActived]);

  return (
    <Container>
      {redirect && <Redirect to="/" />}
      <Header
        lateCount={lateCount}
        click={setTasks}
        setFilterActived={notification}
      />
      <Form>
        <TypeIcons>
          {icons.map(
            (
              icon: string | null,
              index: number,
              array: Array<string | null>,
            ): void | JSX.Element => {
              if (icon) {
                return (
                  <button
                    type="button"
                    onClick={(e) => {
                      setType(index);
                    }}
                  >
                    <img
                      src={icon}
                      key={index}
                      className={type && type !== index ? 'inative' : ''}
                    />
                  </button>
                );
              }
            },
          )}
        </TypeIcons>
        <Input>
          <span>Título</span>
          <input
            type="text"
            name=""
            id=""
            value={title}
            placeholder="Título da tarefa..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </Input>
        <TextArea>
          <span>Título</span>
          <textarea
            rows={5}
            placeholder="Detalhes da tarefa..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </TextArea>
        <Input>
          <span>Data</span>
          <input
            type="date"
            name=""
            id=""
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
          <img src={iconCalendar} alt="Date" />
        </Input>
        <Input>
          <span>Hora</span>
          <input
            type="time"
            name=""
            id=""
            value={hour}
            onChange={(e) => {
              setHour(e.target.value);
            }}
            required
          />
          <img src={iconClock} alt="Time" />
        </Input>
        <Options>
          <div id="options">
            <input
              type="checkbox"
              name=""
              id=""
              onClick={(e) => {
                setDone(!done);
              }}
              checked={done}
            />
            <span>Concluído</span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              deleteTask();
            }}
          >
            Excluir
          </button>
        </Options>
        <Save>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              save();
            }}
          >
            Salvar
          </button>
        </Save>
      </Form>
      <Footer />
    </Container>
  );
};
