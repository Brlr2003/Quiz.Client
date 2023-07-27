export type RootNavigatorParamList = {
  Home: undefined;
  Department: {
    departmentId: number;
    departmentName: string;
  };
  Quiz: {
    quizId: number;
    quizeName: string;
  };
  Score: {
    quizeId: number;
    score: number;
  };
  Result: {
    quizeId: number;
  };
};
