import { Link } from 'react-router-dom'
import { Field } from 'formik'
import CustomForm from '../../../shared/form/form'

import validationSchema from './validationSchema'

const initialValues = {
    token: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {
    return (
        <div className="form-container">
            <CustomForm initialValues={initialValues} validationSchema={validationSchema}>
                <h2>Регистрация</h2>
                <Field
                    type="text"
                    name="token"
                    placeholder="Токен (его должен предоставить работник вуза)"
                />
                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <Field
                    type="password"
                    name="password"
                    autoComplete="false"
                    placeholder="Пароль"
                />
                <Field
                    type="password"
                    name="confirmPassword"
                    autoComplete="false"
                    placeholder="Подтвердите пароль"
                />
                <button type="submit" className="form__submit">
                    Зарегистрироваться
                </button>
                <div className="form__link-wrapper">
                    <Link to="/auth" className="form__link" component={<div/>}>
                        Авторизоваться
                    </Link>
                </div>
            </CustomForm>
        </div>
    )
}

export default Register
