# react-native-country-codes-picker

:zap: :zap: :zap: This lib. provide multi lang. country picker with search functionality. Fully crossplatform and supported on React-native and expo.
Didn't find your country ? Just add the required countries or locales and make a PR. :zap: :zap: :zap:

## Coming soon :muscle: :pray:

1. Custom list item rendering.
2. Custom search input rendering.
3. Picker types (modal, input). If you need input with search.
4. Docs update/improve for the best user experience.
5. TS Declarations.
6. Animation improvements.

If you have something interesting ! Just write to us :)

# :grey_exclamation: Installation :grey_exclamation:

expo: `expo install react-native-country-codes-picker`  
npm: `npm i react-native-country-codes-picker`  
yarn: `yarn add react-native-country-codes-picker`

# Example

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/47904385/112475469-223a5080-8d71-11eb-92c0-43583056e30c.gif)

# Basic usage

```JS
import {CountryPicker} from "react-native-country-codes-picker";

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

| Prop                       | Type      | Default | Example                                    | Description                                                                                                                                                               |
| -------------------------- | --------- | ------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| show                       | boolean   |         |                                            | This prop using for displaying the modal. Put your show state here.                                                                                                       |
| pickerButtonOnPress        | function  |         | (country) => setCode(country.dial_code)    | Put your function/functions here for getting country data from picker.                                                                                                    |
| inputPlaceholder           | string    |         | inputPlaceholder={'Your placeholder'}      | If you need a custom placeholder for your input you may need this prop.                                                                                                   |
| searchMessage              | string    |         | searchMessage={'Some search message here'} | If you want to customize search message just use this prop.                                                                                                               |
| lang                       | string    | 'en'    | lang={'pl'}                                | If you need to change the lang. just put one of supported lang. Or if you didn't find required lang just add them and make a PR :)                                        |
| enableModalAvoiding        | boolean   | false   | enableModalAvoiding={true}                 | Is modal should avoid keyboard ? On android to work required to use with androidWindowSoftInputMode with value pan, by default android will avoid keyboard by itself      |
| androidWindowSoftInputMode | string    |         | androidWindowSoftInputMode={'pan'}         | Basicaly android avoid keyboard by itself, if you want to use custom avoiding you may use this prop                                                                       |
| itemTemplate               | ReactNode |         | style={<CustomListItem />}                 | This parameter gets a React Node element to render it as a template for each item of the list. These properties are sent to the item: key, item, style, name, and onPress |
| style                      | Object    |         | style={{yoursStylesHere}}                  | If you want to change styles for component you probably need this props. You can check the styling part below.                                                            |

:grey_exclamation: Also you can use all other FlatList and TextInput props if you need. :grey_exclamation:

# Styling

```JS
<CountryPicker
    show={show}
    lang={'cz'}
    style={{
        // Styles for whole modal [View]
        modal: {
            height: 500,
            backgroundColor: 'red'
        },
        // Styles for input [TextInput]
        textInput: {
              height: 80,
              borderRadius: 0,
        },
        // Styles for country button [TouchableOpacity]
        countryButtonStyles: {
              height: 80
        },
        // Styles for search message [Text]
        searchMessageText: {

        },
        // Flag styles [Text]
        flag: {

        },
        // Dial code styles [Text]
        dialCode: {

        },
        // Country name styles [Text]
        countryName: {

        }
    }}
    pickerButtonOnPress={(item) => {
        setCountryCode(item.dial_code);
        setShow(false);
    }}
/>
```

# :crossed_flags: Supported langs. :crossed_flags:

1. cz.
2. ua.
3. ru.
4. en.
5. pl.
6. pt.

You can add your lang. if you need !!! But after that make a PR please, it will help other people.
