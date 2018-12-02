import React from 'react';

class ExpenseRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className='expense-row'>
        <td className='expense-cell cell-date'> {this.props.date}</td>
        <td className='expense-cell cell-description'> {this.props.description}</td>
        <td className='expense-cell cell-amount'> {this.props.amount}</td>
      </tr>
    );
  }
}

export default ExpenseRow;