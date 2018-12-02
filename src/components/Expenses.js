import React from 'react';
import ExpenseRow from '../components/ExpenseRow';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const expenses = this.props.expenses;
    let expensesArray = expenses.map(function (expense) {
      return <ExpenseRow
        description={expense.description}
        date={expense.date}
        amount={expense.amount}
      />;
    });

    return (
      <section className='expenses'>
        <h2 className='expenses-title'> Your expenses </h2>
        <table className='expenses-table'>
          <tr className='table-header'>
            <th className='expense-cell' > Date </th>
            <th className='expense-cell' > Description </th>
            <th className='expense-cell' > Amount (&#163;)</th>
          </tr>
          {expensesArray}
        </table>
      </section>
    );
  }
}

export default Expenses;