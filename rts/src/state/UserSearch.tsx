import { useState } from 'react';
//import set = Reflect.set;

const users = [
    {name: "Prasad", age: 34},
    {name :"Deepu" , age: 25},
    {name: "Shwetha", age: 29}
]

const UserSearch: React.FC = () => {
    const [name,setName] = useState('');
    const [user, setUser] =useState<{name: string, age: number}| undefined>();
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
            }
        )
    setUser(foundUser);
    }
return <div>User Search
<input value={name} onChange={(e) => setName(e.target.value) }/>
    <button onClick={onClick}>Find User</button>
    <div>
        {user && user.name}
        {"\t"}
        {user && user.age}
    </div>

</div>;
}

export default UserSearch;