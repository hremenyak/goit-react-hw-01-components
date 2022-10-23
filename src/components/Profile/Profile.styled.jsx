import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  align-items: center;
  width: 320px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid #b1baba;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const UserImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const Username = styled.p`
  font-weight: 700;
  color: black;
`;

export const ProfileDescription = styled.div`
  text-align: center;
  padding-top: 10px;
  color: grey;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding: 20px 0;
  margin: 0;
  background-color: #e1f2f2;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: centrer;
`;

export const Quantity = styled.span`
  font-weight: 600;
`;

export const Label = styled.span`
  color: gray;
  margin-bottom: 5px;
`;
