import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    role: Yup.string()
        .required('Выберите роль'),
    surname: Yup.string()
        .min(2, 'Фамилия должна содержать больше 2 символов')
        .required('Заполните фамилию'),
    name: Yup.string()
        .min(2, 'Имя должно содержать больше 2 символов')
        .required('Заполните имя'),
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
