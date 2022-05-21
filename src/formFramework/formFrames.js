export default function formFramework(controls, validation) {
    return {
        ...controls,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}