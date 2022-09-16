import React, {useContext, useState, useEffect} from 'react';
import {Button, TextInput, View, StyleSheet, Alert} from "react-native";
import {AppContext} from "../../../../App";

const Controls = () => {
    const [userLogin, setUserLogin] = useState('');
    const {usersList, setUsersList} = useContext(AppContext);
    const [users, setUsers] = useState();

    const fetchData = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'GET'
            });
            const data = await response.json();
            setUsers(data);
            setUsersList(data);
        } catch (e) {
            alert(`Error: ${e}`);
        }
    }

    const filterUsers = (searchText, listOfUsers) => {
        if (searchText.trim() == '') {
            return users;
        }
        return listOfUsers.filter(({login}) =>
            login.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    useEffect(() => {
        fetchData('https://api.github.com/users');
    }, []);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredUsers = filterUsers(userLogin, usersList);
            setUsersList(filteredUsers);
        }, 300);
        setUsersList(users);
        return () => clearTimeout(debounce)
    }, [userLogin]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={userLogin}
                onChangeText={text => setUserLogin(text)}
                placeholder={'Enter user name...'}
            />
        </View>
    );
};

export default Controls;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    input: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 16,
        width: '100%',
        padding: 5
    }
})