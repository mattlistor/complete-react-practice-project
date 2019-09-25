import React, {Component} from "react";

class Book extends Component {
  state = {
    comment: false,
    commentContent: "",
    commentList: false
  }
  
  renderComment = () => {
    this.setState({
      comment: !this.state.comment
    })
  }

  renderCommentList = () => {
    this.setState({
      commentList: !this.state.commentList
    })
  }

  changeHandler = (e) => {
    this.setState({
      commentContent: e.target.value 
    })
  }

  addComment = () => {
    if (!this.props.book.comments){
      this.props.book.comments = []
      this.props.book.comments.push(this.state.commentContent)
    }
    else {
      this.props.book.comments.push(this.state.commentContent)
    }
    this.props.submitComment(this.props.book)
  }


  commentForm = () => {
    return (
    <div>
      <label>
      Add a comment:
      <input type="text" name="comment" onChange={(e) => this.changeHandler(e)}/>
      </label>
      <br></br>
      <input type="submit" value="Submit" onClick={(e) => this.addComment()}/>
    </div>
    )
  }

  commentList = () => {
    if(this.props.book.comments){
      return (
      this.props.book.comments.map((c) => <li>-{c}</li>)
    )
    }
  }
  
  render(){
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        {this.props.shelf ? 
        <img src={this.props.book.img} alt="" onClick={() => this.props.removeFromBookShelf(this.props.book)}></img>
        : 
        <img src={this.props.book.img} alt="" onClick={() => this.props.addToBookShelf(this.props.book)}></img>}
        
        
  
        <button onClick={() => this.renderComment()}>Add Comment</button>
        {this.state.comment ? this.commentForm() : null}
        <button onClick={() => this.renderCommentList()}>See All Comments</button>
        {this.state.commentList ? <ul><strong>Comments:</strong>{this.commentList()}</ul> : null}
      </div>
    );
  }  
};

export default Book;
