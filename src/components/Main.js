import { useEffect, useState } from 'react'
import {
	Header,
	Icon,
	Segment,
	Button,
	Container,
	Grid,
	Message,
	Input,
	Checkbox,
} from 'semantic-ui-react'

export default function Main() {
	const [data, setData] = useState('')
	const [password, setPassword] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [password3, setPassword3] = useState('')
	const [text, setText] = useState('')
	const [length, setLength] = useState(0)
	// useEffect(() => {
	// 	fetch('https://dummyjson.com/products/')
	// 		.then((res) => res.json())
	// 		.then((json) => setData(json.products))
	// }, [])

	const generatePassword = (pwlength, chars) => {
		if (pwlength >= 17) {
			setLength(16)
		} else {
			setLength(pwlength)
		}

		let pw = ''
		let pw2 = ''
		let pw3 = ''
		let pw4 = ''

		if (length > 0) {
			for (let i = 0, n = chars.length; i < length; ++i) {
				pw += chars.charAt(Math.floor(Math.random() * n))
			}
			for (let i = 0, n = chars.length; i < length; ++i) {
				pw2 += chars.charAt(Math.floor(Math.random() * n))
			}
			for (let i = 0, n = chars.length; i < length; ++i) {
				pw3 += chars.charAt(Math.floor(Math.random() * n))
			}
			for (let i = 0, n = chars.length; i < length; ++i) {
				pw4 += chars.charAt(Math.floor(Math.random() * n))
			}
			setPassword(pw)
			setPassword1(pw2)
			setPassword2(pw3)
			setPassword3(pw4)
		}
	}
	return (
		<div>
			<Header as="h2" icon textAlign="center">
				<Icon name="user secret" circular />
				<Header.Content>Password Generator</Header.Content>
			</Header>
			<Container>
				<Segment>
					<Segment color="blue" style={{ marginBottom: '10px' }}>
						<div style={{ justifyContent: 'space-evenly', display: 'flex' }}>
							<Checkbox
								label="Lower Case"
								onChange={(e, { checked }) =>
									checked
										? setData(data + 'abcdefghijklmnopqrstuvwxyz')
										: setData(data.replace('abcdefghijklmnopqrstuvwxyz', ''))
								}
							/>
							<Checkbox
								label="Upper Case"
								onChange={(e, { checked }) =>
									checked
										? setData(data + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
										: setData(data.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', ''))
								}
							/>
							<Checkbox
								label="Numbers"
								onChange={(e, { checked }) =>
									checked
										? setData(data + '0123456789')
										: setData(data.replace('0123456789', ''))
								}
							/>
							<Checkbox
								label="Special characters"
								onChange={(e, { checked }) =>
									checked
										? setData(data + '!@#$%^&*()')
										: setData(data.replace('!@#$%^&*()', ''))
								}
							/>

							<Button
								color="blue"
								basic
								disabled={length === '' || length === 0 || data === ''}
								onClick={() => {
									generatePassword(length, data)
								}}
								content="Generate"
							/>
							<Input
								type="number"
								focus
								placeholder="Password Length"
								onChange={(e) => {
									setLength(e.target.value)
								}}
							/>
						</div>
					</Segment>
					<Grid>
						<Grid.Row>
							<Grid.Column width={8}>
								{password && <Message header={password} />}
								{password && <Message header={password1} />}
							</Grid.Column>
							<Grid.Column width={8}>
								{password && <Message header={password2} />}
								{password && <Message header={password3} />}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		</div>
	)
}
