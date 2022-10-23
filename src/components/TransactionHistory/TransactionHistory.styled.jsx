import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 30px auto;
  width: 50%;

  text-align: center;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;

  color: white;
`;

export const TableRow = styled.tr`
  background-color: white;
  &:nth-child(even) {
    background-color: #d5deeb;
  }
`;

export const TableName = styled.th`
  background-color: #97b9f0;
  border: 1px solid;
`;

export const TableData = styled.th`
  font-size: 14px;
  font-weight: 400;
  color: grey;
  border: 1px solid white;
`;
