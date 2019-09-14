

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity,Image,TouchableHighlight } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import {backImage} from './backImage.png'


import {
    createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'


class App extends Component {
    render() {
        return <AppContainer />;
    }
}
export default App;



class Tab3Screen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Tab3Screen</Text>
            </View>
        );
    }
}

class Tab2Screen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Go to Next Screen" onPress={() => this.props.navigation.navigate('Detail')} />
                </View>

            </View>
        );
    }
}


class Tab2DetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Go to Next Screen" onPress={() => this.props.navigation.navigate('Detail3')} />
            </View>
        );
    }
}

class Tab2DetailScreenDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Go to Next Screen" onPress={() => this.props.navigation.navigate('Detail3')} />
            </View>
        );
    }
}

class Tab2DetailScreenDetailFinal extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'column'}}>
                <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color:'green' ,fontSize:40 }}> Success !!!!  </Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableHighlight
                        style ={{
                            height: 40,
                            width:160,
                            borderRadius:10,
                            backgroundColor : "rgb(136,15,30)",
                            marginLeft :50,
                            marginRight:50,
                        }}>
                        <Button
                            title="Goto Home"
                            color='white'  onPress={() =>{

                            const resetAction = StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: 'DashboardTabNavigator' })],
                            });
                            this.props.navigation.dispatch(resetAction);

                        }
                        } />
                    </TouchableHighlight>


                </View>

            </View>
        );
    }
}


const Detail = props => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail</Text>
    </View>
);


class Tab2Nav1Nav2DetailScreen1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Goto Next Screen" onPress={() => this.props.navigation.navigate('Detail')} />
            </View>
        );
    }
}

class Tab2Nav1Nav2DetailScreen2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Goto Next Screen" />
            </View>
        );
    }
}


class Tab2Nav1DetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Goto Next Screen"/>
            </View>
        );
    }
}

class Tab2Nav2DetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Goto Next Screen" onPress={() => this.props.navigation.navigate('Tab2Nav1Screen')} />
            </View>
        );
    }
}

class Tab2Nav3DetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Go to Next Screen" />
            </View>
        );
    }
}

class Tab2Nav4DetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Go to Next Screen" />
            </View>
        );
    }
}
const Tab2Nav1Screen = createMaterialTopTabNavigator(
    {
        nav1: { screen: Tab2Nav1Nav2DetailScreen1 },
        nav2: { screen: Tab2Nav1Nav2DetailScreen2 },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,

        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: 'brown',
                borderBottomWidth: 2,
            },
            style: {
                backgroundColor: 'white',
                borderColor: 'transparent',
            },
        },

    }
);



//making a StackNavigator to export as default
const Tab2TopTab1Stack = createStackNavigator({
    Tab2Nav1Screen: {
        screen: Tab2Nav1Screen,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                        <Image source={backImage} style={{ height: 26, width: 26, marginLeft: 16,backgroundColor:'black' }} />
                    </TouchableOpacity>
                ),
            };
        }
    },
});


//making a StackNavigator to export as default
const FinalLastStack = createStackNavigator({
    Detail: {
        screen: Tab2DetailScreen
    },
},
{
    defaultNavigationOptions: {
        gesturesEnabled: false,
            tabBarVisible: true,
    }
});



const TabScreen = createMaterialTopTabNavigator(
    {
        nav1: { screen: Tab2Nav1DetailScreen },
        nav2: { screen: Tab2Nav2DetailScreen },
        nav3: { screen: Tab2Nav3DetailScreen },
        nav4: { screen: Tab2Nav4DetailScreen },
    },

    {
        initialRouteName: 'nav2',
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,

        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: 'brown',
                borderBottomWidth: 2,
            },
            style: {
                backgroundColor: 'white',
                borderColor: 'transparent',
                marginTop:60
            },
        },

    }
);


//making a StackNavigator to export as default
const Screen2TabStack = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            header:null
        }

    },
    Tab2Nav1Screen: {
        screen: Tab2Nav1Screen,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Title',
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                        <Image source={require('./backImage.png')} style={{ height: 26, width: 26, marginLeft: 16 }} />
                    </TouchableOpacity>
                ),
            };
        }
    },
    Detail: {
        screen: Tab2DetailScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                        <Image source={require('./backImage.png')} style={{ height: 26, width: 26, marginLeft: 16 }} />
                    </TouchableOpacity>
                ),
            };
        }
    },
    Detail3: {
        screen: Tab2DetailScreenDetailFinal,
        navigationOptions: ({ navigation }) => {
            return {
                header:null
            };
        }
    },
});



Screen2TabStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        return {
            tabBarVisible: false
        };
    }
    return {
        tabBarVisible,
    };
};





class Tab1Screen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color:'brown',fontSize:25 }}>Welcome Home</Text>
            </View>
        );
    }
}
const Tab1Stack = createStackNavigator({
    Tab1Screen: {
        screen: Tab1Screen,
        navigationOptions: ({ navigation }) => {
            return {
                header:null,
            };
        }
    }
});

const Tab3Stack = createStackNavigator({
    Tab3Screen: {
        screen: Tab3Screen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Tab3',
            };
        }
    }
});



const DashboardTabNavigator = createBottomTabNavigator(
    {
        Tab1Stack: Tab1Stack,
        Tab2Stack: Screen2TabStack,
        Tab3Stack: Tab3Stack,

    }
    , {
        defaultNavigationOptions: {
            gesturesEnabled: false,
            tabBarVisible: true,
        }
    }

);
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: DashboardTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header:null
            };
        }
    }
);

const AppContainer = createAppContainer(DashboardStackNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
