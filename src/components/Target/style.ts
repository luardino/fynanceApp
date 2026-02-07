import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        height: 72,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 16,
        gap: 12,
        padding: 15,
    },
    content: {
        flex: 1,
        gap: 7,
    },
    name:{
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.black,
    },
    status:{
        fontSize: 10,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    },
})