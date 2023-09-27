import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Task {
  id: string
  description: string
  completed_at: Date | null
  created_at: Date
  updated_at: Date
}

interface TasksProviderProps {
  children: ReactNode
}

interface TasksContextData {
  tasks: Task[]
  isLoading: boolean
  addTask: (description: string) => void
  // removeTask: (content: string) => void
  // completeTask: (content: string) => void
  // totalIsCompleted: number
}

export const TasksContext = createContext({} as TasksContextData)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get('/tasks')

      setTasks(response.data.tasks)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  // async function addTask(description: string) {
  //   const response = await api.post('/tasks', {
  //     data: {
  //       description,
  //     },
  //   })

  //   setTasks(response.data.tasks)
  // }

  const addTask = useCallback(async (description: string) => {
    try {
      setIsLoading(true)

      const response = await api.post('/tasks', {
        data: {
          description,
        },
      })

      setTasks(response.data.task)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // const [totalIsCompleted, setTotalIsCompleted] = useState(0)

  // const addTask = (task: Task) => {
  //   const getTasks = [...tasks]

  //   const newTask = {
  //     ...task,
  //   }

  //   getTasks.push(newTask)

  //   const sortedBtIsCompleted = getTasks.sort((value) => {
  //     return value.isCompleted ? 1 : -1
  //   })

  //   setTasks(sortedBtIsCompleted)
  //   localStorage.setItem('@todo:tasks', JSON.stringify(getTasks))
  // }

  // const removeTask = (content: string) => {
  //   const getTasks = [...tasks]
  //   const taskIndex = getTasks.findIndex((task) => task.content === content)

  //   if (taskIndex >= 0) {
  //     getTasks.splice(taskIndex, 1)

  //     setTasks(getTasks)
  //     localStorage.setItem('@todo:tasks', JSON.stringify(getTasks))
  //   }
  // }

  // const completeTask = (content: string) => {
  //   const getTasks = [...tasks]
  //   const taskIndex = getTasks.findIndex((task) => task.content === content)

  //   if (taskIndex >= 0) {
  //     getTasks[taskIndex].isCompleted = true

  //     const sortedBtIsCompleted = getTasks.sort((value) => {
  //       return value.isCompleted ? 1 : -1
  //     })

  //     setTasks(sortedBtIsCompleted)
  //     localStorage.setItem('@todo:tasks', JSON.stringify(getTasks))
  //   }
  // }

  // useEffect(() => {
  //   const countIsCompleted = () => {
  //     const getTasks = [...tasks]
  //     const totalIsCompleted = getTasks.filter(
  //       (task) => task.isCompleted === true,
  //     )

  //     if (totalIsCompleted.length < 0) {
  //       return null
  //     }

  //     setTotalIsCompleted(totalIsCompleted.length)
  //   }

  //   countIsCompleted()
  // }, [tasks])

  return (
    <TasksContext.Provider value={{ tasks, isLoading, addTask }}>
      {children}
    </TasksContext.Provider>
  )
}
