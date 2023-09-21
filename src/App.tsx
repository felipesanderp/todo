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

        <div>
          <NoTasks />
        </div>
      </div>
    </div>
  )
}
