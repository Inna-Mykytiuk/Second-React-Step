import styled from 'styled-components';

export const NewsItemCard = styled.div`
  width: 320px;
  background-color: #fff;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 18px;
  border-radius: 4px;
  background-color: rgb(255 255 255 / 75%);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.03;
  }
  h2 {
    color: rgb(64, 69, 72);
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
`;
