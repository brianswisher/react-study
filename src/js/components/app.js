/**
 * @jsx React.DOM
 */

 var React = require('react');
 var Catalog = require('./catalog/app-catalog.js');
 var Cart = require('./cart/app-cart.js');
 var APP =
  React.createClass({
    render:function(){
      return (
        <div>
        <h1>Lets shop</h1>
        <Catalog />
        <h1>Cart</h1>
        <Cart />
        </div>
      )
    }
  });
module.exports = APP;
