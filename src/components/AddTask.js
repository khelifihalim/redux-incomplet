import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTasks } from '../redux/actions/actionAddTasks'


const AddTask = ({libaryData,addATodo}) => {

    console.log(':::::::::::::libaryData',libaryData)

    const initialState = {
        theTodo:''    
    }

    const [todo,setTodo] = useState(initialState)

   

    const handlSubmit = e => {
        e.preventDefault()
        //console.log('handleSubmite********',todo)
        addATodo(todo)
        
        //vider le input
        setTodo(initialState)
    }

    const displayTodos = libaryData.length > 0 ? 
            libaryData.map( data => {
                
                return ( <li key= {data.id} className='list-group-item'>{data.theTodo}</li>)
                
            }) : <p className='text-center'>pas de taches pour l'instant</p>
            console.log('2222222',displayTodos.props)

  return (
    <div className='container' >
        
        <form onSubmit={handlSubmit} className='bg-light p-3'>
                        <h1>list of tasks to do</h1>
            <div class="form-group " > 
                    <input 
                        value={todo.theTodo}
                        style={{maxWidth:400, margin:'0 auto'}}
                        type="text" 
                        className='form-control mt-4' 
                        placeholder='enter a todo' 
                        onChange={(e) => setTodo({...todo, theTodo:e.target.value})}
                        
                    />
                    <button type="submit" className="btn btn-primary m-4" >Add a Task</button>
            </div>         
        </form>

        <div >
            <ul className="list-group mt-4" style={{maxWidth:400, margin:'0 auto'}}>
                       {displayTodos}
            </ul>
            <button className="btn btn-danger mt-4" >supprimez toutes les taches</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
   
    return {
        libaryData : state.bankData
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        addATodo: param => dispatch(addTasks(param))

        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTask)
