import { useStore } from "effector-react";

import "./App.css";
import todoLogo from "./assets/todo-log.svg";

import { Body, Header } from "./App";
import { Form } from "./components/Form";
import { Counter } from "./components/Counter";
import { Task } from "./components/Task";

import { TaskStore } from "./stores/taskStore/taskStore";
import NewTaskUseCase from "./useCases/createNewTaskUseCase";
import { useEffect } from "react";
import LoadTasksUseCase from "./useCases/loadTasksUseCase";
import { EmptyTask } from "./components/EmptyTask";

function App() {
  const { tasks } = useStore(TaskStore);

  function createNewTask(newTaskName: string) {
    NewTaskUseCase.execute(newTaskName);
  }

  useEffect(() => {
    LoadTasksUseCase.execute();
  }, []);

  return (
    <>
      <Header>
        <img src={todoLogo} alt="todo logo"></img>
      </Header>
      <Body>
        <Form newTaskName={createNewTask} />
        <Counter createdTasks={tasks.length} />
        {tasks.length > 0 ? (
          tasks.map((tasks) => {
            return (
              <Task
                key={tasks.taskId}
                taskName={tasks.taskName}
                isTaskDone={tasks.isTaskDone}
                taskId={tasks.taskId}
              />
            );
          })
        ) : (
          <EmptyTask />
        )}
      </Body>
    </>
  );
}

export default App;
