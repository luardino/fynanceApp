import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";


export const styles = StyleSheet.create({
    container:{
        width: "100%",
        backgroundColor: colors.gray[100],
        flexDirection: "row",
        height: 48,
        borderRadius: 8,
        overflow: "hidden",
    },
    option:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        justifyContent: "center",
    },
    title: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.gray[500],
        marginLeft: 8,
    },
})