import {
    View,
    Text,
    Modal,
    Image,
    StyleSheet,
    Pressable,
    FlatList,
    TextInput
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState, useMemo} from 'react'

function StudySchedule(){
    // example data
    const [selectedDate, setSelectedDate] = useState("2026-02-09")
    const [schedules, setSchedules] = useState([
        {
            id: "1",
            title: "Mathematics Lecture",
            location: "Hall B",
            date: "2026-02-09",
            startTime: "09:00",
            endTime: "10:30",
            sessionType: "LECTURE",
        },
        {
            id: "2",
            title: "Physics Lab",
            location: "Lab 402",
            date: "2026-02-09",
            startTime: "11:30",
            endTime: "13:00",
            sessionType: "LAB",
        }
    ])

    const [showCreateModal, setShowCreateModal] = useState(false)
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")

    const days = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date("2026-02-09")
            date.setDate(date.getDate() + i)
            return {
                label: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
                day: date.getDate(),
                dateKey: date.toISOString().split("T") [0],
            }
        })
    }, [])

    const dailySchedules = schedules
        .filter(item => item.date === selectedDate)
        .sort((a,b) => a.startTime.localeCompare(b.startTime))

    return (
        <SafeAreaView style={styles.container}
        edges={["top", "left", "right", "bottom"]}
        >
            <StatusBar style="dark" />

            
                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Study Schedule</Text>
                    <Pressable
                    onPress={() => setShowCreateModal(true)}
                    style={({ pressed }) => [
                    styles.buttonBG,
                    {
                    opacity: pressed ? 0.85 : 1,
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    },
                ]}
                    >
                        <Image source={require("../../assets/black-plus.png")}
                        style={{width: 20, height: 20,}}
                        resizeMode='contain'
                        />
                    </Pressable>
                </View>

                {/* DAYS */}
                

        </SafeAreaView>
    )

}

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
        paddingHorizontal: 20,
        paddingTop: 16
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#0F172A"
    },
    buttonBG: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8F0FF",
        width: 40,
        height: 40,
        borderRadius: 20
    }
})

export default StudySchedule