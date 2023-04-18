import styled from 'styled-components';

//заміняємо ul на List(по суті ми змінюємо тег на клас)
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  li:hover {
    scale: 1.01;
  }
`;

export const ListItem = styled.li`
  width: 320px;
  background-color: #fff;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* flex-grow: 1; */
`;
