import React, { Component } from 'react';

class ListItem extends Component {

  constructor () {
    super();

    this.state = {
      checked: true
    }
  }

  boxChecked(){
    console.log("körs");

    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (

          <div>
            <li key={this.props.id} className={"list-group-item " + (this.state.checked ? "" : "done" )}>
              {this.props.text}<input onChange={ () => this.boxChecked() } type="checkbox" className="pull-right" />
            </li>
          </div>


    )
  }

}


export default ListItem;
