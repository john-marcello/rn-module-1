import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";  

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
        <Modal visible={props.visible } animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="red" />
                    </View>
                </View> 
            </View> 
        </Modal>
    );
}

export default GoalInput;

// add styles
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
});