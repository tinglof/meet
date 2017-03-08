import React, {Component} from 'react';
import ListItem from './list_item';

class List extends Component {

  render(){

    if(this.props.items == null){
      return <ul></ul>;
    }

    console.log(this.props.items);
    const toRender = this.props.items.map( (listItem) => <ListItem id={listItem.id} key={listItem.id} text={listItem.text} time={listItem.time} updateCheckedItems={this.props.updateCheckedItems} /> );

    return (
      <ul className="list-group">
        {toRender}
      </ul>
    );
  }
}

export default List;
