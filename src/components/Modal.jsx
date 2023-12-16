import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

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
    return createPortal(<dialog ref={dialog} className="my-96 mx-auto  backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>,document.getElementById('modal-root'))
})

export default Modal;