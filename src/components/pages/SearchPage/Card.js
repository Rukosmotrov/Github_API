import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Image, Button, StyleSheet, Linking, Alert} from 'react-native';
import {AppContext} from "../../../../App";

const Card = ({user, login, avatar_url, repos_url, navigation}) => {
    const {setSelectedUser} = useContext(AppContext);

    const openUserCard = (user) => {
        setSelectedUser(user);
        navigation.navigate('UserPage');
    }

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image
                    style={styles.cardImage}
                    source={{uri: `${avatar_url}`}}
                />
                <Text style={styles.cardTitle} >{login}</Text>
            </View>
            <Button title={'View profile'} onPress={() => openUserCard(user)}/>
            {/*{*/}
            {/*    repos.map(rep =>*/}
            {/*        <Button title={`${rep.name}`} onPress={() => openRepo(rep.html_url)}/>*/}
            {/*    )*/}
            {/*}*/}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        margin: '5%',
        padding: '2%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'black'
    },
    cardHeader: {
      flexDirection: 'row',
        marginBottom: 10
    },
    cardImage: {
        width: '35%',
        height: 100,
        borderRadius: 12
    },
    cardTitle: {
        fontSize:20,
        maxWidth: '70%',
        padding: 10
    },
    cardText: {
        marginBottom: 10
    },
    reposList: {
        display: "none",
        justifyContent: 'center'
    }
})