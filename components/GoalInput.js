import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";  

function GoalInput(props) {
    // capture the text entered
    const [enteredGoalText, setEnteredGoalText] = useState("");
    
    // handle the text input change
   function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    // add the goal
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    // return the JSX
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

// add styles
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "74%",
        marginRight: 8,
        padding: 8,
    },
});