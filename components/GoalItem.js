import { StyleSheet, Text, View } from "react-native";  

function GoalItem(props) {
    // return the JSX
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{props.text}</Text>
        </View>
    );
}

export default GoalItem;

// add styles
const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "#cccccc",
        padding: 8,
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalItemText: {
        color: "#ffffff",
    },
});
