import React, {Component} from 'react';
import ListItem from './list_item';

class List extends Component {

  render(){

    if(this.props.items == null){
      return <ul></ul>;
    }

    console.log(this.props.items);
    const toRender = this.props.items.map( (listItem) => <ListItem id={listItem.id} text={listItem.text} /> );

    return (
      <ul className="list-group">
        {toRender}
      </ul>
    );
  }
}

export default List;
