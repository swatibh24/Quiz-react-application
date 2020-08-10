import React ,{useState,useEffect} from 'react';
import {Questionaire} from './components'
import {data} from './data/data.js';
import './App.css';

function App() {
    const [questions,setQuestions]=useState([]);
    const [currentIndex,setCurrentIndex]=useState(0);
    const [quesNo,setQuesNo]=useState(1);
    const [score,setScore]=useState(0);
    const [showAnswers,setShowAnswers]=useState(false);
    const copyQuestion = Array.from(data);
    const randomGameQues = Array.from(Array(3), () => copyQuestion.splice(Math.floor(copyQuestion.length * Math.random()), 1)[0]);
    useState(()=>{
        const questions=randomGameQues.map((question)=>({
                    ...question,
                    answers:[
                        question.correct_answer,
                        ...question.incorrect_answers,
                    ].sort(()=>Math.random()-0.5),
                }))
                setQuestions(questions);

    },[]);

   const handleAnswer =(answer)=>{
       if(!showAnswers) {
           if (answer === questions[currentIndex].correct_answer) {
               setScore(score + 1);
           }
       }
       setShowAnswers(true);
    };
   const nextQuestion=()=>{
       setCurrentIndex(currentIndex+1);
       setQuesNo(quesNo+1);

       setShowAnswers(false);
   }
    const playAgain =()=>{
       setScore(0);
       setCurrentIndex(0);
       setQuestions([]);
       setShowAnswers(false);
       setQuesNo(1);
        const questions=randomGameQues.map((question)=>({
            ...question,
            answers:[
                question.correct_answer,
                ...question.incorrect_answers,
            ].sort(()=>Math.random()-0.5),
        }))
        setQuestions(questions);
    };
  return questions.length > 0  ? (
      <div className="container">
          {currentIndex>=questions.length?(
                  <div>
                      <h1 className="game-ended">Game Ended !!!! Your Score is {score}</h1>
                      <button className="start-again" onClick={playAgain}>Start Again</button>
                  </div>
          ): (
            <div>
                <h1 className="start-quiz"> Let's Play Quiz!!!</h1>
                <div className="score">
                      Score:<label className="score-value">{score}</label>
                      Turn Counter:<label className="score-value">{quesNo}</label>
                </div>
              <Questionaire data ={questions[currentIndex]}
             showAnswers={showAnswers}
             handleAnswer={handleAnswer}
             nextQuestion={nextQuestion}/>
           </div>
          )}
      </div>
  ) :(<h2 className="loading">Loading...</h2>);
}

export default App;
