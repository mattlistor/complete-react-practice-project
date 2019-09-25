import React, {Component} from "react";

class Form extends Component {
  state = {
    title: "",
    author: "",
    img: "",
  }

  // componentDidUpdate(prevProps){
  //   if (this.props !== prevProps.formInfo){ 
  //     this.setState({
  //       title: "",
  //       author: "",
  //       img: "",
  //     })
  //   }
  // }
  
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }
   
  render(){
    // console.log(this.state)
    return (
      <div>
      <h1>Add A Book</h1>
      <label>
        Title:
        <input type="text" name="title" onChange={(e) => this.changeHandler(e)}/>
      </label>
      <br></br>
      <label>
        Img:
        <input type="text" name="img" onChange={(e) => this.changeHandler(e)}/>
      </label>
      <br></br>
      <label>
        Author:
        <input type="text" name="author" onChange={(e) => this.changeHandler(e)}/>
      </label>
      <br></br>
      <input type="submit" value="Submit" onClick={(e) => this.props.addBook(this.state)}/>
      </div>
    )
    
  }
}

export default Form;
