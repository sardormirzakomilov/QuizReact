import React, { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'

const Auth = () => {
    const [form, setForm] = useState({
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Please write correct email',
                valid: false, /* validatsiyani holatiga javob beradi */
                touched: false, /* agar klient inputga tekkan bo'lsa */
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Please write correct password',
                valid: false, /* validatsiyani holatiga javob beradi */
                touched: false, /* agar klient inputga tekkan bo'lsa */
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    })

    const registerHandler = () => {

    }

    const loginHandler = () => {

    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    const onChangeHandler = (e, controlName) => {
        // console.log(controlName, e.target.value);

        const formControls = { ...form.formControls } // cloun
        const control = { ...formControls[controlName] }

        control.value = e.target.value
        control.touched = true  // onChange ga kirdimi demak foydalanuvchi nimadir yozdi
        control.valid = validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        setForm({
            formControls, isFormValid
        })
    }

    function renderInputs() {
        return Object.keys(form.formControls).map((controlName, index) => {
            const control = form.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(e) => onChangeHandler(e, controlName)}
                />
            )
        })


    }

    return (
        <div className={classes.Auth}>
            <div>
                <h1>Auth</h1>

                <form
                    onSubmit={submitHandler}
                    className={classes.AuthForm}>
                    {renderInputs()}
                    <Button type="success"
                        onClick={loginHandler}
                        disabled={!form.isFormValid}>
                        Login</Button>
                    <Button type="primary"
                        onClick={registerHandler}
                        disabled={!form.isFormValid}>
                        Register</Button>
                </form>
            </div>
        </div>
    )
}

export default Auth