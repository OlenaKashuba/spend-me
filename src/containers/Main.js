import React from 'react';
import InputField from '../components/InputField';
import Expenses from '../components/Expenses';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      description: '',
      amount: '',
      saved: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({
      [field]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newValue = {
      date: this.state.date,
      description: this.state.description,
      amount: this.state.amount
    };
    console.log('newvalue', newValue);
    this.setState({
      saved: [...this.state.saved, newValue],
      date: '',
      description: '',
      amount: ''
    });
  }


  render() {
    console.log(this.state.saved);

    return (
      <section className='main-content'>
        <h2 className='intro-text'> Easy way to maintain your spendings </h2>

        <section className='input-block'>
          <p className='new-expense-title'> Add new expense: </p>
          <form className='form'
            onSubmit={this.handleSubmit}
          >

            <fieldset className='input-field'>
              <div className='flex-wrap'>
                <label className='date-label'
                  htmlFor='id-date'
                >
                  Date
                </label>
                <input
                  onChange={this.handleChange}
                  className='input'
                  type='date'
                  name='date'
                  id={'id-date'}
                  value={this.state.date}
                />
              </div>
            </fieldset>

            <fieldset className='input-field'>
              <div className='flex-wrap'>
                <label className='description-label'
                  htmlFor='id-description'
                >
                  Description
                </label>
                <input
                  onChange={this.handleChange}
                  className='input'
                  type='text'
                  name='description'
                  id='id-description'
                  value={this.state.description}
                />
              </div>
            </fieldset>

            <fieldset className='input-field'>
              <div className='flex-wrap'>
                <label className='amount-label'
                  htmlFor='id-amount'
                >
                  Amount
                </label>
                <input
                  onChange={this.handleChange}
                  className='input'
                  type='number'
                  name='amount'
                  id='id-amount'
                  value={this.state.amount}
                />
              </div>
            </fieldset>


            <button className='submit-btn'> Add </button>
          </form>
        </section>
        <Expenses expenses={this.state.saved} />
      </section>
    );
  }
}

export default Main;