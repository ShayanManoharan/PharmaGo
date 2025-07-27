import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const ScheduleDeliveryScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('tomorrow');
  const [selectedTime, setSelectedTime] = useState('3:00 PM - 4:00 PM');

  const dates = [
    { id: 'today', label: 'Today Oct 19' },
    { id: 'tomorrow', label: 'Tomorrow Oct 20' },
    { id: 'monday', label: 'Monday Oct 21' },
  ];

  const timeSlots = [
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Schedule delivery</Text>
      
      <View style={styles.dateContainer}>
        {dates.map((date) => (
          <TouchableOpacity
            key={date.id}
            style={styles.dateBox}
            onPress={() => setSelectedDate(date.id)}
          >
            <Text style={styles.dateText}>{date.label}</Text>
            <View style={[
              styles.checkbox,
              selectedDate === date.id && styles.checkedBox
            ]}>
              {selectedDate === date.id && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.timeContainer}>
        {timeSlots.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={styles.timeItem}
            onPress={() => setSelectedTime(time)}
          >
            <Text style={styles.timeText}>{time}</Text>
            <View style={[
              styles.checkbox,
              selectedTime === time && styles.checkedBox
            ]}>
              {selectedTime === time && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => navigation.navigate('Drivers')}
        >
          <Text style={styles.scheduleButtonText}>Schedule</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  dateBox: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  dateText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  timeContainer: {
    flex: 1,
  },
  timeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  timeText: {
    fontSize: 16,
    color: '#333',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  scheduleButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  scheduleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF4444',
    paddingVertical: 15,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ScheduleDeliveryScreen; 