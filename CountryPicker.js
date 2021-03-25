import React, {useRef} from 'react';
import { FlatList, TextInput, Keyboard, Easing, TouchableOpacity, View, Text, Animated, Dimensions, KeyboardAvoidingView } from 'react-native';
import {countryCodes} from "./constants/countryCodes";
import {useKeyboardStatus} from "./helpers/useKeyboardStatus";
import {CountryButton} from "./components/CountryButton";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const CountryPicker = ({show, setClose, pickerButtonOnPress, onBackdropClose}) => {
    // ToDo need to add prop types
    const [animationDriver] = React.useState(new Animated.Value(0));
    const animated = useRef(new Animated.Value(0)).current;
    const keyboardStatus = useKeyboardStatus();
    const [searchValue, setSearchValue] = React.useState('');
    const [result, setResult] = React.useState([]);

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

    React.useEffect(() => {
        if(!keyboardStatus) {
            animateOut()
        } else {
            animateIn()
        }
    },[keyboardStatus]);

    React.useEffect(() => setResult(countryCodes.filter(country => country?.name.includes(searchValue))),[searchValue]);

    const modalPosition = animationDriver.interpolate({
        inputRange: [0, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1],
        outputRange: [height, 105, 75, 50, 30, 15, 5, 0],
        extrapolate: 'clamp',
        useNativeDriver: true,
    });

    const size = animated.interpolate({
        inputRange: [0, 1],
        outputRange: [width - 20, width - 90]
    });

    const closeModal = () => {
        Animated.timing(animationDriver, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false
        }).start();
    }

    const animateIn = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: false
        }).start();
    };

    const animateOut = () => {
        Keyboard.dismiss();
        Animated.timing(animated, {
            toValue: 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: false
        }).start();
    }

    return(
        <Animated.View
            style={[
                styles.modal,
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
                        width: size || '100%'
                    }}
                >
                    <TextInput
                        style={styles.searchBar}
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        placeholder={'Search your country'}
                    />
                </Animated.View>
                <TouchableOpacity
                    onPress={() => {
                        setSearchValue('')
                        animateOut()
                    }}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                    }}
                >
                    <Text
                        style={{
                            color: '#42a5f5',
                            fontSize: 15,
                            width: 65,
                            top: 3,
                        }}
                    >
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    width: '100%',
                    height: 1.5,
                    borderRadius: 2,
                    backgroundColor: '#eceff1',
                    alignSelf: 'center',
                    marginVertical: 5,
                }}
            />
            {result.length === 0 ? (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <Text
                        style={{
                            color: '#8c8c8c',
                            fontSize: 16,
                        }}
                    >
                        Sorry we cant find your country :(
                    </Text>
                </View>
            ) : (
                <FlatList
                    // ToDo add showing new countries only when fat list is scrolling using onScroll
                    showsVerticalScrollIndicator={false}
                    data={!!result ? result : countryCodes}
                    keyExtractor={(item, index) => item + index}
                    initialNumToRender={7}
                    renderItem={({item, index}) => (
                        <CountryButton
                            key={index}
                            item={item}
                            onPress={() => {
                                pickerButtonOnPress(item)
                                closeModal()
                            }}
                        />
                    )}
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
    }
};
