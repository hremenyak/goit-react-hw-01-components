import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  border: 1px solid #b1baba;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const List = styled.ul`
  padding: 0;
  width: 320px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
