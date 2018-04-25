import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer, Form, Item, Label,Input } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200,backgroundColor:'#5086BF' }}>
					<Body style={{ alignItems: "center" }}>
					<Image
							source={require('../../../../assets/logo.png')}
						/>
						<Title style={{ color: "white" }}>Sahabat 24</Title>
						<View padder>
						</View>
					</Body>
				</Header>
				<Content>
				{this.props.loginForm}
				<Form>
				            <Item floatingLabel>
				              <Label>Username or Email</Label>
				              <Input />
				            </Item>
				            <Item floatingLabel last>
				              <Label>Password</Label>
				              <Input />
				            </Item>
				          </Form>
					<View padder>
<Text>Keep me signed in</Text>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>

						<Button block onPress={() => this.props.onLogin()}>
							<Text>Register</Text>
						</Button>
						<Text>Forgot your password ?</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Login;
