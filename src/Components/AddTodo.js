import { useRef ,useState} from 'react';
import styles from './AddTodo.module.css'
import Todo from './Todo';

function AddTodo(){
    let taskinput=useRef();
    const[todotask,settodotask]=useState([]);
    function taskHandler(){
        let currenttask=taskinput.current.value;
        let finaltask=[...todotask, currenttask]
        settodotask(finaltask)
        currenttask=''
        console.log(finaltask)
        taskinput.current.value=''
    }
    return (
<div className={styles.container}>
    {
        
        todotask.map((todo,index)=>{
            return <Todo data={todo} index={index}/>
        })
    }
    <h1>Manage your task<span className={styles.grey}>@khushbu</span> </h1>
    <input ref={taskinput} className={styles.input} placeholder='Add new task'/>
    <button onClick={taskHandler} className={styles.btn}>Add</button>
</div>
    )
}
export default AddTodo;