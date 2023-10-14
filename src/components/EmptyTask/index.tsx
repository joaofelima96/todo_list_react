import { Container, Text1, Text2 } from "./styles";
import emptyTask from "../../assets/empty-tasks.svg";

export const EmptyTask = () => {
  return (
    <Container>
      <img src={emptyTask} />
      <div>
        <Text1>Você ainda não tem tarefas cadastradas</Text1>
        <Text2>Crie tarefas e organize seus itens a fazer</Text2>
      </div>
    </Container>
  );
};
