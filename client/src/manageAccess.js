import { Route, Navigate } from 'react-router-dom'

const manageAccess = (role) => {
    switch (role) {
        case 'student':
            return (
                <div>студент</div>
            )
        case 'teacher':
            return (
                <div>учитель</div>
            )
        case 'employee':
            return (
                <div>сотрудник</div>
            )
        default:
            return <Route path="*" element={<Navigate to="auth"/>}/>
    }
}

export default manageAccess
