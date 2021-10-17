import React, { Component } from 'react';
import Counter from "../components/counter";

class CounterPageContainer extends Component {
        state = {
			countValue: 0,
            parityType: 'even',
		};
	
    
    handleIncrement = () => {
        this.setState({countValue: this.state.countValue + 1})
    }

    handleDecrement = () => {
        if (this.state.countValue > 0) {
            this.setState({countValue: this.state.countValue - 1})
        }
    }

    handleReset = () => {
		this.setState({ countValue: 0 })
	};

    render() {
        return (
            <Counter 
            countValue={this.state.countValue}  
            handleIncrement={ this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleReset={this. handleReset}
            parityType={this.state.parityType}
            />
        );
    }
}

export default CounterPageContainer;