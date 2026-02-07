import { HomeHeader } from "@/components/HomeHeader";
import { View } from "react-native";
import { colors } from "@/theme";
import { Target } from "@/components/Target";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { router } from "expo-router";


const summary = {
    total: "€ 2.043,00",
    input: { label: "Entries", value: "+ € 7.200,00", color: colors.green[400] },
    output: { label: "Exits", value: "- € 5.157,00", color: colors.red[400] },
}


const targets = [{
    id: "1",
    name: "Macbook Pro 16 M1 Pro",
    percentage: "60%",
    current: "€1.225,00",
    target: "€2.000,00"
},
{
    id: "2",
    name: "Travel to United States",
    percentage: "40%",
    current: "€3.225,00",
    target: " €8.000,00"
},
{
    id: "3",
    name: "Travel to Angola for investment",
    percentage: "70%",
    current: "€920,00",
    target: " €2.500,00"
}
]

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={summary} />

            <List title="My Targets"
                data={targets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Target data={item} onPress={() => router.navigate(`/inProgress/${item.id}`)}/>}
                emptyText="No targets added. Click on new target to create one."
                containerStyle={{ marginHorizontal: 24 }}
            />
            <View style={{padding: 24, paddingBottom: 32,}}>
                <Button title="New Target" onPress={() => router.navigate("/target")}/>
            </View>
            
        </View>
    )
}