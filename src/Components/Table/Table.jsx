import React from 'react';
const Table = ({data}) => {
    return (
        <div>
          {
            JSON.stringify(data) === '{}'
            ? ''
            : <table className="table">
            <tr>
                <td>city</td>
                <td>{data.name}</td>
            </tr>
            <tr>
                <td>temp</td>
                <td>{Math.floor(data.main.temp - 273.15)+'°C'}</td>
            </tr>
            <tr>
                <td>description</td>
                <td>{data.weather[0].description}</td>
            </tr>
            <tr>
                    <td>Country:</td>
                    <td>{data.sys.country}</td>
                </tr>
        </table>    
          }
        </div>
    );
}
export default Table;
