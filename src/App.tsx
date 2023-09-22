import './global.css';

import { Header } from './components/Header';
import { NewTaskForm } from './components/NewTaskForm';
import { NoTasks } from './components/NoTasks';
import { Tasks } from './components/Tasks';

import styles from './App.module.css'

import { TasksContext } from './contexts/TasksContext';
import { useContext } from 'react';

export function App() {
  const { tasks, totalIsCompleted } = useContext(TasksContext)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTaskForm />

        <div className={styles.tasksInfo}>
          <div className={styles.tasksCreated}>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.tasksCompleted}>
            <p>Concluídas</p>
            <span>
              {totalIsCompleted} de {tasks.length}
            </span>
          </div>
        </div>

        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => {
              return (
                <Tasks 
                  key={task.content}
                  content={task.content}
                  isCompleted={task.isCompleted}
                />
              )
            })}
          </div>
        ) : (
          <NoTasks />
        )}
      </div>
    </div>
  )
}
