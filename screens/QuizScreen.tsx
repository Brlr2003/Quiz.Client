import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export function QuizScreen({ route, navigation }: any) {
  const question = "What is the capital of France?";
  const choices = ["London", "Paris", "Berlin", "Madrid"];
  const correctAnswerIndex = 1;

  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleChoicePress = (index: number) => {
    setSelectedChoice(index);
    setShowResult(true);
  };

  const handleRetry = () => {
    setSelectedChoice(null);
    setShowResult(false);
  };

  const isAnswerCorrect = selectedChoice === correctAnswerIndex;

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleChoicePress(index)}
          style={[
            styles.choiceButton,
            selectedChoice === index && styles.selectedChoiceButton,
            showResult &&
              selectedChoice === correctAnswerIndex &&
              index === correctAnswerIndex &&
              styles.correctChoiceButton,
            showResult &&
              selectedChoice !== correctAnswerIndex &&
              index === selectedChoice &&
              styles.wrongChoiceButton,
            { width: "70%", alignItems: "center" },
          ]}
          disabled={showResult}>
          <Text
            style={[
              styles.choiceText,
              selectedChoice === index && styles.selectedChoiceText,
              showResult &&
                selectedChoice === correctAnswerIndex &&
                index === correctAnswerIndex &&
                styles.correctChoiceText,
              showResult &&
                selectedChoice !== correctAnswerIndex &&
                index === selectedChoice &&
                styles.wrongChoiceText,
            ]}>
            {choice}
          </Text>
        </TouchableOpacity>
      ))}
      {showResult && (
        <TouchableOpacity onPress={handleRetry} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  choiceButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 10,
  },
  choiceText: {
    fontSize: 16,
  },
  selectedChoiceButton: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  correctChoiceButton: {
    backgroundColor: "green",
    borderColor: "green",
  },
  wrongChoiceButton: {
    backgroundColor: "red",
    borderColor: "red",
  },
  selectedChoiceText: {
    color: "#FFF",
  },
  correctChoiceText: {
    color: "#FFF",
  },
  wrongChoiceText: {
    color: "#FFF",
  },
  retryButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  retryButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
