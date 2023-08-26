import styles from './Todo.module.css'
function Todo(props){
    return(
        <div className={styles.flex}>
            <input type="checkbox" className={styles.taskdone} />
            {/* <h3>{props.index+1} </h3> */}
            <h3> {props.data}  </h3>
        </div>
    )
}
export default Todo;