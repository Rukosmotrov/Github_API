import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, FlatList, TouchableOpacity, Button} from "react-native";
import Card from "./Card";
import {AppContext} from "../../../../App";

const UsersList = ({navigation}) => {
    // const [usersData, setUsersData] = useState([]);
    //
    // const fetchData = async (url) => {
    //     try {
    //         const response = await fetch(url, {
    //             method: 'GET'
    //         });
    //         const data = await response.json();
    //         setUsersData(data);
    //     } catch (e) {
    //         alert(`Error: ${e}`);
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchData('https://api.github.com/users');
    // }, []);

    const {usersList} = useContext(AppContext);

    return (
        <FlatList
            keyExtractor={item => item.id}
            data={usersList}
            renderItem={({item}) => (
                <Card
                    user={item}
                    login={item.login}
                    avatar_url={item.avatar_url}
                    repos_url={item.repos_url}
                    navigation={navigation}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: '5%'
    }
});

export default UsersList;