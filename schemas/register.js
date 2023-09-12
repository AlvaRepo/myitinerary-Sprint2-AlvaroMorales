import joi from "joi";

const registerSchema = joi.object({
    name: joi.string().min(3).max(20).required().messages({
        'string.min': 'Sorry! it seems like your name is too short, it must be at least 3 characters long.',
        'string.max': 'Sorry! it seems like your name is too long, it must not exceed 20 characters.',
        'any.required': 'Sorry! the name field is required.'
    }),
    lastName: joi.string().max(50).messages({
        'string.max': 'Sorry! last name must not exceed 50 characters.'
    }),
    mail: joi.string().email().required().messages({
        'string.email': 'Sorry! please provide a valid email address.',
        'any.required': 'Sorry! the email field is required.'
    }),
    photo: joi.string().uri().messages({
        'string.uri': 'Sorry! please provide a valid URL for the photo.'
    }),
    password: joi.string().min(8).max(20).required().messages({
        'string.min': 'Sorry! the password must be at least 8 characters long.',
        'string.max': 'Sorry! the password must not exceed 20 characters.',
        'any.required': 'Sorry! the password field is required.'
    }),
    country: joi.string().required().messages({
        'any.required': 'Sorry! the country field is required.'
    }),
});

export default registerSchema;
