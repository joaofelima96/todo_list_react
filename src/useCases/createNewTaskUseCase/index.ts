import {
  loadTask,
  createNewTaskDone,
  loadTaskFail,
} from "../../stores/taskStore/taskEvents";

const execute = async (taskName: string): Promise<void> => {
  const generatorTaskId =
    Date.now().toString(16) + Math.random().toString(16).substring(2);

  loadTask();

  try {
    createNewTaskDone({
      taskId: generatorTaskId,
      taskName: taskName,
      isTaskDone: false,
    });
  } catch (error) {
    loadTaskFail("Não foi possível criar a Task");
  }
};

const NewTaskUseCase = {
  execute,
};

export default NewTaskUseCase;
