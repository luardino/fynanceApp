import { View } from "react-native";
import { styles} from "./style";
import { Option } from "./option";
import { colors } from "@/theme";
import { TransactionType } from "@/utils/TransactionTypes";


type Props = {
    selected: TransactionType;
    onChange: (type: TransactionType) => void;
}


export function TransactionTypes({ selected, onChange }: Props) {
    return (
        <View style={styles.container}>
            <Option
                title="Entry"
                icon="arrow-upward"
                color={colors.green[500]}
                isSelected={selected === TransactionType.Input}
                selectedColor={colors.blue[500]}
                onPress={() => onChange(TransactionType.Input)}
            />
            <Option
                title="Output"
                icon="arrow-downward"
                color={colors.red[400]}
                isSelected={selected === TransactionType.Output}
                selectedColor={colors.red[400]}
                onPress={() => onChange(TransactionType.Output)}
            />
        </View>
    )
}
