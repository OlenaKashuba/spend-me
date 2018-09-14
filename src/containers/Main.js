import React from 'react';
import InputField from '../components/InputField';
import Expenses from '../components/Expenses';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    return (
      <section className='main-content'>
        <h2 className='intro-text'> Easy way to maintain your spendings </h2>

        <section className='input-block'>
          <p className='new-expense-title'> Add new expense: </p>
          <form className='form'
            onClick={this.handleSubmit}
          >
            <InputField name='date' type='date' />
            <InputField name='description' type='text' />
            <InputField name='amount' type='number' />
            <button className='submit-btn'> Add </button>
          </form>
        </section>
        <Expenses />
      </section>
    );
  }
}

export default Main;