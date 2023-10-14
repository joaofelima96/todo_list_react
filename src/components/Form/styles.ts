import { ButtonProps } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;

  gap: 16px;
`;

export const InputTask = styled.input`
  height: 3.25rem;
  width: 38rem;

  font-family: var(--font-family);
  font-size: 16px;
  color: var(--text-color);

  padding: 1rem;
  border-style: none;
  border-radius: 8px;

  background-color: var(--input-color);
`;

export const ButtonCreate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 3.25rem;
  width: 6rem;
  border-style: none;
  border-radius: 8px;

  background-color: var(--buttom-color);

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.disabled ? "var(--buttom-color)" : "var(--buttom-enable)"};

  transition: background-color 0.2s;
`;

export const TextButton = styled.p<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 700;
  color: var(--text-buttom-color);

  color: ${(props) => (props.disabled ? "var(--text-buttom-color)" : "white")};

  transition: color 0.2s;
`;
