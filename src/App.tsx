import './global.css';

import { Header } from './components/Header';

import styles from './App.module.css'
import { NewTaskForm } from './components/NewTaskForm';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTaskForm />
      </div>
    </div>
  )
}
