import React ,{useState,useRef}from 'react'
import '../css/home.css'

function ClothImage() {
    const [desiredImg,setDesiredImg]=useState([])
console.log('✌️desiredImg --->', desiredImg);
    const inputRef=useRef()

    const handleImageSelection=(e)=>{
        const img=e.target.files;
console.log('✌️img --->', img);
    const newFiles = Array.from(img).map((file) => ({
        file, // Store the file object
         url: URL.createObjectURL(file), // Create a URL for each file
    }));
    setDesiredImg(newFiles)
        
    }

    const handleURL=(e)=>{
        const imgUrl=e.target.value;
        setDesiredImg(imgUrl)
    }


  return (
    <div className='cloth-img'>
       <h1>cloth Image</h1>
        <p>select a cloth image to try on</p>

        <input type="file"
             multiple
             hidden
             onChange={handleImageSelection}
             ref={inputRef}/>

        <button className='cloth-btn center cloth-btns-designs' onClick={()=>{inputRef.current.click()}}>click here to upload an image </button>

        <div className='url-box'>
            <input  type="text" className='input-design' placeholder='paste image URL here' onChange={handleURL} />
            <button className='cloth-btns-designs'>enter</button> 
        </div>
       
    </div>
  )
}

export default ClothImage
