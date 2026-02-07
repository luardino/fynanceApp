import { View, FlatList, FlatListProps, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./style";
import { colors, fontFamily } from "@/theme";
import { Separator } from "../Separator";



type Props<T> = FlatListProps<T> & {
    title?: string;
    emptyText?: string;
    containerStyle?: StyleProp<ViewStyle>;
}


export function List<T>({
    containerStyle,
    title,
    emptyText,
    data,
    renderItem,
    ...rest
}: Props<T>) {

  return (
    <View style={[styles.container, containerStyle]}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <Separator color={colors.gray[200]}/>}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.empty}>{emptyText}</Text>
                )}
            {...rest}
        />
    </View>
    
  );
}