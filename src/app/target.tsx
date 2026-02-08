import { View } from "react-native"
import { PageHeader } from "@/components/PageHeader"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

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
            <View style={{ marginTop: 32, gap: 16 }}>
                <Input label="Name of Target" placeholder="Ex.: Target to Angola" />
                <Button title="Save"/>
            </View>
            
        </View>
    )
}