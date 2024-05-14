import React, { useState } from 'react'



const Form = () => {
    cosnt[TextTrackList, setTask] = useState({ title: "", personnel: 0, start: "", end: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask(prevState => ({ ...prevState, name }))
    }
    return (
        <>
            <div>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        </>
    )
}

export default Form;