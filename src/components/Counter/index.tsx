import { useStore } from "effector-react";
import {
  CounterContainer,
  CounterDiv,
  Line,
  IndividualContainer,
  CreatedTaskText,
  CompletedTaskText,
  CreatedCounter,
  CompletedCounter,
} from "./styles";
import { TaskStore } from "../../stores/taskStore/taskStore";

interface CounterTasks {
  createdTasks: number;
}

export const Counter = ({ createdTasks }: CounterTasks) => {
  const { tasks } = useStore(TaskStore);

  const doneTasks = tasks.filter((tasks) => tasks.isTaskDone).length;

  return (
    <CounterContainer>
      <Line></Line>
      <CounterDiv>
        <IndividualContainer>
          <CreatedTaskText>Tarefas criadas</CreatedTaskText>
          <CreatedCounter>{createdTasks}</CreatedCounter>
        </IndividualContainer>
        <IndividualContainer>
          <CompletedTaskText>Tarefas Concluidas</CompletedTaskText>
          <CompletedCounter>
            {doneTasks} de {createdTasks}
          </CompletedCounter>
        </IndividualContainer>
      </CounterDiv>
      <Line></Line>
    </CounterContainer>
  );
};
