import React ,{Component, MouseEvent} from 'react'

type MouseState = {
    x : number,
    y : number
}

type CatProps = {
    mouse:MouseState
}

export class Cat extends Component<CatProps>{
    render(){
        const {mouse} = this.props;
        return (
            <span style={{position:'absolute', left:mouse.x, top:mouse.y}}>XX</span>
        )
    }
}

type MouseProps = {
    render(state:MouseState):void
}

export class Mouse extends Component<MouseProps, MouseState> {
    constructor(props: MouseProps) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event: MouseEvent) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div 
          style={ { height: '100vh', width: '100vw' } }
          onMouseMove={this.handleMouseMove}>
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }

export const MouseTracker = () => <div>
  <h1>Move the mouse around!</h1>
  <Mouse render={mouse => (
    <Cat mouse={mouse} />
  )}/>
</div>;

