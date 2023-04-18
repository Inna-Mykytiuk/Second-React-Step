import { Component } from 'react';
import { SearchWrapper } from './Search.styled';
import { toast } from 'react-hot-toast';

export class Search extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) {
      toast.error('This is an error!');
      return;
    }

    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <SearchWrapper>
        <form role="search" onSubmit={this.handleSubmit}>
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </SearchWrapper>
    );
  }
}

/*Створюємо розмітку для форми:
-встановлюємо початкове значення через state
-додаємо value={this.state.value}
-та обов'язково  onChange={this.handleChange}, щоб форма реагувала на подію введення*/
