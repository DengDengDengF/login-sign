
import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import styles from '../assets/styles/stylesHome';

function Home() {
    return ( <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Homes</Text>
            </View>
        </View>
    </ScrollView>)
}

export default Home;
