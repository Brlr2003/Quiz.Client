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
