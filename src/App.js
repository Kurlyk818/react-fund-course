import React, { useMemo, useRef, useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";
import "./styles/App.css";
import PostItem from "./components/postItem";
import PostList from "./components/postList";
import MyButton from "./components/UI/button/myButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
function App() {
	const [post, setPost] = useState([]);
	const createPost = newObjPost => {
		setPost([...post, newObjPost]);
		setModal(false);
	};

	const removePost = objPost => {
		setPost(post.filter(p => p.id !== objPost.id));
	};
	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPost = usePosts(post, filter.sort, filter.query);
	return (
		<div className='App'>
			<MyButton
				style={{
					marginTop: "30px",
				}}
				onClick={() => setModal(true)}
			>
				Create Post
			</MyButton>
			<MyModal
				visible={modal}
				setVisible={setModal}
			>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: "15px" }} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<PostList
				remove={removePost}
				post={sortedAndSearchedPost}
				title={"List of posts 1"}
			/>
		</div>
	);
}

export default App;
