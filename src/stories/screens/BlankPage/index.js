import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Tab, Tabs,ScrollableTab } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header hasTabs>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Blank Page"}</Title>
					</Body>

					<Right />
				</Header>
					<Tabs renderTabBar={()=> <ScrollableTab />}>
				           <Tab heading="Curhat">
				             <Text>1 </Text>
				           </Tab>
				           <Tab heading="Resources">
				             <Text>2 </Text>
				           </Tab>
				           <Tab heading="Profile">
				             <Text>3 </Text>
				           </Tab>
				         </Tabs>



				<Content padder>
					<Text>{param !== undefined ? param.name.item : "Create Something Awesome . . ."}</Text>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
