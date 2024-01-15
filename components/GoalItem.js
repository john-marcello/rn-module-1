import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
    // return the JSX
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#210644'}} 
                onPress={props.onDeleteItem.bind(this, props.id)} 
                style={({pressed}) => pressed && styles.pressedItem } 
            >
                <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

// add styles
const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "#cccccc",
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalItemText: {
        color: "#ffffff",
        padding: 8,
    },
});