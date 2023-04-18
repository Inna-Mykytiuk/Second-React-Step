import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 8px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg:hover {
    color: red;
    width: 16px;
    height: 16px;
  }
`;

export const RecipeDifficulties = styled.div``;

export const BadgeList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Badge = styled.span`
  padding: 8px 16px;
  align-items: center;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  background-color: ${props => {
    if (!props.isActive) {
      return 'white';
    }

    switch (props.value) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'orange';
      case 'hard':
        return 'red';
      default:
        return 'white';
    }
    // return props.isActive ? 'orange' : 'transparent';
  }};
  color: ${props => {
    return props.isActive ? '#fff' : '#000';
  }};
  text-transform: ${props => {
    return props.isActive ? 'uppercase' : 'none';
  }};
`;

export const RecipeTitle = styled.h2`
  text-align: center;
`;
export const DifficultiesTitle = styled.h3`
  text-align: center;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0;
  padding: 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    padding: 5px 10px;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: orange;
      color: #000;
    }

    &:active {
      scale: 0.95;
    }

    svg {
      color: #000;
      width: 20px;
      height: 20px;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    svg:hover {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`;
