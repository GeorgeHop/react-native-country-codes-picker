import {countryCodes} from "../constants/countryCodes";
import {CountryItem} from "../types/Types";

export const countriesRemover = (excludedCountries: string[]|undefined): CountryItem[] => {
    return countryCodes?.filter(country => {
        return !(excludedCountries?.find(short => country?.code === short?.toUpperCase()));
    });
};
