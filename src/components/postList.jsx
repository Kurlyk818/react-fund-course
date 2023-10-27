import React from "react";
import PostItem from "./postItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const PostList = ({ post, title, remove }) => {
	if (!post.length) {
		return <h1 style={{ textAlign: "center" }}>Not found posts</h1>;
	}
	return (
		<div>
			<h1 style={{ textAlign: "center", marginTop: "20px" }}>{title}</h1>
			<TransitionGroup>
				{" "}
				{post.map((post, index) => (
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames='post'
					>
						<PostItem
							remove={remove}
							number={index + 1}
							post={post}
							key={post.id}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default PostList;
