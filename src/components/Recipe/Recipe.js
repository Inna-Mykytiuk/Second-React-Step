import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn } from 'react-icons/hi';
import { Modal } from '../RecipeList/Modal';
import { useState } from 'react';
import {
  Container,
  Image,
  RecipeInfo,
  InfoItem,
  RecipeDifficulties,
  BadgeList,
  Badge,
  DifficultiesTitle,
  RecipeTitle,
  Meta,
  Actions,
} from './Recipe.styled';

export const Recipe = ({
  item: { name, image, time, servings, calories, difficulty, id },
  onDelete,
}) => {
  //початковий стан для модального вікна, модальне вікно скрите
  const [isOpen, setIsOpen] = useState(false);

  //створюємо методи для відкриття і закриття модального вікна
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Container>
      <Image src={image} alt={name} />
      <Meta>
        <RecipeTitle>{name}</RecipeTitle>

        <RecipeInfo>
          <InfoItem>
            <BsAlarm />
            {time} min
          </InfoItem>
          <InfoItem>
            <AiOutlinePieChart />
            {servings} servings
          </InfoItem>
          <InfoItem>
            <HiOutlineChartBar />
            {calories} calories
          </InfoItem>
        </RecipeInfo>

        <RecipeDifficulties>
          <DifficultiesTitle>Difficulties</DifficultiesTitle>
          <BadgeList>
            <Badge isActive={difficulty === 'easy'} value={difficulty}>
              Easy
            </Badge>
            <Badge isActive={difficulty === 'medium'} value={difficulty}>
              Medium
            </Badge>
            <Badge isActive={difficulty === 'hard'} value={difficulty}>
              Hard
            </Badge>
          </BadgeList>
        </RecipeDifficulties>

        <Actions>
          {/* Ця кнопка відповідає за видалення елементу за ідентифікатором id, сам стейт з функцією розташований у App, а сюди передається пропрос-колбеком */}
          <button
            type="button"
            onClick={() => onDelete(id)}
            aria-label="Delete"
          >
            <HiTrash />
          </button>

          {/* Ця кнопка відкриває модальне вікно і приводить isOpen до true*/}
          <button type="button" onClick={openModal} aria-label="Zoom">
            <HiZoomIn />
          </button>
        </Actions>
      </Meta>

      {/* Якщо стан isOpen буде true тоді зарендериться розмітка модального вікна і з'явиться кнопка Close після натискання на яку значення isOpen буде приведено до false, відповідно розмітка зникне*/}
      {isOpen && <Modal image={image} isOpen={isOpen} onClose={closeModal} />}
    </Container>
  );
};

// Описуємо PropTypes для компонента Recipe
Recipe.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
