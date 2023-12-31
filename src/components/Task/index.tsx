import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import {
  CheckContainer,
  Container,
  DoneIconContainer,
  TaskText,
  TaskTextRisked,
  TrashContainer,
} from "./styles";
import DoneTaskUseCase from "../../useCases/doneTasksUseCase";
import DeleteTaskUseCase from "../../useCases/deleteTaskUseCase";

export interface taskInterface {
  taskName: String;
  isTaskDone: boolean;
  taskId: string;
}

export const Task = ({ taskName, isTaskDone, taskId }: taskInterface) => {
  function changeIconTasks(taskIdSelected: string) {
    DoneTaskUseCase.execute(taskIdSelected);
  }

  function deleteTask(taskIdSelected: string) {
    DeleteTaskUseCase.execute(taskIdSelected);
  }

  return (
    <Container>
      {!isTaskDone ? (
        <CheckContainer onClick={() => changeIconTasks(taskId)}>
          <CircleOutlinedIcon style={{ fontSize: 25 }} />
        </CheckContainer>
      ) : (
        <DoneIconContainer onClick={() => changeIconTasks(taskId)}>
          <CheckCircleOutlineOutlinedIcon style={{ fontSize: 25 }} />
        </DoneIconContainer>
      )}
      {!isTaskDone ? (
        <TaskText>{taskName}</TaskText>
      ) : (
        <TaskTextRisked>{taskName}</TaskTextRisked>
      )}
      <TrashContainer onClick={() => deleteTask(taskId)}>
        <DeleteForeverOutlinedIcon style={{ fontSize: 25 }} />
      </TrashContainer>
    </Container>
  );
};
