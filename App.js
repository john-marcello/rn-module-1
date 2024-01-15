import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    // store the goals in an array
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    // handle the add goal button press
    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    // handle the delete goal button press
    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    // return the JSX
    return (
        <View style={styles.appContainer}>
            <Button 
                title="Add New Goal"
                color="#5e0acc" 
                onPress={startAddGoalHandler}
                />
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
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
                    alwaysBounceHorizontal={true}
                    alwaysBounceVertical={false}
                />
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
    goalsContainer: {
        flex: 5,
    },
});
