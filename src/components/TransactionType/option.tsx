import { ColorValue, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme";



type Props = PressableProps & {
    isSelected: boolean;
    title: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    color: ColorValue;
    selectedColor: ColorValue;
}

export function Option({ isSelected, title, icon, color, selectedColor, ...rest }: Props) {
    return (
        <Pressable 
            style={[styles.option, isSelected && { backgroundColor: selectedColor }]}
        
            {...rest}>
            <MaterialIcons name={icon} size={24} color={ isSelected ? colors.white : color } />
            <Text style={[styles.title, isSelected && { color: colors.white }]}>{title}</Text>

        </Pressable>
    )
}
