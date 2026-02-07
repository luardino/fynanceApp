import { HomeHeader } from "@/components/HomeHeader";
import { View } from "react-native";
import { colors } from "@/theme";

const summary = {
    total: "€ 2.043,00",
    input: { label: "Entries", value: "+ € 7.200,00", color: colors.green[400] },
    output: { label: "Exits", value: "- € 5.157,00", color: colors.red[400] },
}

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={summary} />
        </View>
    )
}