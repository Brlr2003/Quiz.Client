import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "../types/Navigation";

const windowWidth = Dimensions.get("window").width;
const buttonWidth = windowWidth - 40;

const quizQuestions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswerIndex: 1,
  },
  {
    question: "Which planet is closest to the sun?",
    choices: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswerIndex: 3,
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["O", "H", "W", "H2O"],
    correctAnswerIndex: 3,
  },
  {
    question: "In which country is the Great Wall located?",
    choices: ["China", "Japan", "India", "South Korea"],
    correctAnswerIndex: 0,
  },
  {
    question: "Which animal is known as the 'king of the jungle'?",
    choices: ["Lion", "Tiger", "Elephant", "Giraffe"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Gd", "Au", "Ag", "Ge"],
    correctAnswerIndex: 1,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "George Orwell",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the national flower of Japan?",
    choices: ["Cherry Blossom", "Rose", "Tulip", "Sunflower"],
    correctAnswerIndex: 0,
  },
  // Add more quiz questions here
];

type Props = NativeStackScreenProps<RootNavigatorParamList, "Quiz">;

export function QuizScreen({ navigation, route }: Props) {
  const { quizId, quizName } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedChoices, setSelectedChoices] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [selectedQuestions, setSelectedQuestions] = useState<boolean[]>(
    new Array(quizQuestions.length).fill(false)
  );

  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isAnswerCorrect =
    selectedChoices[currentQuestionIndex] ===
    currentQuestion.correctAnswerIndex;

  const handleChoicePress = (index: number) => {
    const updatedChoices = [...selectedChoices];
    updatedChoices[currentQuestionIndex] = index;
    setSelectedChoices(updatedChoices);
  };

  const handleNextQuestion = () => {
    if (
      selectedChoices[currentQuestionIndex] ===
      currentQuestion.correctAnswerIndex
    ) {
      const updatedSelectedQuestions = [...selectedQuestions];
      updatedSelectedQuestions[currentQuestionIndex] = true;
      setSelectedQuestions(updatedSelectedQuestions);
    }
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex !== 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const newScore = selectedQuestions.reduce((acc, value) => {
      if (value === true) {
        return acc + 1;
      }
      return acc;
    }, 0);
    if (
      selectedChoices[currentQuestionIndex] ===
      currentQuestion.correctAnswerIndex
    ) {
      navigation.navigate("Score", { score: newScore + 1, quizId: 1 });
    } else {
      navigation.navigate("Score", { score: newScore, quizId: 1 });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Quiz Name: {quizName}</Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleChoicePress(index)}
          style={[
            styles.choiceButton,
            selectedChoices[currentQuestionIndex] !== null &&
              selectedChoices[currentQuestionIndex] === index &&
              styles.selectedChoiceButton,
          ]}>
          <Text
            style={[
              styles.choiceText,
              selectedChoices[currentQuestionIndex] !== null &&
                selectedChoices[currentQuestionIndex] === index &&
                styles.selectedChoiceText,
            ]}>
            {choice}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={handlePreviousQuestion}
          style={[styles.nextButton, { width: buttonWidth / 2 }]}>
          <Text style={styles.nextButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            currentQuestionIndex === quizQuestions.length - 1
              ? handleSubmit
              : handleNextQuestion
          }
          style={[
            styles.nextButton,
            {
              width: buttonWidth / 2,
            },
          ]}>
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex === quizQuestions.length - 1
              ? "Submit"
              : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  choiceButton: {
    alignItems: "center",
    width: "50%",
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
    backgroundColor: "blue",
    borderColor: "blue",
  },
  selectedChoiceText: {
    color: "#FFF",
  },

  correctChoiceButton: {
    backgroundColor: "green",
    borderColor: "green",
  },
  wrongChoiceButton: {
    backgroundColor: "red",
    borderColor: "red",
  },
  nextButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    margin: 5,
    marginTop: 20,
  },

  nextButtonText: {
    color: "#FFF",
    fontSize: 16,
  },

  submitButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
