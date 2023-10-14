import {
  loadTaskFail,
  deleteTaskDone,
} from "../../stores/taskStore/taskEvents";
import { TaskStore } from "../../stores/taskStore/taskStore";

const execute = async (taskId: string): Promise<void> => {
  try {
    const { tasks } = TaskStore.getState();

    const arrayOfTasksWithoutDeletedOne = tasks.filter(
      (tasks) => tasks.taskId != taskId
    );

    deleteTaskDone(arrayOfTasksWithoutDeletedOne);
  } catch (error) {
    loadTaskFail("Não foi possível deletar a task");
  }
};

const DeleteTaskUseCase = {
  execute,
};

export default DeleteTaskUseCase;
