import Login from './pages/LoginPage';
import Sign from './pages/SingPage';
import Home from './pages/Home';
import {useState} from 'react';
//导航容器
import {NavigationContainer} from '@react-navigation/native';
//导航栈
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
    //route stack
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                             //screen options
                             screenOptions={{
                                 headerShown: false,
                             }}>
                {/*各个导航栈包含的页面*/}
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Sign" component={Sign}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

