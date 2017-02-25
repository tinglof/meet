import React, { Component } from 'react';

class ListItem extends Component {

  constructor () {
    super();

    this.toggleInput = this.toggleInput.bind(this);
    this.boxChecked = this.boxChecked.bind(this);
    this.updateTextField = this.updateTextField.bind(this);
    this.addComment = this.addComment.bind(this);

    this.state = {
      checked: true,
      expanded: false,
      inputTextField: "",
      comments: [],
    }
  }

  toggleInput(){
    this.setState({expanded: !this.state.expanded});
  }

  boxChecked(e){
    e.stopPropagation();
    this.setState({
      checked: !this.state.checked
    })

  }

  updateTextField (e) {
    this.setState({inputTextField: e.target.value});
    console.log(this.state.inputTextField);
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
        <ul className="list-group">
        {toRenderComments}
        </ul>
      )
    }else {
      return ("");
    }
  }


  renderExpanded() {




    return (
      <div>
        <li key={this.props.id} onClick={this.toggleInput} className={"list-group-item " + (this.state.checked ? "" : "done" )}>
          {this.props.text}<input onClick={this.boxChecked} type="checkbox" className="pull-right" />
        </li>

        {this.renderCommentList()}

        <div className="input-group">
          <input onChange={this.updateTextField} value={this.state.inputTextField} className="form-control" type="text" placeholder="Comment" />

          <span className="input-group-btn">
            <button type="submit" onClick={this.addComment} className="button-primary btn">Add comment</button>
          </span>
        </div>
      </div>
    );
  }

  renderNormal() {
    return (
      <div>
        <li key={this.props.id} onClick={this.toggleInput} className={"list-group-item " + (this.state.checked ? "" : "done" )}>
          {this.props.text}<input onClick={this.boxChecked} type="checkbox" className="pull-right" />
          <span className="pull-left"> { this.state.comments.length }</span>
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
