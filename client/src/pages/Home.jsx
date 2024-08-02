import React,{useState,useEffect} from 'react'
import '../css/home.css'
import DragDrop from '../components/DragDrop'
import ClothImage from '../components/ClothImage'
import Footer from '../components/Footer.jsx'
import services from '../services/homeServices.js'

function Home() {
  const [tryOn,setTryOn]=useState(false)
  const [exportBtn,setExportBtn]=useState(false)


  const handleTryOn=(e)=>{
    setTryOn(!tryOn);
     
  }
  const handleClose=(e)=>{
    setTryOn(!tryOn);
  }


  const handleExport=(e)=>{
    setExportBtn(!exportBtn)
  }
  return (
    <div className='container'>
      <section className='upload-sec'>
        <h2>Your Picture</h2>
        <p>upload a photo of yourself to try on cloths virtually</p>
        <DragDrop/>
        <ClothImage/>
       
      </section>

    <div className="try-on">
        <button onClick={handleTryOn} className='cloth-btns-designs'> Try On</button>
    </div>

    {tryOn && 
     <div className="result-outer-modal">
         
         <div className='result-modal'>
           <div className="close" onClick={handleClose}>
            X
           </div>

           <div className="res-img">
              <img src="https://images.unsplash.com/photo-1720663929380-d4ec24253069?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

           </div>

           <div className="res-func">
              <button onClick={handleExport} className='export-btn'>Export</button>

           </div>

           {exportBtn && 
            <div className='export-options'>

            </div>
           }

        </div>
     </div>
    }

    
  
    
    </div>
  )
}

export default Home
