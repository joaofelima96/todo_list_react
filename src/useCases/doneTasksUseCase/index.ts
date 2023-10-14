import { TaskStore } from "../../stores/taskStore/taskStore";

const execute = async (taskId: string): Promise<void> => {
  const { tasks } = TaskStore.getState();

  const indexOfTask = tasks.findIndex((tasks) => tasks.taskId === taskId);
  const taskSelected = tasks.filter((tasks) => tasks.taskId === taskId)[0];

  try {
    if (taskSelected.isTaskDone === false) {
      console.log("o isTaskDone está false");
      const updateTaskStatus = [...tasks];
      updateTaskStatus[indexOfTask] = {
        ...updateTaskStatus[indexOfTask],
        isTaskDone: true,
      };
    }
    if (taskSelected.isTaskDone === true) {
      console.log("o isTaskDone está true");
      const updateTaskStatus = [...tasks];
      updateTaskStatus[indexOfTask] = {
        ...updateTaskStatus[indexOfTask],
        isTaskDone: false,
      };
    }
  } catch (error) {}
};

const DoneTaskUseCase = {
  execute,
};

export default DoneTaskUseCase;
