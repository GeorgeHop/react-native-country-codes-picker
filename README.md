# react-native-country-codes-picker

This lib. provide simple country picker with search functionality. Fully crossplatform and created on react-native.

# Example

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/47904385/112465485-147ece00-8d65-11eb-9f79-5fad6c723712.gif)

# Basic usage
```JS
import {CountryPicker} from "react-native-country-codes-picker/components/CountryPicker";

export default function App() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {countryCode}
        </Text>
      </TouchableOpacity>

      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  );
}
```
