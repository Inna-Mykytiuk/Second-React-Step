import { Component } from 'react';
import { ClockWrapper } from './Clock.styled';

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //метод componentDidMount() викликається після того, як компонент відрендерився в DOM. Передаємо в нього функцію tick(), яка буде викликатися кожну секунду.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //У методі життєвого циклу componentWillUnmount(), ми очистимо таймер після того, як компонент Clock буде видалено з DOM.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //реалізуємо метод під назвою tick(), який компонент Clock буде запускати кожну секунду.
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <ClockWrapper>
        <h2>Current time:</h2>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </ClockWrapper>
    );
  }
}
