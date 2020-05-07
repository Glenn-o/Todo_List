import React, {Component} from 'react';

class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }
    onChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        })
    }
    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value)
        array.splice(index, 1);
        this.setState({
            items: array
        })
    }
    renderTodo(){
        return this.state.items.map((item) =>{
            return(
                <div className="list-group-item" key={item}>
                    <div align="center">{item} <button className ="delete_button"onClick={this.deleteTodo.bind(this)}>X</button></div>
                </div>
            )
        })
    }
    suppTodo(event){
        event.preventDefault();
        this.setState({
            items: []
        })
    }
    render(){
        return(
            <div>
                <h1 align="center">Ma Todo List</h1>
                <form className="form-inline" id="form">
                    <input className ="form-control" id="input" value={this.state.userInput} type="text" placeholder="Renseigner un item" onChange={this.onChange.bind(this)}/>
                    <div className="container_button">
                        <button className ="btn btn-primary mb-2" id="submit" onClick={this.addTodo.bind(this)}>Ajouter</button>
                        <button className="btn btn-primary mb-2" onClick={this.suppTodo.bind(this)}>Tout supprimer</button>
                    </div>
                </form>
                <div className="list-group">
                    {this.renderTodo()}
                </div>
            </div>
        );
    }
}

export default TodoList;