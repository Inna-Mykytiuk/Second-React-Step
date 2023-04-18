import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper, InitialValue, Button } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  // зазначаємо типи пропсів
  static propTypes = {
    initialValue: PropTypes.number,
  };

  //задаємо початкове значення стейту(стану)
  state = {
    value: this.props.initialValue,
  };

  //функція збільшення значення на 1 при кліку на кнопку +
  handleIncrement = () => {
    // console.log('Increment button was clicked!'); // працює
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  //функція збільшення значення на 1 при кліку на кнопку -
  handleDecrement = () => {
    // console.log('Decrement button was clicked!'); // працює
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <Container>
        <InitialValue>{this.state.value}</InitialValue>
        <Wrapper>
          <Button type="button" onClick={this.handleIncrement}>
            +
          </Button>
          <Button type="button" onClick={this.handleDecrement}>
            -
          </Button>
        </Wrapper>
      </Container>
    );
  }
}
