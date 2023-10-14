import styled from "styled-components";

export const CounterContainer = styled.div`
  margin: 3rem 0 3rem 0;
`;

export const Line = styled.div`
  width: 50rem;
  border: 1.5px solid var(--border-color);
`;

export const CounterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1.25rem 0 1.25rem 0;
  padding: 0 1rem 0 1rem;
`;

export const IndividualContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CreatedTaskText = styled.p`
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 700;
  color: var(--created-task-color);
`;
export const CompletedTaskText = styled.p`
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 700;
  color: var(--completed-task-color);
`;

export const CreatedCounter = styled.p`
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 700;
  color: black;

  background-color: var(--created-task-color);

  padding: 2px 8px;
  border-radius: 62.44rem;
`;

export const CompletedCounter = styled.p`
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 700;
  color: white;

  background-color: var(--completed-task-color);

  padding: 2px 8px;
  border-radius: 62.44rem;
`;
