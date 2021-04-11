import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native';
import HOME_SCREEN_MENU_ITEMS from '../utils/constants';
import Menu from './Menu';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Mobile App Name</Text>
                <TouchableHighlight>
                    <View style={styles.buttonFilter}><Image
                        style={styles.filterImage}
                        source={require('../images/filter.svg')}
                    /></View>
                </TouchableHighlight>
            </View>
            <View style={styles.heading}><Text style={styles.headingText}>Support and feedback</Text></View>
            <Menu navigation={navigation} data={HOME_SCREEN_MENU_ITEMS}></Menu>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20.5,
        paddingBottom: 13,
        paddingLeft: 16,
        paddingRight: 16,
        flex: 1,
        backgroundColor: '#F4F7F9',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        marginTop: 12,
        paddingTop: 11,
        paddingBottom: 13,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 14
    },
    headingText: {
        fontFamily: "Mulish-Regular",
        color: '#354354',
        fontSize: 14,
        fontWeight: 'normal',
        letterSpacing: -0.1,
        lineHeight: 18
    },
    textHeader: {
        marginLeft: 8,
        fontFamily: "Mulish-Bold",
        color: '#354354',
        fontSize: 26,
        fontWeight: 'bold',
        letterSpacing: -0.2,
        lineHeight: 32
    },
    buttonFilter: {
        width: 50,
        height: 44,
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterImage: {
        width: 22,
        height: 22,
        resizeMode: 'cover'
    }
});