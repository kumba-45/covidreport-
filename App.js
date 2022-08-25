import React, { useEffect, useState } from 'react';
import './App.css';
const App = () => {
  const [coviddata, setCoviddata] = useState([]);

  useEffect(() => {
    fetch('https://data.covid19india.org/data.json').then(
      res => res.json()
    ).then(jsondata => setCoviddata(jsondata.statewise));
}, [])

 
  return (
    <div >
      <h1 className='header'>State wise  Covid Report </h1>
      <table className='table'>
        <th>
          State
        </th><th>
          Active
        </th><th>
          Confirmed
        </th><th>
          Recovered
        </th><th>
          Deltaconfirmed
        </th><th>
          Deltarecovered
        </th><th>
          Deaths
        </th>
        <th>Delta deaths</th>
        <th>Lastupdatedtime</th>
        <tbody>
          {
            coviddata.map((item) =>{
              return(
              <tr>
                <td>{item.state}</td>
                <td>{item.active}</td>
                <td>{item.confirmed}</td>
                <td>{item.recovered}</td>
                <td>{item.deltaconfirmed}</td>
                <td>{item.deltarecovered}</td>
                <td>{item.deaths}</td>
                <td>{item.deltadeaths}</td>
                <td>{item.lastupdatedtime}</td>
              </tr>
              );
            })

          }
        </tbody>
      </table>
      </div>
      

  );
}

export default App;
