import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  Platform,
}
from 'react-native'
import { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TaskContext } from '../../context/TaskContext';

function NewTaskScreen({navigation}){
  const {addTask} = useContext(TaskContext)
  const [courseTitle, setCourseTitle] = useState("")
  const [courseDesc, setCourseDesc] = useState("")
  const [courseCategory, setCourseCategory] = useState("")
  const [courseDueDate, setCourseDueDate] = useState("")
  const [showPicker, setShowPicker] = useState(false)

  // Priority implementation
  const [priority, setPriority] = useState("Medium")

  const options = ["Low", "Medium", "High"]

  const handleCreateTask = () => {
     if (!courseTitle.trim()) return;
     if (!courseCategory.trim()) return;
    addTask({
      id: Date.now(),
      title: courseTitle,
      description: courseDesc,
      category: courseCategory,
      dueDate: courseDueDate,
      priority,
      progress: 0,
    })
    navigation.goBack()
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerContainer}>
        <Pressable
        onPress={() => navigation.goBack()}
        >
      <Image 
      source={require("../../assets/left-arrow.png")}
      style={{width: 25, height: 25,}}
      resizeMode="contain"
      />
      </Pressable>
      <Text style={styles.headerText}>New Task</Text>
      </View>

      <Text style={styles.label}>Task Title</Text>
      {/* Course input */}
      <TextInput 
        placeholder='e.g, Calculus Assignment'
        value={courseTitle}
        style={styles.courseInput}
        onChangeText={setCourseTitle}
        />

        <Text style={styles.label}>Description</Text>
      {/* Course Desc input */}
      <TextInput 
        placeholder='What need to be done?'
        value={courseDesc}
        style={styles.courseInput2}
        onChangeText={setCourseDesc}
        multiline={true}
        textAlignVertical="top"
        /> 

        <View style={styles.input3Container}>

          {/* Category input */}
          <View style={styles.block}>
            <Text style={styles.label}>Category</Text>
            <TextInput 
            placeholder='e.g Mathematics'
            value={courseCategory}
            onChangeText={setCourseCategory}
            style={styles.courseInput3}
            />
          </View>

          {/* Date input */}
          <View style={styles.block}>
          <Text style={styles.label}>Due Date</Text>
          <Pressable
          onPress={() => setShowPicker(true)}>
          <View pointerEvents='none'>
          <TextInput 
          placeholder="mm/dd/yyyy"
          value={courseDueDate}
          editable={false}
          style={styles.courseInput3}
          />
          </View>
          </Pressable>
          </View>
          </View>

          {showPicker &&(
            <View style={Platform.OS === "ios" ? styles.iosPickerWrapper : null}>
              {Platform.OS === "ios" && (
                <Pressable onPress={() => setShowPicker(false)}
                style={styles.doneButton}
                >
                  <Text style={styles.doneText}>Done</Text>
                </Pressable>
              )}

            <DateTimePicker 
            value={new Date()}
            mode="date"
            display= {Platform.OS === "ios" ? "inline" : "calendar"}
            onChange={(event, selectedDate) => {
              if (Platform.OS === "android"){
                setShowPicker(false)
              }

              if (selectedDate) {
                const formatted = selectedDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                });
                setCourseDueDate(formatted)
              }
            }}
            /> 
            </View> 
          )}         
      
      {/* Priority Option */}
      <Text style={styles.label}>Priority</Text>
      <View style={styles.priorityContainer}>
        {options.map((item) => {
          const isActive = priority === item;

          return (
            <Pressable 
            key={item}
            onPress={() => setPriority(item)}
            style={[
              styles.priorityButton, isActive && styles.activeButton
            ]}
            >
              <Text style={[
                styles.priorityButtonText,
                isActive && styles.activeText
                ]}
                >{item}</Text>
            </Pressable>
          )
        })}
      </View>

      {/* Create Task Button */}
      <View style={styles.createTaskButtonContainer}>
          <Pressable
        onPress={handleCreateTask}
        style={({ pressed }) => [
                    styles.createTaskButton,
                    {
                    opacity: pressed ? 0.85 : 1,
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    },
                ]}
        >
          <Image
          source={require("../../assets/plus.png")} 
          style={{width: 30, height: 30, resizeMode: "contain"}}
          />
          <Text style={styles.createTaskButtonText}>Create Task</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  )
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20
  },
  headerText: {
    color: "#0e1933",
    fontSize: 18,
    fontFamily: "HeaderText",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 24,
    marginRight: 150
  },
  label: {
    fontSize: 16,
    fontFamily: "HeaderText",
    color: "#0e1933"
  },
  courseInput: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    borderColor: "rgba(110, 108, 108, 0.35)",
    backgroundColor: "#f6f8fa",
    marginBottom: 20,
    width: 365,
    height: 50,
    fontFamily: "NoteText"
  },
  courseInput2: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    borderColor: "rgba(110, 108, 108, 0.35)",
    backgroundColor: "#f6f8fa",
    marginBottom: 20,
    width: 365,
    height: 110,
    fontFamily: "NoteText"
  },
  input3Container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20
  },
  courseInput3: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    borderColor: "rgba(110, 108, 108, 0.35)",
    backgroundColor: "#f6f8fa",
    marginBottom: 20,
    width: 170,
    height: 50,
    fontFamily: "NoteText"
  },
  priorityContainer: {
    flexDirection: "row",
    gap: 10,
  },
  priorityButton: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#E3E6EA",
    backgroundColor: "#f6f8fa",
    width: 112,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "InputText"
  },
  priorityButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0e1933",
    fontFamily: "InputText"
  },
  activeButton: {
    backgroundColor: "#155DFC",
    borderColor: "#1E5BFF",
    
  },
  activeText: {
    color: "#FFF",
    fontFamily: "InputText"
  },
  createTaskButtonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  createTaskButton: {
     flexDirection: "row",
     gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 55,
    backgroundColor: "#155DFC",
    borderColor: "#1E5BFF"
  },
  createTaskButtonText: {
    fontSize: 18,
    fontFamily: "HeaderText",
    color: "#FFFFFF"
  },
iosPickerWrapper: {
    backgroundColor: "#f6f8fa",
    borderRadius: 15,
    marginTop: -10, // Pulls it slightly closer to the input
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(110, 108, 108, 0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doneButton: {
    alignSelf: 'flex-end',
    padding: 8,
    marginBottom: 5,
  },
  doneText: {
    color: "#155DFC",
    fontWeight: "bold",
    fontSize: 16,
  },

}) 

export default NewTaskScreen