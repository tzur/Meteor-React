import React from 'react';

let NewPost = React.createClass({
   getInitialState(){
       return {
          title: "",
          content: ""
       }
   },
   handleTitle(e){
      this.setState({title: e.target.value})
   },
   handleContent(e){
      this.setState({content: e.target.value})
   },
   handleSubmit(e){
     e.preventDefault();
     this.props.handleForm({
         title: this.state.title,
         content: this.state.content
     });
     this.setState({title: "", content: ""})
   },
   render(){
      return(
          <div>
              <h3>Enter new post:</h3>
              <form onSubmit={this.handleSubmit}>
                  <div className="row">
                      <div className="col-md-4">
                          <input type="text" className="form-control input" placeholder="Your name" value={this.state.title} onChange={this.handleTitle} required />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-4">
                          <input type="text" className="form-control input" placeholder="your content" value={this.state.content} onChange={this.handleContent} required />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-4">
                        <button type="submit" className="btn btn-primary formBtn">submit</button>
                     </div>
                  </div>
              </form>
          </div>
      )
   }
});

export default NewPost;