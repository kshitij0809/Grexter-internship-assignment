import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button ,ButtonToolbar} from 'react-bootstrap';

import axios from 'axios'
import {NavLink} from 'react-router-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'

import './AllTask.css';

import Modal from './Modal'

 class Udemy extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEvents: [],

    }
   
    // this.Bplanincreasehorizontalline = this.Bplanincreasehorizontalline.bind(this);
    // this.renderclick = this.renderclick.bind(this);
  }


  componentDidMount () {
    // axios
    //         .get('https://api.myjson.com/bins/1a4wyz')
    //         .then(response => {
    //           // console.log(response.data)
    //           this.setState({ mappedMainEvents: response.data })
             
    //         })
    //         .catch(error => {
    //           console.log(error)
    //         })  

    this.setState({ mappedMainEvents: [{
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"all through the competitive spirit. The Summit brings to you a wide ",  
    image:"{iitrLogo}",
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END",
    
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"all through the competitive spirit. The Summit brings to you a wide ",  
    image:"{iitrLogo}",
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END",
    
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"all through the competitive spirit. The Summit brings to you a wide ",  
    image:"{iitrLogo}",
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END",
    
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"all through the competitive spirit. The Summit brings to you a wide ",  
    image:"{iitrLogo}",
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END",
    
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"all through the competitive spirit. The Summit brings to you a wide ",  
    image:"{iitrLogo}",
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END",
    
    },
    {
    title:'KSHITIJ',
    tagline:'IIT ROORKEE STUDENT',
    short_description:"all through the competitive spirit. The Summit brings to you a wide ",  
    image:"{iitrLogo}",
    website_url:'Kshitijpratapme.000webhostapp.com',
    end_point:"END",
    
    }]});
  }
  // renderclick(){
  //   window.href("")
  // }
 
  // Bplanincreasehorizontalline(){
  //  var x = document.getElementsByClassName('main-events-grid container');
  //    x[x.length-1].getElementsByClassName('horizontal-line-last')[0].style.maxWidth = "51vw" ;
  //    x[x.length-1].getElementsByClassName('vl')[0].style.height = "109px";
    
  //  }
  render () {
    return (
      <div className="width-column">
        
        
        {this.state.mappedMainEvents.map((event, key) => (
          <div key={key}>
            
              <MainEventTemp
                name={event.title}
                short={event.tagline}
                long={event.short_description}
                websiteUrl={event.image}
               
                            />
                            
          </div>
                ))}
        
      </div>
    )
  }
}

class MainEventTemp extends Component {
  constructor (props) {
    super(props);
    
    // this.state = {}
    // this.toggleModal=this.toggleModal.bind(this);
  }

  //  toggleModal() {
  // 	alert("hello");
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

// show(){
//     this.setState({show: true})
//   }

//   close(){
//     this.setState({show: false})
//   }



  render () {
    var compname = this.props.name;
    var endpoint = this.props.end_point;
    
    return (

       
  
            
            <div className="card">
              <div className='main-event'>
               <div>{this.props.name}</div>
               <div>{this.props.short}</div>
               <div>{this.props.long}</div>
               <div>{this.props.websiteUrl}</div>
              </div>
             
           <Modal/>
			   
            </div>            
         
      
    )

  }
}














// class Udemy extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleOneClick = this.handleOneClick.bind(this);
//     this.handleTwoClick = this.handleTwoClick.bind(this);
//     this.state = {isLoggedIn: 'one'};
//   }

//   handleOneClick() {
//     this.setState({isLoggedIn: 'one'});
//   }

//   handleTwoClick() {
//     this.setState({isLoggedIn: 'two'});
//   }
 
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
    
//         let buttonOne = null;
//         let buttonTwo = null;
      
//      {
//       buttonOne = <button  className="button button1 " onClick={this.handleOneClick} > one</button>;
//     } 
//     {
//       buttonTwo = <button  className="button button2 " onClick={this.handleTwoClick}> two</button>;
//     }
  
//     return (
//       <div>
//         {buttonOne}
//         {buttonTwo}
        
//         <Greeting isLoggedIn={isLoggedIn} />
        
//       </div>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;

//   switch(isLoggedIn) {
//     case 'one':
//         return <UserGreeting />;
        
//     case 'two':
//         return <Login />;
        
   
   
// }

//  }


export default Udemy;



// class Udemy extends Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
          
//      </div>

//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>
//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>

//         </div>
          
//          <div className="row">
//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>

//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>
//      <div className="col s4 m4 l4">
//          <div className="card">
          
//          <div className="container">
//          <h4><b>John Doe</b></h4> 
//          <p>Architect & Engineer</p> 
//          </div>
//          </div>
//      </div>
//         </div> 
//     </div>
      
//     );
//   }
// }
// export default Udemy;