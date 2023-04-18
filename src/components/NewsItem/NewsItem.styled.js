import styled from 'styled-components';

export const NewsItemCard = styled.div`
  width: 320px;
  background-color: #fff;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 18px;
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
