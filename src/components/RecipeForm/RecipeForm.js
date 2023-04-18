import { Formik } from 'formik';
import { FormField, Form, Field, ErrorMessage } from './RecipeForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const RecipeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Enter recipe name'),
  image: Yup.string().min(2, 'Too Short!').required('Must be > 0'),
  time: Yup.number().positive('Must be > 0').required('Enter time'),
  servings: Yup.number()
    .positive('Must be > 0')
    .required('Must be more then 0'),
  calories: Yup.number()
    .positive('Must be > 0')
    .required('Must be more then 0'),
  difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required('Choose difficulty'),
});

export const RecipeForm = ({ onSubmit }) => {
  return (
    <section>
      <Formik
        initialValues={{
          name: '',
          image: '',
          time: '',
          servings: '',
          calories: '',
          difficulty: 'easy',
        }}
        validationSchema={RecipeSchema}
        onSubmit={(values, actions) => {
          onSubmit({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <Form>
          <h3>Login Formik Form</h3>
          <FormField>
            Recipe Name
            <Field name="name" placeholder="Enter recipe name" />
            <ErrorMessage name="name" component="span" />
          </FormField>
          <FormField>
            Image
            <Field name="image" />
            <ErrorMessage name="image" component="span" />
          </FormField>
          <FormField>
            Time
            <Field name="time" type="number" />
            <ErrorMessage name="time" component="span" />
          </FormField>
          <FormField>
            Servings
            <Field name="servings" type="number" />
            <ErrorMessage name="servings" component="span" />
          </FormField>
          <FormField>
            Calories
            <Field name="calories" type="number" />
            <ErrorMessage name="calories" component="span" />
          </FormField>
          <FormField>
            Difficulty
            <Field as="select" name="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Field>
            <ErrorMessage name="difficulty" component="span" />
          </FormField>
          <button type="submit">Add Recipe</button>
        </Form>
      </Formik>
    </section>
  );
};
