import { View, Text, ColorValue } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons"


export type SummaryProps = {
    label: string;
    value: string;
    color: ColorValue;
}

type Props = {
    data: SummaryProps;
    icon:{
        name: keyof typeof MaterialIcons.glyphMap;
        color: ColorValue;
    }
    isLeft?: boolean;
}

export function Summary({ data, icon, isLeft = false }: Props) {
  return (
    <View style={[styles.container, isLeft && { alignItems: "flex-end" }]}>
        <View style={styles.header}>
        <MaterialIcons name={icon.name} size={16} color={icon.color} />
        <Text style={styles.label}>{data.label}</Text>
    </View>
    <Text style={[styles.value, { color: data.color }]}>{data.value}</Text>
    </View>
  );
}
