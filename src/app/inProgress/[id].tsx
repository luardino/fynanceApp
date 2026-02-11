import { View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { Transaction } from "@/components/Transaction";
import { TransactionType } from "@/utils/TransactionTypes";
import { List } from "@/components/List";
import { Button } from "@/components/Button";



const data = {
    current: "€ 2.500,00",
    percentage: 50,
    target: "€ 5.000,00",
}

const transactions = [
    {
        id: "1",
        value: "€ 500,00",
        date: "2024-06-01",
        description: "Money added",
        type: TransactionType.Input,
    },
    {
        id: "2",
        value: "€ -250,00",
        date: "2024-06-15",
        description: "Money removed",
        type: TransactionType.Output,
    },
    {
        id: "3",
        value: "€ 100,00",
        date: "2024-06-20",
        description: "Money added",
        type: TransactionType.Input,
    },
]


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

            <List
                title="Transações"
                data={[]}
                renderItem={({ item }) => (
                    <Transaction data={item} onRemove={() => {

                     }}
                    />)
                }
                emptyText="No transactions"
            />
            <Button title="Add Transaction" onPress={() => {
                router.navigate(`/transaction/${params.id}`);
             }} />
        </View>
    )
}