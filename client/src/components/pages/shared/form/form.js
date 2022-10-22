import { Formik, Form } from 'formik'

import './form.scss'

const renderValidationError = (errors, touched) => {
    for (let key of Object.keys(errors)) {
        if (errors[key] && touched[key]) {
            return errors[key]
        }
    }
}

const CustomForm = ({initialValues, validationSchema, onSubmit, error, children}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({errors, touched}) => (
                <Form className="form">
                    {children}
                    <span className="form__error">
                        {error || renderValidationError(errors, touched)}
                    </span>
                </Form>
            )}
        </Formik>
    )
}

export default CustomForm
