import React from 'react';

class ExpenseRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className='expense-row'>
        <td className='expense-cell cell-date'> 2/04/2018</td>
        <td className='expense-cell cell-description'> {this.props.description}</td>
        <td className='expense-cell cell-amount'> 25</td>
      </tr>
    );
  }
}

export default ExpenseRow;