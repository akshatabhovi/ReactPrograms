import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import TodoItem from './components/demo.js';
import ToDoForm from './components/ToDoForm';
class Hello extends React.Component
{
    render(){
        return(
        <h1>Hello Everybody</h1>
        
    )

    }
}
class World extends React.Component
{
    render(){
        return(
        <h1>greetings for the day</h1>
        
    )

    }
}
class HelloWorld extends React.Component{
    render(){
        return(
            <section className="demo">
                <Hello/>
                <World/><br/>
            </section>

        )
    }
}
class JSXDemo extends React.Component{
    name;
    constructor(){
        super();
        this.name='Akshata';
    }
    greet(){
        return "Good Evening";
    }
    render(){
        return(
            <div>
                <section><h1>JSX DEMO</h1></section><hr/>
                <section>
                    <h2>
                        Username:<input type="text" name="t1"/>
                    </h2>

                </section><hr/>
                <section className="demo">
                    <h2>{2+8}<br/>
                    {this.greet()}<br/>
                    Your good name is:{this.name}
                    </h2>
                </section>
            </div>
        )
    }
}
class ToDoList extends React.Component{
    constructor()
    {
        super();
        this.state={
            firstname:'Subhash',
            names:['Praksha','Praveen','Pari','pradeep']
        }
    }
    render(){
        return(
            <ul>
                {this.state.firstname}
                <ToDoItem detail={this.state.firstname}/>
                <ToDoItem detail="Parveen" />
                {
                    this.state.names.map(function(name){
                        return <ToDoItem detail={name} key={name}/>
                    })
                }

            </ul>
        )
    }
}
class ToDoItem extends React.Component{
    render(){
        return(
            <li>
                {this.props.detail}
            </li>
        )
    }
}

class EventDemo extends React.Component{
    render()
    {
        return(
            <div>
                <h2>Event Demo</h2>
                <p onClick={this.abc}>Just try to click</p>
            </div>
        )
    }
    abc(){
        console.log('you clickred on the paragraph')
    }
}
class StateEventDemo extends React.Component{
    constructor(){
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.updateTask=this.updateTask.bind(this);
        this.addTask=this.addTask.bind(this);

        this.state={
            tasks:[{
                name:'Movie',
                completed:false
            },
            {
                name:'Spoots',
                completed:false
            },
            {
                name:'Food',
                completed:false
            }],
            currentTask:''
        
        }
    }
    updateTask(newValue){
        this.setState({
            currentTask:newValue.target.value

        })

    }
    addTask(catg){
        catg.preventDefault();
        let tasks=this.state.tasks;
        let currentTask=this.state.currentTask;
        tasks.push({
            name:currentTask,
            completed:false

        })
        this.setState({
            tasks
        })

    }
    changeStatus(index){
        //console.log(this.state.tasks[index]);
        var tasks=this.state.tasks;
        var task=tasks[index];
        task.completed=!task.completed;
        this.setState({
            //tasks:tasks
        })

    }
    render(){
        return(
            <section>
                <ToDoForm currentTask={this.state.currentTask} updateTask={this.updateTask} addTask={this.addTask}/>
                <h2>
            <ul>
                {
                    this.state.tasks.map((task,index)=>{
                        return <TodoItem detail={task} index={index} clickHandler={this.changeStatus} key={task.name}/>
                    })
                }

            </ul>
            </h2>
            </section>
        )

    }
}
/*class TodoItem extends React.Component{
    render(){
        return(
            <li onClick={()=>{this.props.clickHandler(this.props.index)}}className={this.props.detail.completed ? 'completed':''}>
                {this.props.detail.name}
            </li>
        )
    }
}*/


ReactDom.render(<Hello />,document.getElementById('abc'));
ReactDom.render(< World />,document.getElementById('xyz'));
ReactDom.render(< HelloWorld />,document.getElementById('hw'));
ReactDom.render(<JSXDemo />,document.getElementById('jsx'));
ReactDom.render(<ToDoList/>,document.getElementById('li'));
ReactDom.render(<EventDemo/>,document.getElementById('event'));
ReactDom.render(<StateEventDemo/>,document.getElementById('stevdemo'));

