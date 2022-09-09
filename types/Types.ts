import {ViewStyle} from "react-native";

export interface ItemTemplateProps {
    item: CountryItem,
    name: string,
    style?: Style,
    onPress?: (arg: any) => any,
}

export interface CountryItem {
    name: {[key: string]: string},
    dial_code: string,
    code: string,
    flag: string
}

export interface Style {
    backdrop?: ViewStyle,
    modal?: ViewStyle,
    line?: ViewStyle,
    searchMessageText?: ViewStyle,
    itemsList?: ViewStyle,
    modalInner?: ViewStyle,
    countryMessageContainer?: ViewStyle,
    textInput?: ViewStyle,
    countryButtonStyles?: ViewStyle,
    flag?: ViewStyle,
    dialCode?: ViewStyle,
    countryName?: ViewStyle
}
