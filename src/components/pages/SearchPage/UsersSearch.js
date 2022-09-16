import React from 'react';
import Controls from "./Controls";
import UsersList from "./UsersList";
import {Button} from "react-native";

const UsersSearch = ({navigation}) => {
    return (
        <>
            <Controls/>
            <UsersList navigation={navigation}/>
        </>
    );
};

export default UsersSearch;