import React, { Component, FC } from 'react';
import './apis.css';

interface Props{

}

interface State{
    count:number
}

class Apis extends React.Component<Props,State>{
  constructor(props:Props){
    super(props);
    this.state={
      count:0,
    }
  }

  render() {
    return (
      <div className='apis'>
        <button>With SetState</button>
        <button>With ForceUpdate</button>
        <button>Changing the state directly</button>
      </div>
    );
  }
}

export default Apis;