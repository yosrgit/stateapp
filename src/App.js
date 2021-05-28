import React  from 'react';
import './App.css';
import Profile from './profile.png'


class App extends React.Component {
  constructor(props){
    super(props)
this.state = {
    Fullname: "M'sakni yosr",
    Profession:"Industrial Designer ",
    Bio:" An industrial designer develops the concepts for manufactured products, such as cars, home appliances, electronics, and toys. They combine art, business, and engineering to make products that people use every day. " ,
    imageSrc:Profile,
  
     content:"You only live once, but if you do it right, once is enough." ,
      source:"Mae West",
      show: false,
    time:0,
  };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  

  render() {
    
    
    
  return (
<div className="app">

       
        {this.state.show && (
          <>
          
           <div className="image" style={{backgroundImage: 'url(' + this.state.imageSrc + ')', boxShadow :" 10px 15px 10px 12px grey"}}>
            
             </div>
         
          <h1 className="Fullname">
            {this.state.Fullname}
            </h1>
            <div className="Bio">{this.state.Bio}</div>
              <p>{this.state.profession}</p>
            <div className="quote">
            <blockquote>&ldquo; {this.state.content} &rdquo;</blockquote>
            </div>
            <br></br>
            <div className="source">&mdash;{this.state.source}</div>
            
          </>
        )}

        
        <button className="btn" onClick={this.handleShowPerson} style ={{ color : "grey"}}>Profile show/hide</button>
        <div className="counter">
          The last component was mounted since: {this.state.time} seconds
        </div>
      </div>
    );
        }}

export default App;