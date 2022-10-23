import styled from 'styled-components';

export const UserName = styled.p`
  margin: 0px 0px 0px 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const Avatar = styled.img`
  margin: 10px;
`;

export const Status = styled.span`
  width: 20px;
  margin-left: 10px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
