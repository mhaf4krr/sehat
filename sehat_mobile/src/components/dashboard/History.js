import React from "react";

export default class History extends React.Component {
  state = {
    testData: null,
    user: this.props.user,
    testDataOnScreen: null,
  };

  fetchTestData = async () => {
    try {
      let url = `https://sehat.hyderdevelops.ml/tests/getAll?id=${this.state.user.PHONE}`;
      let response = await fetch(url, {
        method: "POST",
      });

      this.setState({ testData: await response.json() });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchTestData();
  }

  renderDataTable = () => {
    if (!this.state.testData) {
      return <div>Please wait while we fetch your DATA.</div>;
    } else {
      let testData = [];

      this.state.testData.forEach((entry) => {
        let temp = entry.test.map((test) => {
          return (
            <tr key={Math.abs(Math.random() * 100)} className='table_row'>
              <td>{entry.TEST_UID}</td>
              <td>{entry.TIMESTAMP}</td>
              <td>{test.LABEL}</td>
              <td>{test.RESULT}</td>
            </tr>
          );
        });

        testData.push(...temp);
      });

      return (
        <table className='history_table'>
          <thead className='history_thead'>
            <tr className='table_row'>
              <th>UID</th>
              <th>DATED</th>
              <th>TEST</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody className='history_tbody'>{testData}</tbody>
        </table>
      );
    }
  };

  render() {
    return (
      <div className='history_wrapper'>
        <header className='history_header'>
          <div className='history_header_heading'>Report History</div>
          <div className='history_header_para'>
            This section contains a list of all the tests that have been
            performed.
          </div>
        </header>
        <div className='history_filter'>
          <div className='history_filter_text'>
            Choose a FILTER to sort the data.
          </div>
          <select className='history_filter_select'>
            <option value='none'>none</option>
          </select>
        </div>

        {this.renderDataTable()}
      </div>
    );
  }
}
