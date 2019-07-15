import React from 'react';
import MaterialTable from 'material-table';
import data2 from '../data/clients.json';



export default function MaterialTableDemo() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'id', field: 'id' },
      { title: 'Name', field: 'first_name' },
      { title: 'Last Name', field: 'last_name'},
      { title: 'Email', field: 'email'},
      { title: 'Phone', field: 'phone'}
    ],
    data: data2,
  });

  return (
    <MaterialTable
      title="Phone Book"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
