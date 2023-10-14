import { updateTaskDone } from "../../stores/taskStore/taskEvents";
import { TaskStore } from "../../stores/taskStore/taskStore";

const execute = async (taskId: string): Promise<void> => {
  const { tasks } = TaskStore.getState();

  const taskSelected = tasks.find((tasks) => tasks.taskId === taskId);

  try {
    if (taskSelected) {
      taskSelected.isTaskDone = !taskSelected.isTaskDone;
      updateTaskDone(tasks);
    }
  } catch (error) {}
};

const DoneTaskUseCase = {
  execute,
};

export default DoneTaskUseCase;
