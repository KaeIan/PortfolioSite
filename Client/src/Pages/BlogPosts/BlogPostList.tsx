import React, { useState } from "react";
import Blog, { IBlogAttributes } from "Models/Blog";
import { Link } from "react-router-dom";
import axios from "axios";
import { IfAdmin } from "Components/Conditional/If";
import BlogPosts, { IBlogPostAttributes } from 'Models/BlogPost';

interface blogProps {
	list: BlogPosts[];
}

export default function BlogPostList(props: blogProps) {
	const [blogList, setBlogs] = useState(props.list);

	let onDelete = (title: string, id: string) => {
		let accepted = window.confirm(`Are you sure you wish to delete: ${title}?`);
		if (accepted) {
			axios
				.delete(`/Api/BlogPost/${id}`)
				.then((response) => {
					console.log(response);
					setBlogs(blogList.filter((b) => b.id != id));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	let listItems = blogList.map((x) => (
		<BlogPostListItem {...x} onItemRemoved={onDelete}  />
	));
	return (
		<>
			<div className="Blog-list">
				{listItems.length > 0 ? listItems : <EmptyBlogsList />}
				<IfAdmin>
					<br />
					<br />
					<br />
					<Link to="/BlogPosts/create">Add Blog Post</Link>
				</IfAdmin>
			</div>
		</>
	);
}

function EmptyBlogsList() {
	return (
		<div>
			<p>Could not find any posts associated with this blog</p>
		</div>
	);
}

interface IBlogItemProps extends IBlogPostAttributes {
	onItemRemoved: Function;
}

function BlogPostListItem(props: IBlogItemProps) {
	return (
		<div className="Blog">
			<Link to={`/BlogPost/${props.id}`}>{props.title}</Link>
			<IfAdmin>
				<div className="admin-icons">
					<Link to={`/BlogPost/edit/${props.id}`}>
						<img src="/Icons/edit-icon.svg" className="action-icon" />
					</Link>
					<img
						src="/Icons/bin-icon.svg"
						onClick={() => props.onItemRemoved(props.title, props.id)}
						className="action-icon"
					/>
				</div>
			</IfAdmin>
		</div>
	);
}
