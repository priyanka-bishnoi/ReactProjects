import quizLogo from "../assets/quiz-Logo.png";
export default function Header() {

    return (
        <div>
            <header>
            <img src={quizLogo} alt ="Quiz Logo">
            </img>
            <h1> REACT QUIZ</h1>
            </header>
        </div>
    );

}