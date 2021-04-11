import * as React from 'react';
import { useState } from 'react';
import { Text, StyleSheet, View } from "react-native";
import CheckBox from 'react-native-check-box';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

function CheckboxItem({ textLabel }) {
    const [isChecked, setCheckedState] = useState(false);

    return (
        <View style={styles.checkboxContainer}>
            <Text style={styles.label}>{textLabel}</Text>
            <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                    setCheckedState(
                        prev => !prev
                    )
                }}
                isChecked={isChecked}
                checkedImage={<FontAwesomeIcon icon={faCheck}  />}
                unCheckedImage={<FontAwesomeIcon icon={faEdit}  />}
            />
            
        </View>
    );
}

export default CheckboxItem;


const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        margin: 8,
        fontSize: 17
    },
});