import React,{useState}from 'react'
import LabPage from './LabPage';
import Door from './Door';


const CenterBody = () => {
    const [password,setpassword]= useState('');
    const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    console.log(setpassword);
   

    const handlePasswordChange = (e) => {
        setpassword(e.target.value);
      };
      const handleFormSubmit=(e)=>{
        e.preventDefault();
        const correctPassword='Anurag';
        if(password===correctPassword){
          setIsAuthenticated(true);
          
        }else{
          setErrorMessage( 'Incorrect password. Please try again.');
        }

      }
      
    

  return (
   <>
    <div className="circle ">
            <img className='image' src="https://media.istockphoto.com/id/1251541478/vector/fingerprint-simple-black-icon-authentication-symbol-line-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=UeGH8K4hEcC-Z7-xnsnN_ryGsFYnpgqzMjh0WjJ2BIA=" />
         <h4 className='head'> ENTER YOUR PILEARNING PASSWORD</h4>
         {!isAuthenticated && (
          
         <form  className='form-main'>
         <input className='form'type="password" onChange={handlePasswordChange} />
         </form>
         )}
         <button className='button' onClick={handleFormSubmit}>Enter Lab</button>
         {errorMessage && <div>{errorMessage}</div>}
      {isAuthenticated && <LabPage />}
        </div>
   </>
  )
}

export default CenterBody;