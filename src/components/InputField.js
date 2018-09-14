import React from 'react';

class InputField extends React.Component {
	constructor(props) {
		super(props);
	}

	

	render() {
		return(
			<fieldset className='input-field'>
				<div className='flex-wrap'>
				<label className={this.props.name + '-label'}
						htmlFor={'id-' + this.props.name}
					> 
					{this.props.name}
				</label>
				<input 
					className = 'input'
					type={this.props.type}
					name={this.props.name}
					id={'id-' + this.props.name}
				/>
				</div>
			</fieldset>
		);
	}
}

export default InputField;