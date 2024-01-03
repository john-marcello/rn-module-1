import { useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function App() {
    // capture the text entered
    const [enteredGoalText, setEnteredGoalText] = useState("");
    
    // store the goals in an array
    const [courseGoals, setCourseGoals] = useState([]); // [
    
    // handle the text input change
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    // handle the add goal button press
    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
    }

    // return the JSX
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList 
                    // pass the data
                    data={courseGoals} 
                    // render the items 
                    renderItem={(itemData) => {
                         return (
                            <View style={styles.goalItem}>
                                <Text style={styles.goalItemText}>{itemData.item.text}</Text>
                            </View>
                        );
                    }}
                    // use keyExtractor to set a unique key for each item
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceHorizontal={true}
                    alwaysBounceVertical={false} />
                {/* {courseGoals.map((goal) => ())} */}
            </View>
        </View>
    );
}

// add styles
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
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
    goalsContainer: {
        flex: 5,
    },
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
