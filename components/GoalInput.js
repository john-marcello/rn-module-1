import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";  

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
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput} 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
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
        padding: 16,
        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        color: "#120438",
        width: "100%",
        padding: 16,
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