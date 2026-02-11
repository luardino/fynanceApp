import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    label: {
        marginBottom: 8,
        fontSize: 12,
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
    },
    status:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    value: {
        flex:1,
        fontSize: 18,
        fontFamily: fontFamily.medium,
        color: colors.black,
    },
    target: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.gray[500],
    },
    percentage: {
        fontSize: 14,
        fontFamily: fontFamily.bold,
        color: colors.blue[500],
    },
    progress: {
        width: "100%",
        height: 8,
        backgroundColor: colors.gray[300],
        borderRadius: 4,
        overflow: "hidden",
        marginTop: 16,
    },
    currentProgress: {
        height: "100%",
        backgroundColor: colors.blue[500],
        borderRadius: 4,
    },
})