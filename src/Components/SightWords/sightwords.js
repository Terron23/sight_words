import React, { Component} from 'react';
import Speech from 'react-speech';


class SightWords extends Component{



handleWords =()=>{
    let arr = ["i", "a", "in", "be", "no", "he", "do", "go", "an", "is", "see", "can", "my", "to", "we", "and", 
    "the", "like", "she", "but", "play", "said", "get", "big", "our"];

    return arr.map(words=>{
        return (<div className="tcol col-md-3 tdiv">
            <Speech styles={styles} text={words} 
        lang="en-US" 
        rate="0.5"
        voice="Google UK English Female" textAsButton={true}/>
        </div>)
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


const styles =  {
    container: {
    width: '100%'
  },
  text: {
    width: '100%',
    display: ''
  },
  play: {
    hover: {
      backgroundColor: 'purple'
    },
    button: {
      width: '34',
      height: '34',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'Gainsboro',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    }
  },
  stop: {
    hover: {
      backgroundColor: 'GhostWhite'
    },
    button: {
      width: '34',
      height: '34',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'Gainsboro',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    }
  },
  pause: {
    hover: {
      backgroundColor: 'purple'
    },
    button: {
      width: '34',
      height: '10',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'Gainsboro',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    }
  },
  resume: {
    hover: {
      backgroundColor: 'GhostWhite'
    },
    button: {
      width: '34',
      height: '15',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'Gainsboro',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    }
  }
};

export default SightWords;
