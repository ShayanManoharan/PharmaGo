import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = ({ navigation }) => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="departure..."
          value={departure}
          onChangeText={setDeparture}
        />
        <TextInput
          style={styles.input}
          placeholder="arrival..."
          value={arrival}
          onChangeText={setArrival}
        />
      </View>
      
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.0018,
            longitude: -83.0105,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: 40.0018, longitude: -83.0105 }}
            title="Buckeye Donuts"
            description="Donut shop"
          />
          <Marker
            coordinate={{ latitude: 40.0020, longitude: -83.0100 }}
            title="Chick-fil-A"
            description="Order Ahead"
          />
          <Marker
            coordinate={{ latitude: 40.0015, longitude: -83.0110 }}
            title="Shawerma Bite"
            description="Food"
          />
        </MapView>
      </View>
      
      <TouchableOpacity
        style={styles.scheduleButton}
        onPress={() => navigation.navigate('ScheduleDelivery')}
      >
        <View style={styles.gridIcon}>
          <View style={styles.gridRow}>
            <View style={styles.gridCell} />
            <View style={styles.gridCell} />
            <View style={styles.gridCell} />
          </View>
          <View style={styles.gridRow}>
            <View style={styles.gridCell} />
            <View style={styles.gridCell} />
            <View style={styles.gridCell} />
          </View>
          <View style={styles.gridRow}>
            <View style={styles.gridCell} />
            <View style={styles.gridCell} />
            <View style={styles.gridCell} />
          </View>
        </View>
        <Text style={styles.scheduleText}>Schedule Delivery</Text>
      </TouchableOpacity>
      
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    padding: 20,
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  mapContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  gridIcon: {
    marginRight: 15,
  },
  gridRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  gridCell: {
    width: 8,
    height: 8,
    backgroundColor: '#333',
    marginRight: 2,
  },
  scheduleText: {
    fontSize: 16,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#333',
  },
});

export default HomeScreen; 