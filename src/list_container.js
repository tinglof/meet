import React, {Component} from 'react';
import ListItem from './list';

class ListContainer extends Component {
  constructor(props){
    super(props)
    const arr = [];
    this.state = { items: arr };
  }

   addItem() {
    const arrayCopy = this.state.items.slice();

    var newItem = {
      text: this.textInput.value,
      id: Date.now()
    };

    arrayCopy.push(newItem);
    this.textInput.value = "";

    this.setState({
      items: arrayCopy
    });
  }

  render(){

    return(

      <div className="col-xs-4 col-xs-offset-4">
      <div className="input-group">
        <input className="form-control" type="text" ref={ (input) =>  { this.textInput = input; }}
        placeholder="enter task"/>
        <span className="input-group-btn">
          <button type="button" className="button-default btn" onClick={ () => this.addItem() }>Add</button>
        </span>
      </div>
        <ListItem items={this.state.items}/>
      </div>
    );
  }
}

export default ListContainer;
