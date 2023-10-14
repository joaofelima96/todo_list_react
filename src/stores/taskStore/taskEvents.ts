import { createEvent } from "effector";
import { TaskValues } from "./taskState";

export const loadTask = createEvent("loadTask");
export const loadTaskDone = createEvent("loadTask");
export const createNewTaskDone = createEvent<TaskValues>("createNewTask");
export const loadTaskFail = createEvent<string>("loadTask");
