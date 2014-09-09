/** @jsx React.DOM */
var PersonTable =
  React.createClass({
    getInitialState:function(){
      return {
        data:[
            {"id":1,"fname":"George","lname":"Washington"},{"id":2,"fname":"Abe","lname":"Swartz"},{"id":3,"fname":"Bill","lname":"Cosby"},{"id":4,"fname":"Marshall","lname":"Marshall"},
            {"id":5,"fname":"George","lname":"Washington"},{"id":6,"fname":"Abe","lname":"Swartz"},{"id":7,"fname":"Bill","lname":"Cosby"},{"id":8,"fname":"Marshall","lname":"Marshall"}
          ]
        }
    },
    render:function(){
      return (
          <table>
          {this.state.data.map(function(person,i){
            return <PersonRow key={i} data={person} />
          })}
          </table>
        )
    }
  });

var PersonRow =
  React.createClass({
    render:function(){
      return (
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.fname}</td>
            <td>{this.props.data.lname}</td>
          </tr>
        )
    }
  });
