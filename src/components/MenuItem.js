import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';

function MenuItem({ navigation, navigationTo, title, text, image, color, imageColor }) {
    return (
        <TouchableOpacity style={{ backgroundColor: color, marginTop: 16, borderRadius: 14 }} onPress={() => navigation.navigate(navigationTo)} >
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>{title}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style={{
                    width: 72, height: 72, backgroundColor: imageColor,
                    borderRadius: '50%', alignItems: 'center'
                }}>
                    <Image
                        style={styles.image}
                        source={require(`../images/${image}`)} />
                </View>
            </View>
        </TouchableOpacity >

    );
}

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        fontFamily: "Mulish-Bold",
        color: '#354354',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: -0.1,
        lineHeight: 22
    },
    text: {
        marginTop: 4,
        fontFamily: "Mulish-Regular",
        color: '#68727F',
        fontSize: 12,
        fontWeight: 'normal',
        letterSpacing: -0.1,
        lineHeight: 16
    },
    image: {
        width: 64,
        height: 64,
        resizeMode: 'cover'
    }
});