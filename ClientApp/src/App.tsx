import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/W3-Components/HelloWorld';
import HelloUser from './Components/W3-Components/HelloUser';
import Todo from './Components/ReactJS-Components/Todo';
import MarkdownEditor from './Components/ReactJS-Components/MarkdownEditor';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import SimpleNavigationItem from './Components/SimpleNavigationItem';
import About from './Components/About';

const App: React.FC = () => {
	return (
		<>
			<Router>
				<ul>
					<SimpleNavigationItem linkUrl="" />
					<SimpleNavigationItem linkUrl="about" />
					<SimpleNavigationItem linkUrl="admin" />
					<SimpleNavigationItem linkUrl="portfolio" />
					<SimpleNavigationItem linkUrl="contact-me" />
				</ul>
				<Switch>
					<Route exact path="/">
						<div className="App">
							<header className="App-header">
								<img src={logo} className="App-logo" alt="logo" />
								<p>My name is Kaelan Reece</p>
								<p>
									Welcome to my portfolio website
								</p>
								<h2>What is left to do</h2>
								<ul>
									<li>donate/support me?</li>
									<li>Connect to database</li>
									<li>Proper sidebar for navigation</li>
									<li>Add Login</li>
									<li>Crud on portfolio</li>
									<li>Add admin section (about and other content)</li>
									<li>styling</li>
									<li>contact me</li>
									<li>deploy on web server</li>
									<li>mobile responsiveness</li>
								</ul>
							</header>
						</div>
					</Route>
					<Route exact path="/about">
						<HelloUser name="Kaelan" />
						<About title="About Me" />
					</Route>
					<Route exact path="/admin">
						<HelloWorld />
					</Route>
					<Route exact path="/portfolio">
						<MarkdownEditor />
					</Route>
					<Route exact path="/contact-me">
						<Todo />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
