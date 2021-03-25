import React from 'react';
import {Text, TouchableOpacity} from "react-native";

export const CountryButton = ({item, ...rest}) => (
    <TouchableOpacity
        style={styles.countryButton}
        {...rest}
    >
        <Text style={{
            flex: 0.2
        }}>
            {item?.flag}
        </Text>
        <Text style={{
            flex: 0.3,
        }}>
            {item?.dial_code}
        </Text>
        <Text style={{
            flex: 1
        }}>
            {item?.name}
        </Text>
    </TouchableOpacity>
);

const styles = {
    countryButton: {
        borderBottom: 3,
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: 50,
        paddingHorizontal: 25,
        alignItems: 'center',
        marginVertical: 2,
        flexDirection: 'row',
        borderRadius: 10,
    },
};
