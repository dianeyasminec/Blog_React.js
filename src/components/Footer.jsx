import React from 'react'

export default function Footer() {
  return (
   <div className="main-footer bg-warning text-light " > 
        <div className="container"> 
            <div className='row'> 
             
              <div className='col-md-3 col-sm-6'> 
              <h4> Contacts</h4>
                <ul className="list-unstyled"> 
                    <li>Mon: 9:30am - 2:30 pm</li>       
                    <li>Tues - Sat: 9:30am - 6:30pm</li> 
                           
                </ul>
            </div>  
            <div className='col-md-3 col-sm-6'> 
              <ul className="list-unstyled"> 
                    <li>Privacy Policy</li>       
                    <li>Terms of Service</li>     
                    <li>FAQs</li>     
                </ul>
              
              </div> 
            </div>
        
        
        
            <div className="footer-bottom">
                <p className="text-end"> 
                    &copy; {new Date().getFullYear()} Diane Compaore - All rights reserved.                
                </p>
            </div>
        </div>
        
   </div>
  )
}