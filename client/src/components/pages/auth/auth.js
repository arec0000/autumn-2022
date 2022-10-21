import { Link } from 'react-router-dom'
import { Field } from 'formik'
import CustomForm from '../../../shared/form/form'

import validationSchema from '../register/validationSchema'

const initialValues = {
    email: '',
    password: ''
}

const Auth = () => {
    return (
        <div className="form-container">
            <CustomForm initialValues={initialValues} validationSchema={validationSchema}>
                <h2>Авторизация</h2>
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
                <button type="submit" className="form__submit">
                    Авторизоваться
                </button>
                <div className="form__link-wrapper">
                    <Link to="/register" className="form__link" component={<div/>}>
                        Зарегистрироваться
                    </Link>
                </div>
            </CustomForm>
        </div>
    )
}

export default Auth
