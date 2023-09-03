====================Done====================
Tables:

User:
Id, Name

Departments:
Id, Name

Subjects:
Id, Name, DepartmentId

Questions:
Id, Description, SubjectId

Answers:
Id, QuestionId, AnswerText, IsCorrect

Quiz:
Id, SubjectId, UserId, StartDate, Score?,

QuizQuestion:
Id, QuizId, QuestionId, CorrectAnswer, AnswerId?

=====================Done======================

CreateDepartment (Name:string)
new Department(name);
save on database

GetAllDepartments
query on the database for departments
return departments

CreateUser (Name:string)
new User(name);
save on database

CreateSubject (Name:string, DepartmentId:number)
new Subject(departmentId, name);
save on database

GetAllSubjects
query on the database for Subjects
return Subjects

Same for questions, Answers

SetCorrectAnswer(QuestionId:number,AnswerId:number)

CreateQuiz(UserId,SubjectId) => Quiz
SetAnswer(UserId,QuizQuestionId,AnswerId)
EndQuiz(UserId,QuizId) => Score

GetCompletedQuiz(UserId,QuizId) => Quiz with answers
