import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Platform,
    Image,
    ScrollView,
    FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ProgressBar from '../../components/ProgressBar'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import TaskCard from '../../components/TaskCard'




function HomeScreen({navigation}){
    const { tasks } = useContext(TaskContext)

    return(
        <SafeAreaView style={styles.container} 
        edges={['top', 'left', 'right', 'bottom']}
        >
            <StatusBar style="dark" />

            <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Hi, User</Text>
            </View>

            <View style={styles.dashboardTextContainer}>
                <Text style={styles.dashboardText}>Dashboard</Text>
                <Pressable
                // onPress={}
                style={styles.pressableSearchContainer}
                >
                    <Image 
                    source={require("../../assets/search.png")}
                    style={{width: 25, height: 25, resizeMode: "contain", 
                        justifyContent: "center",
                        alignSelf: "center"
                    }}
                    />
                </Pressable>

                <Pressable
                // onPress={}
                style={styles.pressableNotifyContainer}
                >
                    <Image 
                    source={require("../../assets/notification.png")}
                    style={{width: 25, height: 25, resizeMode: "contain", 
                        justifyContent: "center",
                        alignSelf: "center"
                    }}
                    />
                </Pressable>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
            {/* Progress Bar Tracker Container */}
            <View>
                <ProgressBar percent={65}/>
            </View>
            
            <View style={styles.taskSection}>
                {/* Add Task Button */}
            <Pressable
                onPress={() => navigation.navigate("NewTask")}
                style={({ pressed }) => [
                    styles.addTaskButton,
                    {
                    opacity: pressed ? 0.85 : 1,
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    },
                ]}
                >
                <Image
                    source={require('../../assets/add.png')}
                    style={{ width: 45, height: 45, resizeMode: 'contain' }}
                />
                <Text style={styles.addTaskText}>Add  Task</Text>
                </Pressable>

                {/* Q&A Section */}
            <Pressable 
             onPress={() => {}}
                style={({ pressed }) => [
                    styles.QAButton,
                    {
                    opacity: pressed ? 0.85 : 1,
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    },
                ]}
                >   
                    <Image 
                    source={require("../../assets/Q&A.png")}
                    style={{width: 35, height: 35, resizeMode: "contain"}}
                    />
                <Text style={styles.QAText}>Q&A Section</Text>  
            </Pressable>
            </View>

            {/* Tasks Section */}
            <View style={styles.upcomingTaskContainer}>
                <Text style={styles.upcomingTaskText}>Upcoming Tasks</Text>

                <FlatList 
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TaskCard task={item} />}
                ListEmptyComponent={
                    <Text style={styles.empty}>No tasks yet</Text>
                }
                scrollEnabled={false}
                />
            </View>
            </ScrollView>

        </SafeAreaView>
    )
}

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
        paddingHorizontal: 20,
        paddingTop: 20
    },
    welcomeTextContainer: {
        justifyContent: "flex-start",
        
    },
    welcomeText: {
        fontSize: 15,
        fontFamily: "NoteText",
        paddingHorizontal: 10
    },
    dashboardTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop:  5
    },
    dashboardText:  {
        fontSize: 25,
        fontFamily: "HeaderText",
        fontWeight: "bold",
        paddingHorizontal: 10,
        color: "#030712"
    },
    pressableSearchContainer: {
        flexDirection: 'row',
        marginLeft: 150,
        backgroundColor: "#f4f3fd",
        borderRadius: 40,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    pressableNotifyContainer: {
        flexDirection: 'row',
        backgroundColor: "#f4f3fd",
        borderRadius: 40,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    taskSection: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 40,
        alignItems: "center"
    },
    addTaskButton: {
        backgroundColor: "#0e1933",
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 120,
        borderRadius: 20,
        borderColor: "#030712",
        marginRight: 20
    },
    addTaskText: {
        fontSize: 14,
        color: "#FFFFFF",
        fontFamily: "HeaderText",
        marginTop: 10
    },
    QAButton: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 120,
        borderRadius: 20,
        borderColor: "#f0f0f0",
        // ios shadow
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 10,
        // Android shadow
        elevation: 3
    },
    QAText: {
        fontSize: 14,
        color: "#030712",
        fontFamily: "HeaderText",
        marginTop: 10
    },
    upcomingTaskContainer: {
        marginTop: 30
    },
    upcomingTaskText: {
        fontSize: 16,
        fontFamily: "HeaderText",
        color: "#030712",
        paddingHorizontal: 10
    },
    empty: {
    textAlign: "center",
    color: "#999",
    marginTop: 40,
    fontSize: 16
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#1E5BFF",
    justifyContent: "center",
    alignItems: "center",
  },
  fabText: {
    color: "#fff",
    fontSize: 28,
  },
})

export default HomeScreen