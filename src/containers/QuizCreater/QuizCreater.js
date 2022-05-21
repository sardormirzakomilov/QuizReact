import React from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './QuizCreater.module.css'
import { useState } from 'react'
import { createControl, isValid, validForm } from '../../form/formFramework'  // object qaytaradi
import Input from '../../components/UI/Input/Input'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Select from '../../components/UI/Select/Select'

function createOptionControl(number) {
    return createControl({
        label: `Variant ${number}`,
        errorMessage: 'Bu yer bo`sh bo`lishi mumkin emas',
        id: number
    }, { required: true })
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Savol kiriting',
            errorMessage: 'Savol bo`sh bo`lishi mumkin emas'
        }, { required: true }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

const QuizCreater = () => {
    const [state, setState] = useState({
        quiz: [],
        rightAnswerId: 1,
        formControls: createFormControls(),
        isFormValid: false
    })

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const addQuestionHandler = (e) => {
        // e.preventDefault()


        const quiz = state.quiz.concat()
        const idx = quiz.length + 1

        let { question, option1, option2, option3, option4 } = state.formControls

        let quizItems = {
            question: question.value,
            rightAnswerId: state.rightAnswerId,
            id: idx,
            answers: [
                { text: option1.value, id: option1.id },
                { text: option2.value, id: option2.id },
                { text: option3.value, id: option3.id },
                { text: option4.value, id: option4.id },
            ]
        }

        quiz.push(quizItems)

        setState({
            ...state,
            quiz: quiz,
            formControls: createFormControls(),
            isFormValid: false
        })

    }

    const createQuizHandler = (e) => {
        e.preventDefault()
        console.log('Created');
    }

    const changeHandler = (value, controlName) => {
        // console.log(value, controlName);
        let newFormControls = state.formControls
        let control = state.formControls[controlName]

        control.touched = true
        control.valid = isValid(value, control.validation)
        control.value = value

        newFormControls[controlName] = control


        setState({
            ...state,
            formControls: newFormControls,
            isFormValid: validForm(state.formControls)
        })

    }

    const renderControls = function () {
        return Object.keys(state.formControls).map((controlName, index) => {
            const control = state.formControls[controlName]

            return (
                <Auxiliary key={controlName + index}>
                    <Input
                        key={index}
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr /> : null}
                </Auxiliary>
            )
        })
    }

    const selectChangeHandler = (e) => {
        setState({
            ...state,
            rightAnswerId: +e.target.value
        })
    }

    const select = <Select
        label="To`g`ri javobni belgilang"
        value={state.rightAnswerId}
        onChange={selectChangeHandler}
        options={[
            { text: 1, value: 1 },
            { text: 2, value: 2 },
            { text: 3, value: 3 },
            { text: 4, value: 4 },
        ]}
    />

    return (
        <div className={classes.QuizCreater}>
            <div>
                <h1>QuizCreater</h1>

                <form onSubmit={submitHandler}>
                    {renderControls()}

                    {select}
                    <Button
                        type="primary"
                        onClick={addQuestionHandler}
                        disabled={!state.isFormValid}
                    >
                        Add question
                    </Button>
                    <Button
                        type="success"
                        onClick={createQuizHandler}
                        disabled={state.quiz.length === 0}
                    >
                        Create test
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default QuizCreater