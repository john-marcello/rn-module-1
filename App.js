import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    // store the goals in an array
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    // handle opening the modal
    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    // handle closing the modal
    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    // handle the add goal button press
    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        endAddGoalHandler();
    }

    // handle the delete goal button press
    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    // return the JSX
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color="#c099f3"
                    onPress={startAddGoalHandler}
                />
                <GoalInput
                    visible={modalIsVisible}
                    onAddGoal={addGoalHandler}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        // pass the data
                        data={courseGoals}
                        // render the items
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                        // use keyExtractor to set a unique key for each item
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceHorizontal={false}
                        alwaysBounceVertical={false}
                    />
                    {/* {courseGoals.map((goal) => ())} */}
                </View>
            </View>
        </>
    );
}

// add styles
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "#1e085a",
    },
    goalsContainer: {
        flex: 5,
    },
});
