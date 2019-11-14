import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title,Icon, Button, Drawer} from 'native-base';
import {
  View,
  StyleSheet,
  Linking,
  Text,
} from 'react-native';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import SideBar from './menu';

export default class TabsExample extends Component {

  render() {
    return (
      <Container >
        <Header hasTabs style={{backgroundColor: '#111111'}}>
        <Left>
          <Button transparent

            >
            <Icon name='ios-menu' style={{color:'#e82a2a',fontSize: 35}}/>
          </Button>
        </Left>
         <Body >
         <Title style={{color: '#e82a2a',left: 60}}>AHMETERDGN</Title>
         </Body>
         <Right>
           <Button transparent

             onPress={() => Linking.openURL("http://ahmeterdgn.net/")}

             >
             <Icon name='md-glasses' style={{color:'#fff',fontSize: 40 }}/>
           </Button>
         </Right>
        </Header>
        <Tabs>
          <Tab tabStyle={{backgroundColor: '#111111'}} activeTabStyle={{backgroundColor: '#111111'}} textStyle={{color:'white'}} heading="YENİ">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#111111'}} activeTabStyle={{backgroundColor: '#111111'}} textStyle={{color:'white'}} heading="KATEGORİLER">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#111111'}} activeTabStyle={{backgroundColor: '#111111'}} textStyle={{color:'white'}} heading="KARIŞIK">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>

    );
  }
}
