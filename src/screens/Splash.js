import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Signup");
        }, 2000)
    }, []);

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>{"Firebase Chat\n App"}</Text>
      </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        fontSize: 40,
        color: "white",
        textAlign: "center"
    }
});