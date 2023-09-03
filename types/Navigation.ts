export interface Department {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Subject {
  id: number;
  name: string;
  departmentId: number;
}

export interface Question {
  id: number;
  description: string;
  subjectId: number;
}

export interface Answer {
  id: number;
  questionId: number;
  answerText: string;
  isCorrect: boolean;
}

export interface Quiz {
  id: number;
  subjectId: number;
  userId: number;
  startDate: Date;
  score?: number | null;
}

export interface QuizQuestion {
  id: number;
  quizId: number;
  questionId: number;
  correctAnswer: string;
  answerId?: number | null;
}

export type RootNavigatorParamList = {
  Home: undefined;
  Department: {
    departmentId: number;
    departmentName: string;
  };
  Quiz: {
    quizId: number;
    quizName: string;
  };
  Score: {
    quizId: number;
    score: number;
  };
  Result: {
    quizId: number;
  };
};
