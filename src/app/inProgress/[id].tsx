import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";


const data = {
    current: "€ 2.500,00",
    percentage: 50,
    target: "€ 5.000,00",
}



export default function InProgress() {
    const params = useLocalSearchParams<{ id: string }>();
    return (
        <View style={{ flex: 1, padding: 24, gap: 32 }}>
            <PageHeader 
            title="Macbook Pro 16 M1 Pro"
            rightButton={
                {
                    icon: "edit",
                    onPress: () => {
                        
                    },
                }
            }
             />

             <Progress data={data} />
        </View>
    )
}