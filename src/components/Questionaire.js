import React from 'react';
import './Questionaire.css';
const Button=({answer,className})=>(
    <button>{answer}</button>
);
const Questionaire = ({
   handleAnswer,
   showAnswers,
   nextQuestion,
   data:{question,correct_answer,answers},
  })=>{
return(
    <div>
        <div className="questions">
            <h2 dangerouslySetInnerHTML={{__html:question}}/>
        </div>
        <div className="answers">
            {answers.map((answer,idx)=>{
                const textColor=showAnswers?answer===correct_answer?{color : 'green'}
                    :{color : 'red'}
                    :{color : 'black'};
                return(
                <button key={idx} className="answer-button"
                  style={textColor}onClick={()=>handleAnswer(answer)}
                    dangerouslySetInnerHTML={{__html:answer}}>
               </button>
                )})}
        </div>
        {showAnswers && (<button className="next-question"
        onClick={nextQuestion}>Next Question</button>)}
    </div>
);
};
export default Questionaire;
