import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 64,
        gap: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    info: {
        flex: 1,
        gap: 4,
    },
    value: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.gray[500],
    },
    valueInput: {
        color: colors.green[400],
    },
    valueOutput: {
        color: colors.red[400],
    },
    description: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
    },
});
