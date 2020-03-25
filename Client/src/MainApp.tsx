import React, { Component } from 'react'
import NavigationBar from './Components/Navigation/NavigationBar'
import RoutPages from './Components/Routing/RoutPages'
import SocialMediaLinks from './Components/Links/SocialMediaLinks';
import { IfAdmin } from './Components/If';


interface IState {
	//isAuthenticated: any
	displayNavBar: boolean
}

export default class MainApp extends Component<{}, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			displayNavBar: true,
			//	displayNavBar: true
		};
	}

	render() {
		let mainClassName = "main";

		if (!this.state.displayNavBar) {
			mainClassName += "-full"
		}
		return (
			<>
				<IfAdmin>
					<NavigationBar displayNavBar={this.state.displayNavBar} />
					<button className="main" onClick={() => this.setState({ displayNavBar: !this.state.displayNavBar })}> Toggle Nav bar</button>
				</IfAdmin>
				<div className={mainClassName}>
					{this.props.children}
				</div>
			</>
		)
	}
}