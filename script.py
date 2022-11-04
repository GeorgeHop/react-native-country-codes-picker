from googletrans import Translator

translator = Translator()

with open("countryCodes.txt", "r", encoding="utf8") as in_file:
    buf = in_file.readlines()

with open("countryCodes.txt", "w", encoding="utf-8") as out_file:
    for line in buf:
        newline = line.lstrip()

        if newline.find('"en":') != -1:
            final = line.strip()[7:].replace('",', '')
            translated_text = translator.translate(final, dest='ar', src='en')
            line = line +'                        "ar": "'+ translated_text.text +'",' + "\n"
        out_file.write(line)
