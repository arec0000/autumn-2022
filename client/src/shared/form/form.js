import { Formik, Form } from 'formik'

import './form.scss'

const renderValidationError = (initialValues, errors, touched) => {
    for (let key of Object.keys(initialValues)) {
        if (errors[key] && touched[key]) {
            return errors[key]
        }
    }
}

const CustomForm = ({initialValues, validationSchema, onSubmit, children}) => {
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
                        {renderValidationError(initialValues, errors, touched)}
                    </span>
                </Form>
            )}
        </Formik>
    )
}

export default CustomForm
