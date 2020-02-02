import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Item component
import Item from './Item'
// Redux
import { connect } from 'react-redux'
// Redux actions posts
import { fetchPosts, createPost, delPost } from '../store/actions/postActions'

class Home extends Component
{
	constructor(props){
		super(props);

		// component state params
		this.state = {
			title: '', body: ''
		};

		// Add event from form
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		// Or try it in input field
		// onChange={this.onChange.bind(this)}
	}

	// Component mounted
	componentDidMount(){
		// Fetch posts
		this.props.fetchPosts();
	}

	// catch ne props
	UNSAFE_componentWillReceiveProps(pr){
		if(pr.post){
			let p = pr.post;
			// Add title to post (for testing only)
			p.title = this.state.title;
			// Update posts here or from reducer.js
			this.props.posts.unshift(p);
		}
	}

	// Refresh state after input change
	onChange(e){
		// Set init state form data
		this.setState({ [e.target.name] : e.target.value });
	}

	deletePost = (e, id) => {
		this.props.delPost(id);
	}

	// Form submit event
	onSubmit(e){
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}
		console.log("Send post data: ", post);

		// Dispatch actions
		this.props.createPost(post);
	}

    render() {
        console.log("Home props!")
		console.log(this.props);

		const list = this.props.posts.map((post) => (
			// <Item key={todo.id} todo={todo} mDone={this.props.mDone} mDelete={this.props.mDelete} />
			<Item key={post.id} todo={post} delPost={this.props.delPost} />
		));

		return (
			<div>
				<form onSubmit={this.onSubmit} >
				<h1>Add post</h1>
				<input type="text" name="title" placeholder="Add post title" onChange={this.onChange} />
				<input type="text" name="body" placeholder="Add post conetnt" onChange={this.onChange} />
				<input type="submit" value="Add post" />
				</form>

				<h1> Posts list </h1>
				{ list }
			</div>
		)
    }
}

// Component types
Home.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	// post: PropTypes.object.isRequired,
	// post_id: PropTypes.any.isRequired
}

// Need it add state to props in component
const StateToPops = (state) => {
	console.log("State to props: ", state)

    return {
		posts: state.posts.posts,
		post: state.posts.post,
		post_id: state.posts.post_id
	}
}

export default connect(StateToPops, { fetchPosts, createPost, delPost })(Home);