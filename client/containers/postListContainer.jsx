import NewPost from '../components/new_post.jsx';
import React from 'react';
import PostList from '../components/post_list.jsx';


let PostListContainer  = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let handle =  Meteor.subscribe('posts');
        return{
            loading: !handle.ready(),
            posts: Posts.find({}).fetch()
        }
    },
   addPost(newPost){
     Meteor.call('insertPost', newPost ,(err, result) =>{
        if (err){
           console.log(err)
        }else{
            console.log("post added");
        }
     })
   },
   render(){
      let content;
      if (this.data.loading){
         content = <div>Loading...</div>
      }else{
         content = <PostList posts={this.data.posts}/>;
      }
      return (
          <div>
             {content}
             <NewPost handleForm={this.addPost} />
          </div>

      )
   }
});
export default PostListContainer;