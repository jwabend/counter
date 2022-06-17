//import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';

class Counter extends Component 
{
    state = {
        count: this.props.counter.value,
        
    };

    styles = {
        fontSize: 25,
        fontWeight: "bold"
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p> there are no tags </p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () =>
    {
        this.setState({ count: this.state.count + 1 })
    };

    handleDecrement = () =>
    {
        if (this.state.count > 0)
        {
        this.setState({ count: this.state.count - 1 })
        }
    };

    //onDelete = () => this.setState({count: this.state.count = 0})
    

    render() 
    {    

        return (<div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">+</button>
            <button onClick={this.handleDecrement} className="btn btn-secondary m-2 btn-sm">-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className = "btn btn-secondary m-2 btn-md btn-danger">Delete</button>
            </div>);
    };
    
    getBadgeClasses()
    {
        let classes = "badge m-2 badge-";
        classes+= this.state.count === 0 ? "danger" : "primary";
        return classes;
    };
     
    formatCount()
    {
        const {count}= this.state;
        return count === 0 ? 0 : count;
    };
    
}
 
export default Counter;