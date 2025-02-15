import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title,Icon, Button, Drawer} from 'native-base';
import {
  View,
  StyleSheet,
  Linking,
  Text,
  StatusBar
} from 'react-native';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import SideBar from './menu';
import {COLOR_HEADER, COLOR_TITLE,TITLE} from './bilgiler/bilgiler';
export default class TabsExample extends Component {

  render() {
    return (
      <Container >

        <Header hasTabs style={styles.header}
        androidStatusBarColor={COLOR_HEADER}>

        <Left>
          <Button transparent
            onPress={() => this.props.navigation.toggleDrawer()}
            >
            <Icon name='ios-menu' style={styles.menu}/>
          </Button>
        </Left>
         <Body >
         <Title style={styles.title}>{TITLE}</Title>
         </Body>
         <Right>
           <Button transparent
           onPress={() => Linking.openURL("http://ahmeterdgn.net/")}
           >
         <Icon name='md-glasses' style={styles.icon2}/>
           </Button>
         </Right>
        </Header>
        <Tabs style={styles.tab} tabBarUnderlineStyle	={{backgroundColor:COLOR_TITLE}} >
          <Tab tabStyle={styles.tablar}  activeTabStyle={styles.tablar} textStyle={styles.tabtext} scrollWithoutAnimation={false}  tabBarUnderlineStyle	={{backgroundColor: 'red'}} heading="YENİ">
            <Tab1 />
          </Tab>
          <Tab tabStyle={styles.tablar} activeTabStyle={styles.tablar}  textStyle={styles.tabtext} scrollWithoutAnimation={false} tabBarUnderlineStyle	={{backgroundColor: 'red'}} heading="KATEGORİLER">
            <Tab2 />
          </Tab>
          <Tab tabStyle={styles.tablar} activeTabStyle={styles.tablar} textStyle={styles.tabtext} scrollWithoutAnimation={false} tabBarUnderlineStyle	={{backgroundColor: 'red'}} heading="KARIŞIK">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>

    );
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR_HEADER,
  },
  menu: {
    color: COLOR_TITLE,
    fontSize: 35
  },
  title: {
    color: COLOR_TITLE,
    left: 60,
    fontFamily: 'BadScript-Regular',
    
  },
  icon2: {
    color:'#fff',
    fontSize: 40
  },
  tablar: {
    backgroundColor: COLOR_HEADER,
  },
  tabtext: {
    color:'white'
  },
  tab:{
    backgroundColor: COLOR_HEADER,
  }
});
