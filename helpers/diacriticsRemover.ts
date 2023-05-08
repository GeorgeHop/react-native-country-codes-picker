export const removeDiacritics = (text: string) => {
    //get the unicode normalization form of the string and replace dialitics with empty string.
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };