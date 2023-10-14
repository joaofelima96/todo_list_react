import {
  loadTask,
  loadTaskFail,
  loadTaskDone,
} from "../../stores/taskStore/taskEvents";

const execute = async (): Promise<void> => {
  loadTask();

  try {
    loadTaskDone();
  } catch (error) {
    loadTaskFail("Não foi possível carregar as tasks");
  }
};

const LoadTasksUseCase = {
  execute,
};

export default LoadTasksUseCase;
