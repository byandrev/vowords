"use client"

import { useState } from "react"

import { questions as initialQuestions } from "@/data/questions"

import Question from "./Question"
import ProgressBar from "./ProgressBar";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(initialQuestions)
  const [responses, setResponses] = useState([])

  const handleResponse = (id, response) => {
    setResponses(prev => {
      return [...prev, { id, response }]
    })

    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev+1)
    }
  }

  return (
    <div className="w-full">
      <ProgressBar current={currentQuestion} limit={questions.length} />

      {currentQuestion < questions.length
        ?
       <Question
         id={questions[currentQuestion].id}
         key={questions[currentQuestion].id}
         title={questions[currentQuestion].title}
         options={questions[currentQuestion].options}
         handleResponse={handleResponse}
       />
        : <span>End</span>
      }


    </div>
  )
}

export default Quiz
