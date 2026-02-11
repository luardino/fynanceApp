import { Button } from "@/components/Button"
import { CurrencyInput } from "@/components/CurrencyInput"
import { Input } from "@/components/Input"
import { PageHeader } from "@/components/PageHeader"
import { View } from "react-native"

export default function Target() {
    return (
        <View style={{ flex: 1, padding: 24 }}>
            <PageHeader
                title="Travel to Brasil"
                subtitle="I will go to Brasil in this year, when I have a target, I done!"
            />
            <View style={{ marginTop: 32, gap: 16 }}>
                <Input label="Name of Target" placeholder="Ex.: Target to Angola" />
                <CurrencyInput
                    label="Value"
                    placeholder="Ex.: 1000.00"
                    value={0}
                />

                <Button title="Save" />
            </View>

        </View>
    )
}