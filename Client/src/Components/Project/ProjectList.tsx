import React, { useState } from "react";
import Project, { IProjectAttributes } from "../../Models/Project";
import { Link } from "react-router-dom";
import axios from "axios";
import { IfAdmin } from "../Conditional/If";

interface projectProps {
	list: Project[];
}

export default function ProjectList(props: projectProps) {
	const [projectList, setProjects] = useState(props.list)

	let onDelete = (title: string, id: string) => {
		let accepted = window.confirm(`Are you sure you wish to delete: ${title}?`);
		if (accepted) {
			axios
				.delete(`/Api/Project/${id}`)
				.then((response) => {
					console.log(response);
					setProjects(projectList.filter((b) => b.id != id));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	let listItems = projectList.map((x) => (
		<ProjectListItem {...x} onItemRemoved={onDelete} />
	));
	return (
		<>
			<div className="project-list">{listItems.length > 0 ? listItems : <EmptyProjectsList />}</div>
		</>
	);
}

function EmptyProjectsList() {
	return (
		<div>
			<p>No Projects were found</p>
		</div>
	)
}


interface IProjectItemProps extends IProjectAttributes {
	onItemRemoved: Function;
}

function ProjectListItem(props: IProjectItemProps) {
	return (
		<div className="project">
			<Link to={`/projects/${props.id}`}>{props.title}</Link>
			<IfAdmin>
				<img
					src="/Icons/bin-icon.svg"
					onClick={
						() => props.onItemRemoved(props.title, props.id)
					}
				/>
			</IfAdmin>
		</div>
	);
}
