import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './classes/UserSearch';
//Now Prsaad added
const App = ()  => {
    return ( <div>
        <UserSearch users={[
            {name: "Prasad", age: 34},
            {name :"Deepu" , age: 25},
            {name: "Shwetha", age: 29}
        ]} />
            <GuestList />
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);