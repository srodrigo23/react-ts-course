import { useState } from "react"

const users = [
    {name:'Sarah', age:20},
    {name:'Alex', age:20},
    {name:'Michael', age:20},
    {name:'Sergio', age:20},
    {name:'Rodrigo', age:20},
    {name:'Carla', age:20},
]

const UserSearch: React.FC =()=>{

    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string, age:number}| undefined>();
    const onClick = ()=>{
        const foundUser = users.find((user)=>{
            return user.name === name;
        });
        console.log(foundUser)
        setUser(foundUser)
    }

    return <div>
        User Search
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name} 
            {user && user.age}
        </div>
    </div>
}

export default UserSearch