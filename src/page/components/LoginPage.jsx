import {useState} from "react"

function LoginPage({login}) {
    const [user, setUser] = useState('')
    
    function handleChange(event){
        setUser(event.target.value)
    }
    function changeUser(){
        login(user)
    }
    return(
        <form onSubmit={changeUser}>
            <input type="text" 
            name="username" 
            placeholder="Please Enter Username"
            onChange={handleChange}
            />
            <button type="submit">Enter</button>
        </form>
    )
}

export default LoginPage