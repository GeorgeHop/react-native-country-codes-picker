import {ViewStyle, TextStyle} from "react-native";

export interface ItemTemplateProps {
    item: CountryItem,
    name: string,
    style?: Style,
    onPress?: (arg: any) => any,
}

export interface ListHeaderComponentProps {
  countries: CountryItem[],
  lang: string,
  onPress: (item: CountryItem) => void,
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
    searchMessageText?: TextStyle,
    itemsList?: ViewStyle,
    modalInner?: ViewStyle,
    countryMessageContainer?: ViewStyle,
    textInput?: TextStyle,
    countryButtonStyles?: ViewStyle,
    flag?: TextStyle,
    dialCode?: TextStyle,
    countryName?: TextStyle
}
