import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({children,buttonCaption},ref)=>{
    // To expose a func that can be called outside the component fun 
    const dialog = useRef()
    // useImperativeHandle takes ref and a func returns obj which exposes properties and func for other func 
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })
    // adding portals 
    return createPortal(<dialog ref={dialog}>
        {children}
        <form method="dialog">
            <button>{buttonCaption}</button>
        </form>
    </dialog>,document.getElementById('modal-root'))
})

export default Modal;