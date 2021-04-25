import {useState } from 'react'

const AddContact = ({onAdd}) => {
    const [name, setName] = useState('')
    const [cellNum, setCellNum] = useState('')
    const [email, setEmail] = useState('')
    const [selected, setSelected] = useState(false)

    //define onsubmit
    const onSubmit =(e) =>{
        e.preventDefault()
        if(!name){
            alert('Please add a contact')
            return
        }
        onAdd({name,cellNum,email,selected})
        //done, set all of them clear
        setName('')
        setCellNum('')
        setEmail('')
        setSelected(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' 
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Cell phone number</label>
                <input 
                type='text' 
                placeholder='Cell phone number'
                value={cellNum}
                onChange={(e) => setCellNum(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input 
                type='text' 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Selected</label>
                <input 
                type='checkbox'
                checked = {selected}
                value={selected}
                onChange={(e) => setSelected(e.currentTarget.checked)}/>
            </div>
            <input 
            className='btn btn-block'
            type='submit' 
            value='Save Contact'/>
        </form>
        
    )
}

export default AddContact
