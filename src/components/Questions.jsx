import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
const Questions = ({
  questionText,
  answers,
  onSelectAnswer,
  answerState,
  selectedAnswer,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Questions;
