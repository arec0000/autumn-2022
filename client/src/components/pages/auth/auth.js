import { Link, useNavigate } from 'react-router-dom'
import { Field } from 'formik'
import { useCookies } from 'react-cookie'
import CustomForm from '../shared/form/form'
import useRegAuth from '../../../services/useRegAuth'

import validationSchema from './validationSchema'

const initialValues = {
    email: '',
    password: ''
}

const Auth = ({setRole}) => {
    const {request, error} = useRegAuth('auth')
    const [token, setToken] = useCookies('token') // eslint-disable-line
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const res = await request(values)
        setRole(res.role)
        setToken('token', res.token, { path: '/'})
        navigate('/')
    }

    return (
        <div className="form-container">
            <CustomForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                error={error}
            >
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
