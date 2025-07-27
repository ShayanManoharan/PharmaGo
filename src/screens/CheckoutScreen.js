import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CheckoutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      
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
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>📍</Text>
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>Ohio Union</Text>
            <Text style={styles.detailSubtitle}>1739 N High St Columbus, OH</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>👤</Text>
          <View style={styles.detailContent}>
            <Text style={styles.detailText}>Delivery Instructions: Meet at door</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>📅</Text>
          <View style={styles.detailContent}>
            <Text style={styles.detailText}>Tomorrow Oct 20</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
      </View>
      
      <View style={styles.orderSummary}>
        <Text style={styles.summaryTitle}>Order summary</Text>
        
        <View style={styles.orderItem}>
          <View style={styles.cvsLogo}>
            <Text style={styles.cvsText}>CVS</Text>
          </View>
          <View style={styles.orderContent}>
            <Text style={styles.orderTitle}>CVS</Text>
            <Text style={styles.orderSubtitle}>1 item</Text>
          </View>
          <Text style={styles.arrow}>⌄</Text>
        </View>
        
        <View style={styles.giftOption}>
          <Text style={styles.detailIcon}>🎁</Text>
          <View style={styles.detailContent}>
            <Text style={styles.detailText}>Send as a gift</Text>
            <Text style={styles.detailSubtitle}>And customize a digital card</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('OrderConfirmation')}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  mapContainer: {
    height: 200,
    marginBottom: 20,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  detailIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  detailContent: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
  detailSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  arrow: {
    fontSize: 18,
    color: '#666',
  },
  orderSummary: {
    flex: 1,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cvsLogo: {
    width: 40,
    height: 40,
    backgroundColor: '#FF0000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cvsText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orderContent: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  giftOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  submitButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CheckoutScreen;
