import React, { Component } from 'react';

class ListItem extends Component {

  constructor (props) {
    super(props);

    this.toggleInput = this.toggleInput.bind(this);
    this.boxChecked = this.boxChecked.bind(this);
    this.updateTextField = this.updateTextField.bind(this);
    this.updateNumberField = this.updateNumberField.bind(this);
    this.addComment = this.addComment.bind(this);

    this.state = {
      checked: false,
      expanded: false,
      inputTextField: "",
      inputNumberField: "",
      comments: [],
      time: this.props.time,
    }
  }

  toggleInput(){
    this.setState({expanded: !this.state.expanded});
  }

  boxChecked(e){
    e.stopPropagation();
    let newState = !this.state.checked;

    this.setState({
      checked: newState,
    })

    this.props.updateCheckedItems(this.props.id, newState);
  }

  updateTextField (e) {
    this.setState({inputTextField: e.target.value});
    console.log(this.state.inputTextField);
  }

  updateNumberField (e) {
    this.setState({time: e.target.value});
    console.log(this.state.inputNumberField);
  }

  addComment () {
    const arrToUpdate = this.state.comments.slice();

    arrToUpdate.push(
      {
        id: Date.now(),
        text: this.state.inputTextField,
      }
    );

    this.setState({
      comments: arrToUpdate,
      inputTextField: "",
    });
  }

  renderCommentList(){
    const toRenderComments = this.state.comments.map( (comment) => <li className="list-group-item" key={comment.id}> {comment.text} </li>)

    if(this.state.comments.length !== 0 ){
      return (
        <div className="col-xs-10 col-xs-offset-2">
        <ul className="list-group">
        {toRenderComments}
        </ul>
        </div>
      )
    }else {
      return ("");
    }
  }


  renderExpanded() {




    return (
      <div>
        <li key={this.props.id} onClick={this.toggleInput} className={"list-group-item " + (this.state.checked ? "done" : "" )}>
          {this.props.text}<input onClick={this.boxChecked} type="checkbox" className="pull-right" />
          <span className="time"> {this.state.time} min </span>

        </li>


        <div className="input-group">
        <input onChange={this.updateNumberField} value={this.state.time} className="form-control" type="text" placeholder={this.state.time} />

        <span className="input-group-addon">
          Change time
        </span>

        </div>


        {this.renderCommentList()}

        <div className="input-group">
          <input onChange={this.updateTextField} value={this.state.inputTextField} className="form-control" type="text" placeholder="Comment" />

          <span className="input-group-btn">
            <button type="submit" onClick={this.addComment} className="btn-default btn">Add comment</button>
          </span>

        </div>



      </div>
    );
  }

  renderNormal() {


    return (
      <div>
        <li key={this.props.id} onClick={this.toggleInput} className={"list-group-item " + (this.state.checked ? "done" : "" )}>
          {this.props.text}<input onClick={this.boxChecked} type="checkbox" className="pull-right" />
           <span className={"pull-left badge " + (this.state.comments.length === 0  ? "hidden" : "" )} > { this.state.comments.length }</span>
           <span className="time"> {this.state.time} min </span>
        </li>
      </div>
    );
  }

  render() {
    if(this.state.expanded){
      return this.renderExpanded();
    }else {
      return this.renderNormal();
    }
  }

}


export default ListItem;
