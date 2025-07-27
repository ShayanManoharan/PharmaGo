import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';

const MessagingScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messaging</Text>
      
      <View style={styles.chatContainer}>
        <Text style={styles.dateText}>Yesterday</Text>
        
        <View style={styles.messageContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>D</Text>
          </View>
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>Hi there!</Text>
          </View>
        </View>
        
        <View style={styles.myMessageContainer}>
          <View style={styles.myMessageBubble}>
            <Text style={styles.myMessageText}>Hello Dave!</Text>
          </View>
        </View>
        
        <View style={styles.myMessageContainer}>
          <View style={styles.myMessageBubble}>
            <Text style={styles.myMessageText}>can you pick up my meds tommorrow</Text>
          </View>
        </View>
        
        <View style={styles.messageContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>D</Text>
          </View>
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>Sure, please send me the details of the medicine and i'll grab them for you!</Text>
          </View>
        </View>
        
        <View style={styles.qrContainer}>
          <View style={styles.qrCode}>
            <Text style={styles.qrText}>QR Code</Text>
          </View>
          <Text style={styles.qrLabel}>My Prescription</Text>
          <Text style={styles.qrDate}>10/19/24</Text>
        </View>
      </View>
      
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputIcon}>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputIcon}>😊</Text>
        </TouchableOpacity>
        
        <View style={styles.textInput}>
          <Text style={styles.inputIcon}>Tt</Text>
        </View>
        
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputIcon}>🎤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 20,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  dateText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageBubble: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 15,
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  myMessageContainer: {
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  myMessageBubble: {
    backgroundColor: '#8B5CF6',
    padding: 12,
    borderRadius: 15,
    maxWidth: '70%',
  },
  myMessageText: {
    fontSize: 16,
    color: '#fff',
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  qrCode: {
    width: 120,
    height: 120,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  qrText: {
    color: '#fff',
    fontSize: 12,
  },
  qrLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qrDate: {
    color: '#fff',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  inputButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  inputIcon: {
    fontSize: 18,
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default MessagingScreen; 