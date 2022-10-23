import { createPortal  } from 'react-dom'

import './modal.scss'

const Modal = ({children, close, style}) => {
    const onClick = e => {
        if (e.target.classList.contains('modal__dialog')) {
            close()
        }
    }
    return createPortal(
        <div className="modal__dialog" onClick={onClick}>
            <div className="modal__content" style={style ? style : null}>
                {children}
            </div>
        </div>, document.body
    )
}

export default Modal
