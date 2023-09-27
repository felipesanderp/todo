import { ChangeEvent, useContext } from 'react'
import { Trash } from 'phosphor-react'

import { TasksContext } from '../contexts/TasksContext'

import styles from './Tasks.module.css'
import { Task } from '../reducers/tasks/tasks'

interface TasksProps {
  task: Task
}

export function Tasks({ task }: TasksProps) {
  const { markTaskAsCompleted, removeTask } = useContext(TasksContext)

  function handleRadioInputChange(event: ChangeEvent<HTMLInputElement>) {
    markTaskAsCompleted(event.target.value)
  }

  function handleRemoveTask(id: string) {
    removeTask(id)
  }

  const isTaskCompleted = !!task.completed_at

  return (
    <div className={styles.tasks}>
      <input
        type="radio"
        value={task.id}
        name={task.id}
        id={task.id}
        onChange={handleRadioInputChange}
        checked={isTaskCompleted}
      />
      <label htmlFor={task.id} id="label" />

      <p className={isTaskCompleted ? styles.taskCompleted : styles.content}>
        {task.description}
      </p>

      <button onClick={() => handleRemoveTask(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}
