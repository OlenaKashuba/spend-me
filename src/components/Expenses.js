import React from 'react';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='expenses'>
        <h2 className='expenses-title'> Your expenses </h2>
        <table className='expenses-table'>
          <tr className='table-header'>
            <th className='expense-cell' > Date </th>
            <th className='expense-cell' > Description </th>
            <th className='expense-cell' > Amount (&#163;)</th>
          </tr>
          <tr className='expense-row'>
            <td className='expense-cell cell-date'> 2/04/2018</td>
            <td className='expense-cell cell-description'> food</td>
            <td className='expense-cell cell-amount'> 25</td>
          </tr>
        </table>
      </section>
    );
  }
}

export default Expenses;