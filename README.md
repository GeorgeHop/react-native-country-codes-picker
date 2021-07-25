# react-native-country-codes-picker

This lib. provide multi lang. country picker with search functionality. Fully crossplatform and supported on React-native and expo.
Didn't find your country ? Just add the required countries or locales and make a PR.

# Installation

``
npm i react-native-country-codes-picker
``

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
| inputPlaceholder | string | | inputPlaceholder={'Your placeholder'} | If you need a custom placeholder for your input you may need this prop. | 
| searchMessage | string | | searchMessage={'Some search message here'} | If you want to customize search message just use this prop. | 
| lang | string | 'en' | lang={'pl'} | If you need to change the lang. just put one of supported lang. Or if you didn't find required lang just add them and make a PR :) | 

# ToDo

1. Custom styling.
2. Picker types (modal, input). If you need input with search.
3. Dark theme option.

If you have something interesting ! Just write to us :)
