import * as Yup from 'yup';

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const passwordRegex = RegExp(/^\(?(=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);

export const ContactFormStyle01Schema = Yup.object().shape({
    name: Yup.string().required("Field is required."),
    email: Yup.string().email("Invalid email.").required("Field is required."),
    phone: Yup.string().required().matches(phoneRegex, "Invalid phone")
});

export const ContactFormStyle02Schema = Yup.object().shape({
    name: Yup.string().required("Field is required."),
    email: Yup.string().email("Invalid email.").required("Field is required.")
});

export const ContactFormStyle03Schema = Yup.object().shape({
    name: Yup.string().required("Field is required."),
    email: Yup.string().email("Invalid email.").required("Field is required."),
    terms_condition: Yup.boolean().oneOf([true],'Message').required()
});

export const ContactFormStyle04Schema = Yup.object().shape({
    name: Yup.string().required("Field is required."),
    email: Yup.string().email("Invalid email.").required("Field is required."),
    phone: Yup.string().required().matches(phoneRegex, "Invalid phone"),
    comment: Yup.string().required("Field is required."),
});

export const ContactFormStyle05Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email.").required("Field is required."),
    phone: Yup.string().required().matches(phoneRegex, "Invalid phone"),
    terms_condition: Yup.boolean().oneOf([true],'Message').required()
});

export const ContactFormStyle06Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email.").required("Field is required."),
    password: Yup.string().required().matches(passwordRegex, "Invalid password please make sure to make a password that is 6-16 characters long and contains as least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number."),
});