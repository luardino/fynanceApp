import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        paddingBottom: 72,
    },
    title: {
        paddingVertical: 24,
        paddingHorizontal: 0,
        fontSize: 18,
        fontFamily: fontFamily.bold,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
    },
    empty: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[600],
        textAlign: "center",
        marginTop: 32,

    },
})
