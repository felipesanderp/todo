import { produce } from 'immer'

import { ActionsTypes } from './actions'

export interface Task {
  id: string
  description: string
  completed_at: Date | null
  created_at: Date
  updated_at: Date
}

interface TasksState {
  tasks: Task[]
}

export function tasksReducer(state: TasksState, action: any) {
  switch (action.type) {
    case ActionsTypes.GET_TASKS:
      return {
        ...state,
        tasks: action.payload.data,
      }
    case ActionsTypes.ADD_NEW_TASK:
      return produce(state, (draft) => {
        draft.tasks.push(action.payload.newTask)
      })
    default:
      return state
  }
}
