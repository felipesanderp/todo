import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './NewTaskForm.module.css'

import { TasksContext } from '../contexts/TasksContext'

export function NewTaskForm() {
  const [newTaskText, setNewTaskText] = useState('')

  const { addTask } = useContext(TasksContext)

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    addTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  return (
    <form onSubmit={handleAddNewTask} className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
      />

      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
