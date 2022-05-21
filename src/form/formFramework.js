export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}


export function isValid(value, validation) {
    if (!validation) {
        return true
    }

    let isValidated = true

    if (validation.required) {
        return value.trim() !== ''
    }

    return isValidated
}

export function validForm(formControls) {
    let isFormValid = true

    for (let key in formControls) {
        if (formControls.hasOwnProperty(key)) {
            isFormValid = formControls[key].valid
        }
    }

    return isFormValid
}