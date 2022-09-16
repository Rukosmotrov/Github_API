import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, Button, StyleSheet, Alert, Linking, ScrollView, FlatList} from "react-native";
import {AppContext} from "../../../../App";

const UserPage = () => {
    const {selectedUser} = useContext(AppContext);
    const [repos, setRepos] = useState([]);
    const [isReposShown, setIsRepostShown] = useState(false);

    const fetchRepos = async () => {
        try {
            const response = await fetch(selectedUser.repos_url, {
                method: 'GET'
            });
            const data = await response.json();
            setRepos(data);
        } catch (e) {
            Alert.alert(`Error: ${e}`);
        }
    }

    const openRepo = async (url) => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url)
        } else {
            Alert.alert(`Can't open this URL: ${url}`);
        }
    }

    useEffect(() => {
        fetchRepos();
    }, []);

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image
                    style={styles.cardImage}
                    source={{uri: `${selectedUser.avatar_url}`}}
                />
                <Text style={styles.cardTitle} >{selectedUser.login}</Text>
            </View>
            <Button
                title={isReposShown ? 'Hide repos' : 'Show repos'}
                onPress={() => setIsRepostShown(!isReposShown)}
            />
            {
                isReposShown &&
                    <>
                        <View style={styles.underline}/>
                        <FlatList
                            keyExtractor={item => item.id}
                            data={repos}
                            renderItem={({item}) => (
                                <Button title={`${item.name}`} onPress={() => openRepo(item.html_url)}/>
                            )}
                            contentContainerStyle={{paddingBottom: 200}}
                        />
                    </>
            }
        </View>
    );
};

export default UserPage;

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
    },
    underline: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderBottomStyle: 'solid',
        marginBottom: 10,
        marginTop: 10
    }
})