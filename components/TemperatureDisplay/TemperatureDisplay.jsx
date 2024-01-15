import { Text } from "react-native"
import { s } from "./TemperatureDisplay.style"

export function TemperatureDispay({ value, unit }) {
    return <Text style={s.text}>{ value } {unit}</Text>
}