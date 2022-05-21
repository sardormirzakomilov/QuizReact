import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz'
import withRoutes from '../../hoc/withRoutes/withRoutes'

class Quiz extends Component {
    state = {
        results: {}, // {[id]: 'success', 'error'}
        isFinished: false,
        activeQuestion: 0,
        activeState: null, // {[id]: 'success', 'error'}
        quiz: [
            {
                question: 'Toshkentdan oldin qaysi shahar poytaxt bo`lgan?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    { text: 'Samarqand', id: 1 },
                    { text: 'Termiz', id: 2 },
                    { text: 'Navoiy', id: 3 },
                    { text: 'Shaxrisabz', id: 4 },
                ]
            },
            {
                question: 'Sizning yoshingiz nechchi oraliqda?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    { text: '10-20', id: 1 },
                    { text: '20-50', id: 2 },
                    { text: '50-80', id: 3 },
                    { text: '80-100', id: 4 },
                ]
            }
        ],
    }

    onAnswerClick = (answerId) => {
        if (this.state.activeState) {
            const key = Object.keys(this.state.activeState)[0]  // index kalitini oldik

            if (this.state.activeState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            // Demak javob to'g'ri
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                activeState: { [answerId]: 'success' },
                results
            })

            const timeout = window.setTimeout(() => {
                // Keyingi savolga o'tish

                if (this.isFinished()) {
                    this.setState({
                        isFinished: true
                    })
                }

                this.setState({
                    activeState: null,
                    activeQuestion: this.state.activeQuestion + 1,
                })

                window.clearTimeout(timeout)
            }, 1000)
        } else {
            //Demak javob xato
            results[question.id] = 'error' // {[1]: 'error'}

            this.setState({
                activeState: { [answerId]: 'error' },
                results
            })
        }
    }

    componentDidMount() {
        // console.log('Params id:', this.props.params.match.id);
        // console.log(useParams());
        // console.log('Params id:', this.props.params);
    }

    retryHandler = () => {
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            activeState: null,
            results: {}
        })
    }

    isFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>

                    <h1>Quiz list</h1>

                    {this.state.isFinished
                        ? <FinishedQuiz onRetry={this.retryHandler}
                            results={this.state.results}
                            quiz={this.state.quiz}
                        />
                        : <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onClick={this.onAnswerClick}
                            quizLength={this.state.quiz.length}
                            activeQuestion={this.state.activeQuestion + 1}
                            state={this.state.activeState}
                        />
                    }

                </div>
            </div>
        )
    }
}

export default withRoutes(Quiz)
