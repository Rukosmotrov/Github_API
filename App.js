import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from "./styles";
import Header from "./src/components/Header";
import Controls from "./src/components/pages/SearchPage/Controls";
import React, {createContext, useState} from "react";
import Card from "./src/components/pages/SearchPage/Card";
import UsersList from "./src/components/pages/SearchPage/UsersList";
import UsersSearch from "./src/components/pages/SearchPage/UsersSearch";
import Navigation from "./src/components/Navigation";
import UserPage from "./src/components/pages/UserPage/UserPage";

export const AppContext = createContext(null);

export default function App() {
    const [usersList, setUsersList] = useState();
    const [selectedUser, setSelectedUser] = useState();

    return (
        <AppContext.Provider value={{
            usersList,
            setUsersList,
            selectedUser,
            setSelectedUser
        }}>
            <Navigation/>
        </AppContext.Provider>
    );
}