import React from 'react'

interface AddModalProps {
    isOpen: boolean
}

const AddModal: React.FC<AddModalProps> = (props) => {
    const { isOpen } = props

    if (!isOpen) return null

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        console.log('h')
    }

    return (
        <div className='modal-wrapper'>
            <div className='overlay'>
                <div className="modal">
                    <p>Add Date</p>
                    <form onSubmit={handleSubmit} className='input-fields'>
                        <div className='form-controls'>
                            <label htmlFor="date">Date</label>
                            <input type="date" id='date' />
                        </div>
                        <div className='form-controls'>
                            <label htmlFor="date">Description</label>
                            <input type="text" id='description' />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                    <div className='date-list'>Date List</div>
                </div>
            </div>
        </div>
    )
}

export default AddModal