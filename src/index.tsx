
import ReactDOM  from "react-dom"

// import { createRoot } from 'react-dom/client';

import Parent from "./props/Parent"
import GuestList from "./state/GuestList"
import UserSearch from "./state/UserSearch"
import EventComponent from "./events/EventComponent"
const App = () =>{

    return <div>
        {/* <h1>This is a tittle</h1> */}
        {/* <GuestList/> */}
        {/* <UserSearch/> */}
        <EventComponent/>
    </div>
}
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<App/>)
ReactDOM.render(<App/>, document.querySelector('#root'))
