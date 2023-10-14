export interface TaskValues {
  taskId: string;
  taskName: string;
  isTaskDone: boolean;
}

export interface TaskInterface {
  isLoading: boolean;
  tasks: TaskValues[];
  hasError: boolean;
  errorMessage: string;
}
