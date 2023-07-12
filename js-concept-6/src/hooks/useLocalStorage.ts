import React, { useState, useEffect } from "react";

type LocalStorageHook<T> = [
    T,
    React.Dispatch<React.SetStateAction<T>>
];

export const useLocalStorage = <T>(key: string, initialValue?: T): LocalStorageHook<T> => {
    const [value, setValue] = useState<T>(() => {
        const jsonValue: string | null = localStorage.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue) as T;
        return initialValue as T;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
