import React from 'react'
// Redux
import { connect } from 'react-redux'
// Redux actions posts
import { delPost } from '../store/actions/postActions'

class Item extends React.Component {

	constructor(props) {
		super(props);
		this.state = {date: new Date()};
    }

	onChange = () => {

	}

	// Allow this.props and data
	// deletePost = (id) => {
	// 	console.log("!!! Delete post id: ", id);
	// 	// Dispatch actions
	// 	this.props.delPost(id);
	// }

	getStyle = () => {
		return {
			textAlign: "left",
			marginBottom: "5px",
			padding: "15px",
			color: "#fff",
			backgroundColor: "#333",
			borderRadius: "5px",
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

    render(){
		// Post id
        const { id, title } = this.props.todo;

        return (
            <div style={ this.getStyle() } >
				<p style={{ margin: "0px" }}>
					<input type="checkbox" value={id} onChange={this.onChange.bind(this, id)} /> {' '}
					{ title }
					<span className="time"> {this.state.date.toLocaleTimeString()} </span>
					<button onClick={this.props.delPost.bind(this, id)}>X</button>
				</p>
			</div>
        )
    }
}

export default Item;

// const StateToPops = (state) => {
// 	console.log("State to props (Item): ", state)

//     return {
// 		posts: state.posts.posts,
// 		post: state.posts.post,
// 		post_id: state.posts.post_id
// 	}
// }

// export default connect(StateToPops, { delPost })(Item);

