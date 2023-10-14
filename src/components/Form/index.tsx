import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { ButtonCreate, FormContainer, InputTask, TextButton } from "./styles";
import { ChangeEvent, FormEvent, useState } from "react";

interface taskProps {
  newTaskName: (task: string) => void;
}

export const Form = ({ newTaskName }: taskProps) => {
  const [textInput, setTextInput] = useState("");

  function createTask(event: FormEvent) {
    event.preventDefault();
    newTaskName(textInput);

    setTextInput("");
  }

  function textInputchange(event: ChangeEvent<HTMLInputElement>) {
    setTextInput(event.target.value);
  }

  const isTextInputEmpty = !textInput;

  return (
    <FormContainer onSubmit={createTask}>
      <InputTask
        value={textInput}
        onChange={textInputchange}
        placeholder="Adicione uma tarefa"
        required
      ></InputTask>
      <ButtonCreate type="submit" disabled={isTextInputEmpty}>
        <TextButton disabled={isTextInputEmpty}>
          Criar <AddCircleOutlineTwoToneIcon />
        </TextButton>
      </ButtonCreate>
    </FormContainer>
  );
};
