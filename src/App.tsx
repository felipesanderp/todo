import './global.css';

import { Header } from './components/Header';
import { NewTaskForm } from './components/NewTaskForm';
import { NoTasks } from './components/NoTasks';

import styles from './App.module.css'

export function App() {
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

        <NoTasks />
      </div>
    </div>
  )
}
