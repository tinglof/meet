import React, {Component} from 'react';

class ListItem extends Component {

  render(){

    if(this.props.items == null){
      return <ul></ul>;
    }

    console.log(this.props.items);
    const toRender = this.props.items.map( (listItem) => <li key={listItem.id} className="list-group-item">{listItem.text}</li> );

    return (
      <ul className="list-group"> {toRender}</ul>
    );
  }
}

export default ListItem;
