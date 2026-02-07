import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        gap: 16,
        paddingBottom: 72,
    },
    title: {
        padding: 24,
        marginLeft: -24,
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