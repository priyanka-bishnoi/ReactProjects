import {useState} from "react";
import Questions from "./questions.js";
import quizCompleteLogo from "../assets/quiz-complete.png";
export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const selectedQuestion = userAnswers.length;

    const isQuizComplete = selectedQuestion === Questions.length;

    function handleSelected(selectedAnswer) {

        setUserAnswers((prevUserAnswers) => {
            return ([...prevUserAnswers, selectedAnswer]);

        });

        
    }

    if(isQuizComplete) {

        return (
            <div id="summary">
               
                <img src={quizCompleteLogo} />
                <h2>Quiz Completed</h2>
            </div>
        );

    }

    const shuffledAnswers = [...Questions[selectedQuestion].answers];
    shuffledAnswers.sort(() => Math.random() -0.5);

    console.log(userAnswers);
    console.log(shuffledAnswers);
    console.log(selectedQuestion);
    return (
    <div id="quiz" >
    <div id="question">
        
       <h2>{Questions[selectedQuestion].text}</h2>
       <ul id="answers">
        {shuffledAnswers.map((answer) => {

            return (
                <li  className="answer" key={answer}>
                    <button onClick={() => handleSelected(answer)}>{answer}</button>
                </li>
            );

        } )}
        

    
       </ul>
       
    </div>
    </div>);
}
