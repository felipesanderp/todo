import './global.css';

import { Header } from './components/Header';
import { NewTaskForm } from './components/NewTaskForm';
import { NoTasks } from './components/NoTasks';
import { Tasks } from './components/Tasks';

import styles from './App.module.css'

import { TasksContext } from './contexts/TasksContext';
import { useContext } from 'react';

export function App() {
  const { tasks } = useContext(TasksContext)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTaskForm />

        <div className={styles.tasksInfo}>
          <div className={styles.tasksCreated}>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>

          <div className={styles.tasksCompleted}>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </div>

        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => {
              return (
                <Tasks 
                  key={task.content}
                  content={task.content}
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
