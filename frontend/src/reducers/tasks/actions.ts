import { Task } from './tasks'

export enum ActionsTypes {
  GET_TASKS = 'GET_TASKS',
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED',
}

export function getTasksAction(data: Task) {
  return {
    type: ActionsTypes.GET_TASKS,
    payload: {
      data,
    },
  }
}

export function addNewTaskAction(newTask: Task) {
  return {
    type: ActionsTypes.ADD_NEW_TASK,
    payload: {
      newTask,
    },
  }
}

export function markTaskAsCompletedAction(id: string) {
  return {
    type: ActionsTypes.MARK_TASK_AS_COMPLETED,
    payload: {
      id,
    },
  }
}
