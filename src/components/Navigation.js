import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import UsersSearch from "./pages/SearchPage/UsersSearch";
import UserPage from "./pages/UserPage/UserPage";
import UsersList from "./pages/SearchPage/UsersList";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='UsersSearch'
                    component={UsersSearch}
                    options={{title:'Users search'}}
                />
                <Stack.Screen
                    name='UserPage'
                    component={UserPage}
                    options={{title:'User card'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;