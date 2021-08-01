import React from 'react';
import { FlatList, TextInput, View, Text, Animated, Dimensions } from 'react-native';
import {countryCodes} from "../constants/countryCodes";
import {CountryButton} from "./CountryButton";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function CountryPicker({show, pickerButtonOnPress, inputPlaceholder, searchMessage, lang = 'en', style, ...rest}) {
    const [animationDriver] = React.useState(new Animated.Value(0));
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        if(show) {
            Animated.timing(animationDriver, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false
            }).start();
        } else {
            closeModal()
        }
    }, [show]);

    const resultCountries = React.useMemo(() => {
        if (!isNaN(searchValue))
            return countryCodes.filter(country => country?.dial_code.includes(searchValue))

        return countryCodes.filter(country => country?.name[lang || 'en'].includes(searchValue))
    },[searchValue]);

    const modalPosition = animationDriver.interpolate({
        inputRange: [0, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1],
        outputRange: [height, 105, 75, 50, 30, 15, 5, 0],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });

    const closeModal = () => {
        Animated.timing(animationDriver, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false
        }).start();
    };

    return(
        <Animated.View
            style={[
                styles.modal,
                style?.modal,
                {
                    transform: [
                        {
                            translateY: modalPosition,
                        }
                    ]
                }
            ]}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Animated.View
                    style={{
                        width: '100%'
                    }}
                >
                    <TextInput
                        style={[styles.searchBar, style?.textInput]}
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        placeholder={inputPlaceholder || 'Search your country'}
                        {...rest}
                    />
                </Animated.View>
            </View>
            <View style={styles.line}/>
            {resultCountries.length === 0 ? (
                <View style={styles.countryMessage}>
                    <Text
                        style={[{
                            color: '#8c8c8c',
                            fontSize: 16,
                        }, style?.searchMessageText]}
                    >
                        {searchMessage || 'Sorry we cant find your country :('}
                    </Text>
                </View>
            ) : (
                <FlatList
                    // ToDo add showing new countries only when fat list is scrolling using onScroll
                    showsVerticalScrollIndicator={false}
                    data={resultCountries || countryCodes}
                    keyExtractor={(item, index) => item + index}
                    initialNumToRender={7}
                    renderItem={({item, index}) => {
                        let itemName = item?.name[lang];
                        let checkName = itemName.length ? itemName : item?.name['en'];

                        return(
                            <CountryButton
                                key={index}
                                item={item}
                                style={style}
                                name={checkName}
                                onPress={() => {
                                    pickerButtonOnPress(item)
                                    closeModal()
                                }}
                            />
                        )
                    }}
                    {...rest}
                />
            )}
        </Animated.View>
    );
};

const styles = {
    backdrop: {
        width: width,
        zIndex: 1,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.35)',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: 'white',
        height: '50%',
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 10,
        position: 'absolute',
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    searchBar: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        height: 40,
        padding: 5,
    },
    countryMessage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    line: {
        width: '100%',
        height: 1.5,
        borderRadius: 2,
        backgroundColor: '#eceff1',
        alignSelf: 'center',
        marginVertical: 5,
    }
};
