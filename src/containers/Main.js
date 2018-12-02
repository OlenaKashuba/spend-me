import React from 'react';
import InputField from '../components/InputField';
import Expenses from '../components/Expenses';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      saved: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newValue = this.state.description;
    this.setState({
      saved: [...this.state.saved, newValue],
      description: ''
    });
    console.log(this.state);
  }


  render() {
    return (
      <section className='main-content'>
        <h2 className='intro-text'> Easy way to maintain your spendings </h2>

        <section className='input-block'>
          <p className='new-expense-title'> Add new expense: </p>
          <form className='form'
            onSubmit={this.handleSubmit}
          >

            {/* input */}
            <fieldset className='input-field'>
              <div className='flex-wrap'>
                <label className={this.props.name + '-label'}
                  htmlFor={'id-' + this.props.name}
                >
                  Description
                </label>
                <input
                  onChange={this.handleChange}
                  className='input'
                  // type={this.props.type}
                  // name={this.props.name}
                  id={'id-' + this.props.name}
                  value={this.state.description}
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