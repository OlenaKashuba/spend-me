import React from 'react';
import InputField from '../components/InputField';
import Expenses from '../components/Expenses';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}


	render () {
		return(
			<section className ='main-content'>
				<h2> Easy way to maintain your spendings </h2>
				<section className = 'input-block'>
					<p> Add new expense </p>
					<form>
						<InputField name='date'/>
						<InputField name='description'/>
						<InputField name='amount'/>
						<button className='submit-btn'> Add </button>
					</form>
				</section>
				<Expenses />
			</section>
		);
	}
}

export default Main;