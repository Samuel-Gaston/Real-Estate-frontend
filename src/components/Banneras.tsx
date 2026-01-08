import './All.css';

const Banneras = () => {
  return (
    <div>
             <div className='banneras'>
   <br />
<div className='flex flex-wrap justify-end'>
     <div className='x'>

 <h3 style={{fontSize:15, fontWeight:'bold', color:'white',}} >Find Home With Us</h3>
 <br />
    <h1 style={{fontSize:20, fontWeight:'bold', color:'white',}}>Find the right house from over
    <br /> 200 property opinions</h1>
    <button>Find Now</button>

 </div>
</div>
<br />

      <div className='flex flex-wrap justify-center'>
  <div className='nice border-white flex flex-wrap justify-center text-center' style={{marginTop:60, padding:20}}>
        
          <div className='right-nice'>
           <h4 style={{fontSize:20, color:'rgb(70, 148, 179) ', fontWeight:'bold',}}>Coming Soon</h4>
           <h4 style={{fontWeight:'bold', color:'white', fontSize:30}}>Explore Your Next Apartment with the aid of Contact Form</h4>
           <h4 style={{fontSize:17, marginTop:20, color:'white'}}>With the aid of CF, you can get more information how your next apartment would be before visiting</h4>
         <button style={{
            backgroundColor:'rgb(70, 148, 179)',
        width:80,
        height:40,
        border:'none',
       borderRadius:10,
     marginTop:10,
     color:'white'
         }}>Explore</button>
          </div>
         </div>
      </div>

   </div>
    </div>
  )
}

export default Banneras;