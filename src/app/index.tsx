import { HomeHeader } from "@/components/HomeHeader";
import { View } from "react-native";
import { colors } from "@/theme";
import { Target } from "@/components/Target";

const summary = {
    total: "€ 2.043,00",
    input: { label: "Entries", value: "+ € 7.200,00", color: colors.green[400] },
    output: { label: "Exits", value: "- € 5.157,00", color: colors.red[400] },
}


const targets = [{
    name: "Macbook Pro 16 M1 Pro",
    percentage: "60%",
    current: "€ 1.225,00",
    target: "€ 2.043,00"
}]

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={summary} />
            <Target data={targets[0]} />
        </View>
    )
}