import { useState } from "react";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { TransactionTypes } from "@/components/TransactionType";

import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { TransactionType } from "@/utils/TransactionTypes";



export default function Transaction(){
    const [type, setType] = useState(TransactionType.Input);
    const params = useLocalSearchParams<{id: string}>();
    return (
        <View style={{ flex: 1, padding: 24 }}>
            <PageHeader 
            title="New Transaction"
            subtitle="Every penny saved brings you closer to your goal. Make an effort to save and avoid withdrawing when unnecessary."
            />

            <View style={{marginTop: 34, gap: 24}}>
                <TransactionTypes selected={type} onChange={setType} />
                <CurrencyInput label="amount (EUR)" value={0}/>
                <Input label="Reason (optional)" placeholder="Ex.: Investiment for Angola"/>
                <Button title="Save" onPress={() => {}} />
            </View>

        </View>
    )
}
