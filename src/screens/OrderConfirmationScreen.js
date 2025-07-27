import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const OrderConfirmationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Order has been placed!</Text>
      
      <View style={styles.trackContainer}>
        <Text style={styles.trackTitle}>Track</Text>
        
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
              pinColor="red"
            />
          </MapView>
        </View>
        
        <Text style={styles.statusText}>On the Way!</Text>
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
  trackContainer: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapContainer: {
    flex: 1,
    marginBottom: 20,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  statusText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default OrderConfirmationScreen; 