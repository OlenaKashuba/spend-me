import React from 'react';

class InputField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<fieldset className='input-field'>
				<label className={this.props.name + '-label'}
						htmlFor={'id-' + this.props.name}
					> 
					{this.props.name}
				</label>
				<input 
					type={this.props.type}
					name={this.props.name}
					id={'id-' + this.props.name}
				/>
			</fieldset>
		);
	}
}

export default InputField;