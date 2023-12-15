import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({onAdd}) =>{
    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const handleSave= ()=>{
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation
        if(
            enteredTitle.trim()===''||
            enteredDescription.trim()===''||
            enteredDueDate.trim()===''
        ){
            // show Modal 
            modal.current.open() //custom object we defined in modal.jsx
            return;
        }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate

        })

    }
    return <>
    <Modal ref={modal} buttonCaption="Okay ">
        <h2>Invalid Input</h2>
        <p>looks like you forgot to enter a value</p>
        <p>Fill all the fields!!</p>
    </Modal>
    <div className={` w-[35rem] mt-16`}>
        <menu className={`flex items-center justify-end gap-4 my-4`}>
            <li><button className={`text-stone-800 hover:text-stone-950`}>Cancel</button></li>
            <li><button onClick={handleSave} className={`px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950`}>Save</button></li>
        </menu>
        <div>
            <Input type='text' ref={title} label="Title"></Input>
            <Input ref = {description} label="Description" textarea></Input>
            <Input type='date' ref={dueDate} label="Due Date"></Input>
        </div>
    </div>
    </> 
}

export default NewProject;