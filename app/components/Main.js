//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';  // in ECMAScript 6
//import {JsonTable} from 'react-json-table';  // in ECMAScript 6
// or in ECMAScript 5
var React = require('react');
var ReactDOM = require('react-dom');

var JsonTable = require("react-json-table");

/*var ReactBSTable = require("react-bootstrap-table");  
var BootstrapTable_1 = ReactBSTable.BootstrapTable;
var TableHeaderColumn_1 = ReactBSTable.TableHeaderColumn;*/

//var Main = React.createClass({
	
/*var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  },{
      id: 3,
      name: "Item name Hietor lindo",
      price: 100
  }];
// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

React.render(
  <BootstrapTable_1 data={products} height="120" striped={true} hover={true}>
      <TableHeaderColumn_1 dataField="id" isKey={true} dataAlign="center" dataSort={false}>Product ID</TableHeaderColumn_1>
      <TableHeaderColumn_1 dataField="name" dataSort={false}>Product Name</TableHeaderColumn_1>
      <TableHeaderColumn_1 dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn_1>
  </BootstrapTable_1>,
    document.getElementById("app")
);*/

var items = [
  { name: 'Louise', age: 27, color: 'red' },
  { name: 'Margaret', age: 15, color: 'blue'},
  { name: 'Lisa', age:34, color: 'yellow'}
];

var columns = [
    'name',
    {key: 'age', label: 'Age'},
    {key: 'color', label: 'Colourful', cell: function( item, columnKey ){
        return <span style={{color: item.color}}>{ item.color }</span>;
    }}
];

React.render(<JsonTable rows={ items } columns={ columns } />, document.body);


//});


//ReactDOM.render(<Main />, document.getElementById('app'));
