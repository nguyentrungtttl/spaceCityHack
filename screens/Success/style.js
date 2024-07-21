import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function Success() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Failure');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <LinearGradient
        colors={['#A064AC', '#F5849A']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.resultBox}>
            <Text style={styles.title}>Your fit with <Text style={styles.boldText}>Tree planting in Ninh Binh</Text> is:</Text>
            <View style={styles.progressBar}>
              <View style={styles.progress} />
            </View>
            <Text style={styles.percentage}>80%</Text>
            <Text style={styles.congratulations}>Congratulations!</Text>
            <Text style={styles.link}>Let’s see what’s the roadmap for you!</Text>
          </View>
          <Text style={styles.tapText}>Tap anywhere to continue</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultBox: {
    width: width * 0.8,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  progressBar: {
    width: '100%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ccc',
    overflow: 'hidden',
    marginBottom: 20,
  },
  progress: {
    width: '80%',
    height: '100%',
    backgroundColor: '#A064AC',
  },
  percentage: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  congratulations: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  tapText: {
    fontSize: 16,
    color: '#fff',
  },
});
