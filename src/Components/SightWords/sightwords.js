import React, { Component} from 'react';
import Speech from 'react-speech';


class SightWords extends Component{



handleWords =()=>{
    let arr = ["i", "a", "in", "be", "no", "he", "do", "go", "an", "is", "see", "can", "my", "to", "we", "and", 
    "the", "like", "she", "but", "play", "said", "get", "big", "our"];

    return arr.map(words=>{
        return (<div className="tcol col-md-3 tdiv">{words} <Speech  text={words} /></div>)
    })
}
 render(){
  return (
<div className="container">
  <hr />
<div className="row text-center">
    {this.handleWords()}
</div>
</div>
  );
}
}


export default SightWords;
