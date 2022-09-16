import React from 'react';
import {View, Text} from "react-native";
import {styles} from "../../styles";

const Header = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>GitHub users search</Text>
        </View>
    );
};

export default Header;