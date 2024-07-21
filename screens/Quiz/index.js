import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style.js';
import questions from './questions.js';

const { width } = Dimensions.get('window');

const Quiz = ({navigation}) => {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const flatListRef = useRef(null);

  const handleOptionPress = (questionIndex, optionIndex) => {
    setSelectedOptions({ ...selectedOptions, [questionIndex]: optionIndex });
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        setCurrentIndex(currentIndex + 1);
      } else {
        navigation.navigate('Auth'); // Navigate to homepage after the last question
      }
    }, 500); // Adjust this delay as needed
  };


  const renderQuestion = ({ item, index }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{`Question ${index + 1}`}</Text>
      <Text style={styles.subtitle}>{item.question}</Text>
      <View style={styles.optionsContainer}>
        {item.options.map((option, idx) => {
          const isSelected = selectedOptions[index] === idx;
          return (
            <TouchableOpacity
              key={idx}
              style={[
                styles.option,
                isSelected && styles.optionSelected,
              ]}
              onPress={() => handleOptionPress(index, idx)}
            >
              <Ionicons name={option.icon} size={24} color={isSelected ? '#FFF' : '#8A2BE2'} />
              <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>{option.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  const onScrollEnd = (e) => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffset / width);
    setCurrentIndex(newIndex);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        ref={flatListRef}
        data={questions}
        renderItem={renderQuestion}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
      />
      <View style={styles.pagination}>
        {questions.map((_, idx) => (
          <View key={idx} style={idx === currentIndex ? styles.dotActive : styles.dot} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
