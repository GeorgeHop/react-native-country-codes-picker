import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { ItemTemplateProps } from "../types/Types";


export const CountryButton = ({ item, name, style, ...rest }: ItemTemplateProps) => (
    <TouchableOpacity
        style={[styles.countryButton, style?.countryButtonStyles]}
        testID="countryCodesPickerCountryButton"
        {...rest}
    >
        <Text style={[
            {
                flex: 0.2
            },
            style?.flag
        ]}>
            {item?.flag}
        </Text>
        <Text style={[{
            flex: 0.3,
        }, style?.dialCode]}>
            {item?.dial_code}
        </Text>
        <Text style={[{
            flex: 1
        }, style?.countryName]}>
            {name}
        </Text>
    </TouchableOpacity>
);

type StyleKeys = 'countryButton';

const styles: { [key in StyleKeys]: ViewStyle } = {
    countryButton: {
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        width: '100%',
        minHeight: 50,
        maxHeight: 62,
        paddingHorizontal: 25,
        alignItems: 'center',
        marginVertical: 2,
        flexDirection: 'row',
        borderRadius: 10,
    },
};
