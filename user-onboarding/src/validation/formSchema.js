import * as yup from 'yup';

const formSchema = yup.object().shape({
    fName: yup
        .string()
        .trim()
        .required('First name required'),
    lName: yup
        .string()
        .trim()
        .required('Last name required'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email required'),
    password: yup
        .string()
        .required('Password required')
        .matches(/^[a-zA-Z0-9]+$/, 'Password cannot contain white space or special character')
        .min(6, 'Password must be at least 6 characters long'),
    agree: yup
        .boolean()
        .oneOf([true], 'You must agree to our terms')
})

export default formSchema;