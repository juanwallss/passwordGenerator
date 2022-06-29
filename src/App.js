import logo from './logo.svg'
import './App.css'
import Main from './components/Main'
import { List } from 'semantic-ui-react'
function App() {
	return (
		<div className="App">
			<div className="App-header">
				<Main />
				<List horizontal>
					<List.Item icon="user" content="Juan Paredes" />
					<List.Item icon="marker" content="Mexicali, BC" />
					<List.Item
						icon="mail"
						content={
							<a href="mailto:juancparedesg@gmail.com">
								juancparedesg@gmail.com
							</a>
						}
					/>
					<List.Item
						icon="linkify"
						content={
							<a href="https://juanwallss.github.io/" target={'_blank'}>
								Personal Portfolio
							</a>
						}
					/>
				</List>
			</div>
		</div>
	)
}

export default App
