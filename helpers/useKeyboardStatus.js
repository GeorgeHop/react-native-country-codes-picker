import React, { useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";

/*
* This func. listen the keyboard and
* write to isOpen true or false
* depending on keyboard status
* */
export const useKeyboardStatus = () => {
    const [isOpen, setIsOpen] = useState(false);
    const keyboardHideListener = useRef(null);
    const keyboardShowListener = useRef(null);

    useEffect(() => {
        keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () => setIsOpen(true));
        keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () => setIsOpen(false));

        return () => {
            keyboardShowListener.current.remove();
            keyboardHideListener.current.remove();
        };
    },[]);

    return isOpen;
}
