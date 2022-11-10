import React, { useState } from 'react';
import image1 from '../assets/image1.png';


export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
      

      <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Best Policies in One Place</h1>
        <h4 className='mb-4'>Offers a range of life plans and policies to help you protect you and your familiy</h4>
        <a className='btn btn-primary' href='https://www.policy.com/terms-and-conditions' role='button'>
Know more        </a>
        <img className="card-img" src={image1} alt="life quote"/>


      </div>


    </header>
  );
}



































// import React,{ Component} from "react";
// import image1 from '../assets/image1.png';

// export default class Home extends Component{
//     render(){
//         return(
//             <div>
//         <div className="container-1">
//             <h1 className="title-home">Best Policies in One Place</h1>
//             <p className="title-sub">Offers a range of life plans and policies to help you protect you and your familiy</p>
//             <div className="button-h">
//             <a href="https://www.policy.com/terms-and-conditions" class="btn btn-primary">Know More</a>
//             <hr className="my-2" />
//             </div>
//         </div>
    
        
          
//             <footer className="text-center text-black" style={{backgroundColor: "#f1f1f1"}}>

//             <div className="container pt-4">
            
  
        
              
//             </div>
      
//             <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
//               © 2020 Copyright:
//               <a className="text-dark" href="https://policyteam.com/">policyTeam.com</a>
//             </div>
    
//           </footer>
//           </div>
            
//           )
//     }
// }