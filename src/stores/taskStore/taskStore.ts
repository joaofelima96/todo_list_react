import { createStore } from "effector";

import {
  loadTask,
  loadTaskDone,
  createNewTaskDone,
  loadTaskFail,
} from "./taskEvents";

import { TaskInterface } from "./taskState";

const initialState: TaskInterface = {
  isLoading: false,
  tasks: [],
  hasError: false,
  errorMessage: "",
};

export const TaskStore = createStore<TaskInterface>(initialState)
  .on(loadTask, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  //esse vou usar para carregar as tasks assim que a página carregar, nele, virá o array de todas as tasks
  .on(loadTaskDone, (state) => ({
    ...state,
    isLoading: false,
    tasks: [...state.tasks],
    hasError: false,
    errorMessage: "",
  }))
  //esse é o evento que vai pegar o que foi submetido no formulário e acrescentar no array de tasks
  .on(createNewTaskDone, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: "",
    tasks: [data, ...state.tasks],
  }))
  .on(loadTaskFail, (state, data: string) => ({
    ...state,
    isLoading: false,
    hasError: true,
    errorMessage: data,
  }));
