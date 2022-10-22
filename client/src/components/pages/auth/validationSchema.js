import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Неправильный email адрес')
        .required('Заполните email'),
    password: Yup.string()
        .min(4, 'Пароль должен быть больше 4 символов')
        .required('Заполните пароль')
})

export default validationSchema
