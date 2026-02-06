import { View, Text, Button } from "react-native"
import { router } from "expo-router"


export default function Index(){
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Expo Router</Text>
        <Button 
        title="New Target" 
        onPress={() => router.push('/target')

        } />
        <Button 
        title="Transaction" 
        onPress={() => router.push('/transaction/ExampleTransitionID')}

        />
        <Button 
        title="In Progress" 
        onPress={() => router.push('/inProgress/ExampleProgressID')}
        
        />
    </View>
    )
}