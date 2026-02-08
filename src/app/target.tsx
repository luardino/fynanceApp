import { View, Button, } from "react-native"
import { PageHeader } from "@/components/PageHeader"

export default function Target() {
    return (
        <View style={{ flex: 1, padding: 24 }}>
            <PageHeader
                title="Travel to Brasil"
                subtitle="I will go to Brasil in this year, when I have a target, I done!"
                rightButton={{
                    icon: "edit",
                    onPress: () => {
    
                    }
                    }
                }
            />
        </View>
    )
}