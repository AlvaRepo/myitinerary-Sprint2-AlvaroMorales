import joi from "joi";

const signinSchema = joi.object({

    mail: joi.string().email().min(8).max(90).required().messages({
        'string.min': 'Sorry! the mail  must be at least 8 characters long.',
        'string.max': 'Sorry! the mail must not exceed 90 characters.',
        'string.email': 'Sorry! please provide a valid email address.',
        'any.required': 'Sorry! the email field is required.',
        'string.empty': 'name is required!'
    }),
    password: joi.string().min(8).max(100).required().messages({
        'string.min': 'Sorry! the password must be at least 8 characters long.',
        'string.max': 'Sorry! the password must not exceed 100 characters.',
        'any.required': 'Sorry! the password field is required.',
        'string.empty': 'password is required!'
    }),

});

export default signinSchema;
