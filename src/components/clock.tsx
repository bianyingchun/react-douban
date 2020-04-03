import React, { Component ,MouseEvent, SyntheticEvent} from 'react'; // let's also import Component

import Button from 'antd/es/button';
// the clock's state has one field: The current time, based upon the
// JavaScript class Date
type ClockState = {
    time: Date
}

type NoticeProps = {
    msg: string
}

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
class Clock extends Component<NoticeProps, ClockState> {
    // constructor(props:NoticeProps) {
    //     super(props)
    // }
    static defaultProps = { //默认属性
        msg:'hello everyone'
    }
    handleClick(event:MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        console.log(event.currentTarget.tagName)
    }
    handleInput(event:SyntheticEvent) {
        event.preventDefault()
        console.log(event.currentTarget)
    }
  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.
    tick() {
        this.setState({
        time: new Date()
        });
    }

    // Before the component mounts, we initialise our state
    componentWillMount() {
        this.tick();
    }

    // After the component did mount, we set the state each second.
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    // render will know everything!
    render() {
        return (
            <div>
                <p>{this.props.msg}</p>
                <p>The current time is {this.state.time.toLocaleTimeString()}</p>
                <p>{this.props.children}</p>
                <Button type="dashed" onClick={this.handleClick}>click</Button>
                <input type="text" onInput={this.handleInput}/>
            </div>
        )
    }
}


export default Clock
