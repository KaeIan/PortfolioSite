import { observer } from "mobx-react";
import React, { Component } from "react";
import SocialMediaLinks from "Components/Links/SocialMediaLinks";
import HeaderContent from "Components/Header/Header";
import { observable } from "mobx";
import axios from "axios";
import { LoadData } from "Components/LoadData/LoadData";
import Project from "Models/Project";
import PageLayout from './PageLayout';
import ProjectList from './Project/ProjectList';
import Page from 'Components/Page/Page';

@observer
export default class Home extends Component {
	constructor(props: any) {
		super(props);
	}

	@observable
	private projectList: Project[] = [];

	render() {
		return (
			<>
				<Page header={<HomeHeader />} nameInHeader={false} wrapperType="list-wrapper" >
					<LoadData
						promise={axios.get("/Api/Project/Highlights")}
						done={(data) => {
							let a: Project[] = data.data.map((x: any) => new Project(x));
							return <ProjectList list={a} />;
						}}
					/>
				</Page>
			</>
		);
	}
}

export function HomeHeader() {
	return (
		<HeaderContent name="home">
			<div className="welcome-text">
				<h1>Hi, I'm Kaelan Reece</h1>
				<br />
				<h2>Senior Software Engineer from Brisbane, I specialise</h2>
				<h2>in Web development</h2>
				<SocialMediaLinks theme="light" />
			</div>
		</HeaderContent>
	);
}