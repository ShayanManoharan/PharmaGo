import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const drivers = [
  { name: 'Dave', status: 'New Driver', avatar: 'D' },
  { name: 'Nico', status: 'oct 20', avatar: 'N' },
  { name: 'Sarah', status: 'june 12', avatar: 'S' },
];

const DriversScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Drivers</Text>
      
      <View style={styles.driversList}>
        {drivers.map((driver, index) => (
          <View key={index} style={styles.driverCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{driver.avatar}</Text>
            </View>
            
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>{driver.name}</Text>
              <Text style={styles.driverStatus}>{driver.status}</Text>
            </View>
            
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigation.navigate('Messaging')}
              >
                <Text style={styles.actionIcon}>💬</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>📞</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  driversList: {
    flex: 1,
  },
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  driverStatus: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 15,
  },
  actionIcon: {
    fontSize: 20,
  },
});

export default DriversScreen; 