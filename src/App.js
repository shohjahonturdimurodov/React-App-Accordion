import React, {useState} from 'react'
// import questions from './Data'
import data from './Data'
import SingleQuestion from './Question'

export default function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question}/>
            })
          }
        </section>
      </div>
    </main>
  )
}
