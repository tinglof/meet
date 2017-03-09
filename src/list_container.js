import React, {Component} from 'react';
import List from './list';

class ListContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
        items: [],
        checkedItems: [],
        numberInput: "",
        textInput: "",
      };

    this.addItem = this.addItem.bind(this);
    this.enterPress = this.enterPress.bind(this);
    this.updateCheckedItems = this.updateCheckedItems.bind(this);
    this.clearCheckItems = this.clearCheckItems.bind(this);
    this.userInput = this.userInput.bind(this);
  }

  calculateTime(){
    let time = 0;
    this.state.items.map((item) => time += +item.time)
    return( time );
  }

   addItem() {

    if((this.state.textInput && this.state.numberInput) &&
      (this.state.textInput.trim() !== "" && this.state.numberInput.trim() !== ""))
      {

      const arrayCopy = this.state.items.slice();

      var newItem = {
        text: this.state.textInput,
        id: Date.now(),
        time: this.state.numberInput,
      };

      arrayCopy.push(newItem);

      this.setState({
        items: arrayCopy,
        numberInput: "",
        textInput: "",
      });
    }
  }

  userInput(e) {
    const input = e.target.value;
    const field = e.target.id;

    this.setState(
      {
        [field]: input,
      }
    );

  }

  enterPress(e){
    if(e.key === 'Enter')
      this.addItem();
  }

  updateCheckedItems(id, checkedStatus){
    const checkedCopy = this.state.checkedItems.slice();
    console.log("before" + checkedCopy);

    if(checkedStatus){
      checkedCopy.push(id)
    }else{
      let index = checkedCopy.indexOf(id);
      checkedCopy.splice(index, 1);
    }

    this.setState({
      checkedItems: checkedCopy
    })

    console.log("after" + checkedCopy);
  }

clearCheckItems(){
  const itemsToRemove = this.state.checkedItems.slice();
  const itemsInList = this.state.items.slice();

    console.log("Items to remove is: " + itemsToRemove)
    console.log("Items to update is: " + itemsInList)

    if(itemsInList.length === 0){
      return;
    }

    const updatedItems = itemsInList.filter(function(item){
        return itemsToRemove.indexOf(item.id) === -1;
      }
    );

  this.setState({
     items: updatedItems,
     checkedItems: [],
   });
}

calculatePercentage(){
  const items = this.state.items.length;
  const checked = this.state.checkedItems.length;

  if(items === 0 || checked === 0){
    return 0;
  }
  else{
    return (checked/items)*100;
  }
}


  render(){

    return(

    <div className="container">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow={this.state.checkedItems.length} aria-valuemin="0" aria-valuemax={this.state.items.length } style={{width: this.calculatePercentage()+'%'}}>
            <span className="sr-only">{this.calculatePercentage()} % Complete</span>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <div className="input-group">

          <input className="form-control" onKeyPress={ this.enterPress } value={this.state.textInput} onChange={this.userInput} id="textInput" type="text"
          placeholder="Enter task"/>

          <input className="form-control" type="text" value={this.state.numberInput} onChange={this.userInput} id="numberInput" placeholder="Time"/>

          <span className="input-group-btn">

          <button type="button" className="btn btn-default add" onClick={ this.addItem }>

          Add &nbsp;
          <span className="glyphicon glyphicon-plus"></span>
          </button>
        </span>
      </div>
    </div>
    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-4 col-lg-4 col-lg-offset-4">
        <List updateCheckedItems={this.updateCheckedItems} items={this.state.items}/>
    </div>
      <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
      <button type="Button" className="btn-warning btn pull-right" onClick={this.clearCheckItems}> Clear Checked </button>
      <p className="pull-left grey"> {this.calculateTime()} minutes </p>
      </div>

    </div>


    );
  }
}

export default ListContainer;
