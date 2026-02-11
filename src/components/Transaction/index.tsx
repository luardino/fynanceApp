import { View, Text, Pressable } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { TransactionType } from "@/utils/TransactionTypes";
import { colors } from "@/theme";

export type TransactionProps = {
    id: string;
    value: string;
    date: string;
    description?: string;
    type: TransactionType;
}

type Props = {
    data: TransactionProps;
    onRemove: () => void;
}

export const Transaction = ({ data, onRemove }: Props) => {

    return (
        <View style={styles.container}>
            <MaterialIcons
                name={data.type === TransactionType.Input ? "arrow-upward" : "arrow-downward"} size={18} 
                color={data.type === TransactionType.Input ? colors.green[400] : colors.red[400]} />
            <View style={styles.info}>
                <Text
                    style={[
                        styles.value,
                        data.type === TransactionType.Input ? styles.valueInput : styles.valueOutput,
                    ]}
                >
                    {data.value}
                </Text>
                <Text style={styles.description} numberOfLines={1}>
                     {data.date} {data.description && `• ${data.description}`}
                    </Text>
            </View>
            <Pressable onPress={onRemove}>
                <MaterialIcons name="close" size={18} color={colors.gray[400]} />
            </Pressable>
        </View>
    )
}
