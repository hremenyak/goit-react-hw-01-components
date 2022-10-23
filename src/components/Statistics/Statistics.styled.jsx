import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 320px;
  border: 1px solid #b1baba;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  margin: 0px;
  width: 100%;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: grey;
  font-weight: 700;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: white;
  padding: 10px 0px;
  width: 100%;
  background-color: ${props => getRandomHexColor()};
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
