import React, { Fragment, useState } from 'react'

function ReactForm() {

    const [data, setdata] = useState({
        // key - value
        username: "",
        email: "",
        paswword: ""
    });

    // controlled components in react 

    const getData = (event) => {
        
    }



    return (
        <Fragment>
            <label>username</label>
            <input type='text' placeholder='username' name='username' onInput={getData} />
            <label>email</label>
            <input type='email' placeholder='enter email' name='email' />
            <label>password</label>
            <input type='password' placeholder='enter password' name='password' />
            <button>register</button>
        </Fragment>
    )
}

export default ReactForm