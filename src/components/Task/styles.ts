import styled from "styled-components";
import { ButtonProps } from "@mui/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 50rem;
  height: 4.5rem;
  gap: 1rem;

  background-color: var(--border-color);

  border-radius: 0.5rem;
  margin-bottom: 10px;
`;

export const TaskText = styled.p`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: white;
`;

export const TaskTextRisked = styled.p`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: #5b5b5b;

  text-decoration: line-through;
`;

export const CheckContainer = styled.div<ButtonProps>`
  cursor: pointer;
  color: #707070;

  :hover {
    color: #26c277;
  }
`;

export const DoneIconContainer = styled.div<ButtonProps>`
  cursor: pointer;
  color: #26c277;
`;

export const TrashContainer = styled.div`
  cursor: pointer;
  color: #707070;

  :hover {
    color: #de4e4e;
  }
`;
