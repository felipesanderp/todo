import { ReactNode, createContext, useEffect, useState } from 'react'

interface Task {
  content: string
  isCompleted: boolean
}

interface TasksProviderProps {
  children: ReactNode
}

interface TasksContextData {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (content: string) => void
  completeTask: (content: string) => void
  totalIsCompleted: number
}

export const TasksContext = createContext({} as TasksContextData)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storagedTasks = localStorage.getItem('@todo:tasks')

    if (storagedTasks) {
      return JSON.parse(storagedTasks)
    }

    return [] as Task[]
  })
  const [totalIsCompleted, setTotalIsCompleted] = useState(0)

  const addTask = (task: Task) => {
    const getTasks = [...tasks]

    const newTask = {
      ...task,
    }

    getTasks.push(newTask)

    const sortedBtIsCompleted = getTasks.sort((value) => {
      return value.isCompleted ? 1 : -1
    })

    setTasks(sortedBtIsCompleted)
    localStorage.setItem('@todo:tasks', JSON.stringify(getTasks))
  }

  const removeTask = (content: string) => {
    const getTasks = [...tasks]
    const taskIndex = getTasks.findIndex((task) => task.content === content)

    if (taskIndex >= 0) {
      getTasks.splice(taskIndex, 1)

      setTasks(getTasks)
      localStorage.setItem('@todo:tasks', JSON.stringify(getTasks))
    }
  }

  const completeTask = (content: string) => {
    const getTasks = [...tasks]
    const taskIndex = getTasks.findIndex((task) => task.content === content)

    if (taskIndex >= 0) {
      getTasks[taskIndex].isCompleted = true

      const sortedBtIsCompleted = getTasks.sort((value) => {
        return value.isCompleted ? 1 : -1
      })

      setTasks(sortedBtIsCompleted)
      localStorage.setItem('@todo:tasks', JSON.stringify(getTasks))
    }
  }

  useEffect(() => {
    const countIsCompleted = () => {
      const getTasks = [...tasks]
      const totalIsCompleted = getTasks.filter(
        (task) => task.isCompleted === true,
      )

      if (totalIsCompleted.length < 0) {
        return null
      }

      setTotalIsCompleted(totalIsCompleted.length)
    }

    countIsCompleted()
  }, [tasks])

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, removeTask, completeTask, totalIsCompleted }}
    >
      {children}
    </TasksContext.Provider>
  )
}
