import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    token: Yup.string().required('Вставьте регистрационный токен'),
    email: Yup.string()
        .email('Неправильный email адрес')
        .required('Заполните email'),
    password: Yup.string()
        .min(4, 'Пароль должен быть больше 4 символов')
        .required('Придумайте пароль'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароль не совпадает')
        .required('Пароль не совпадает')
})

export default validationSchema
