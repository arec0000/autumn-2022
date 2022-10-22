import { Route, Navigate } from 'react-router-dom'

const manageAccess = (role) => {
    switch (role) {
        case 'student':
            return (
                null
            )
        case 'teacher':
            return (
                null
            )
        case 'employee':
            return (
                null
            )
        default:
            return <Route path="*" element={<Navigate to="auth"/>}/>
    }
}

export default manageAccess
