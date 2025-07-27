import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const categories = [
  'Health & Medicine',
  'Beauty',
  'Personal Care',
  'Vitamins',
  'Grocery',
  'Household',
  'Sexual Wellness',
  'Home Health Care',
  'Baby & Kids',
  'Diet & Nutrition',
];

const ProductsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Products</Text>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.overTheCounter}>
          <Text style={styles.sectionTitle}>Over the counter</Text>
        </View>
        
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.categoryText}>{category}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
        
        <View style={styles.prescription}>
          <Text style={styles.sectionTitle}>Prescription</Text>
        </View>
      </ScrollView>
      
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
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
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  overTheCounter: {
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    color: '#666',
  },
  prescription: {
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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

export default ProductsScreen; 