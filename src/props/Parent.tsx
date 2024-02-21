import {Child, ChildAsFC} from './Child'
const Parent = () =>{
    return <Child color='red' onClick={()=>console.log('clicked ')}>

    </Child>
}
export default Parent;