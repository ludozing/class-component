import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,
        fixed: 1
    }
    handleIncrease = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }))
    }
    handleDecrease = () => {
        this.setState(state => ({
            counter: state.counter - 1
        }))
    }
    render() {
        const {counter,fixed} = this.state
        // 구조분해할당으로 변수에 담아주기 전에는 그냥 this.state.counter를 쓰면 된다.
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={this.handleDecrease}>-1</button>
                <button onClick={this.handleIncrease}>+1</button>
                <p>이렇게도 쓸 수 있어요 {fixed} </p>
            </div>
        );
    }
}

export default Counter;