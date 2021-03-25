# react-native-country-codes-picker

This lib. provide simple country picker with search functionality. Fully crossplatform and created on react-native.

# Example

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/47904385/112475469-223a5080-8d71-11eb-92c0-43583056e30c.gif)

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

      // For showing picker just put show state to show prop
      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  );
}
```

# Props
Below are the props you can pass to the React Component.

| Prop  | Type | Default | Example | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show  | boolean | | |  This prop using for displaying the modal. Put your show state here. |
| pickerButtonOnPress | function | | (country) => setCode(country.dial_code) | Put your function/functions here for getting country data from picker. |

# ToDo

1. Custom styling.
2. Picker types (modal, input). If you need input with search.
3. Dark theme option.
4. Multi lang. (for supporting more languages).
5. More speed optimization.

If you have something interesting ! Just write to us :)
