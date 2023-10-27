import { useMemo } from "react";

export const useSortedPosts = (post, sort) => {
	const sortedPost = useMemo(() => {
		if (sort) {
			return [...post].sort((a, b) => a[sort].localeCompare(b[sort]));
		} else {
			return post;
		}
	}, [sort, post]);
	return sortedPost;
};

export const usePosts = (post, sort, query) => {
	const sortedPost = useSortedPosts(post, sort);
	const sortedAndSearchedPost = useMemo(() => {
		return sortedPost.filter(post =>
			post.title.toLowerCase().includes(query.toLowerCase())
		);
	}, [query, sortedPost]);
	return sortedAndSearchedPost;
};
