import {
    useState,
    useEffect
} from "react"

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue) {
            if (typeof defaultValue === "function") {
                return defaultValue()
            } else {
                return defaultValue
            }
        }
        return JSON.parse(jsonValue)
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    return [value, setValue];
}