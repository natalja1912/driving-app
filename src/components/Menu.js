import * as React from 'react';
import { View, FlatList } from 'react-native';
import MenuItem from './MenuItem';

function Menu({ navigation, data }) {
    const renderItem = ({ item }) => (
        <MenuItem navigation={navigation} title={item.title} text={item.text} image={item.image} color={item.color} imageColor={item.imageColor} navigationTo={item.navigationTo} />
    );
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default Menu;
