import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>HTML Table</h1>

        <table>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Apple</td>
            <td>$0.99</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>$1.29</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$0.79</td>
          </tr>
        </table>

        <h1>Div Table</h1>

        <div className='table'>
          <div className='row'>
            <div className='col'><b>Item</b></div>
            <div className='col'><b>Price</b></div>
          </div>
          <div className='row'>
            <div className='col'>Apple</div>
            <div className='col'>$0.99</div>
          </div>
          <div className='row'>
            <div className='col'>Orange</div>
            <div className='col'>$1.29</div>
          </div>
          <div className='row'>
            <div className='col'>Banana</div>
            <div className='col'>$0.79</div>
          </div>
        </div>

        <h1>Accessible Div Table :)</h1>

        <div role='grid' className='table'>
          <div role='row' className='row'>
            <div role='columnheader' className='col'><b>Item</b></div>
            <div role='columnheader' className='col'><b>Price</b></div>
          </div>
          <div role='row' className='row'>
            <div role='gridcell' className='col'>Apple</div>
            <div role='gridcell' className='col'>$0.99</div>
          </div>
          <div role='row' className='row'>
            <div role='gridcell' className='col'>Orange</div>
            <div role='gridcell' className='col'>$1.29</div>
          </div>
          <div role='row' className='row'>
            <div role='gridcell' className='col'>Banana</div>
            <div role='gridcell' className='col'>$0.79</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
