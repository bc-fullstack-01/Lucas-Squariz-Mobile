import React, { ReactElement } from "react";
import { View, StyleSheet } from "react-native";

export default function Spacer({ children }: { children?: ReactElement }) {
    return (
        <View>{children}</View>
    )
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15,
    }
});