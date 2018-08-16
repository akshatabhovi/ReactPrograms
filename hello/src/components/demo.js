import React from 'react';
/*class TodoItem extends React.Component{
    render(){
        return(
            <li onClick={()=>{this.props.clickHandler(this.props.index)}}className={this.props.detail.completed ? 'completed':''}>
                {this.props.detail.name}
            </li>
        )
    }
}*/
const TodoItem=(props)=>{
    return(
        <li onClick={()=>{props.clickHandler(props.index)}}className={props.detail.completed ? 'completed':''}>
        {props.detail.name}
    </li>

    )
}
export default TodoItem;
