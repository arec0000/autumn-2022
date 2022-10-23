import { createPortal  } from 'react-dom'

import './modal.scss'

const Modal = ({children, close, style}) => {
    return createPortal(
        <div className="modal__dialog" onClick={close}>
            <div className="modal__content" style={style ? style : null}>
                {children}
            </div>
        </div>, document.body
    )
}

export default Modal
