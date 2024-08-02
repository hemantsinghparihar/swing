import React from 'react'
import '../css/footer.css'

function Footer() {
  return (
    <div className='foot'>
      <div className="foot-content">
        <div className="about">
          <h2 className='.black-heading'>Swing</h2>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eos placeat perferendis asperiores possimus reiciendis iste deleniti fuga hic quia.</p>
        </div>
        <div className="contact">
          <h2 className='.black-heading'>contact</h2>
          <br />
            <p>hemant@gmail.com</p>
            <p>90 Bedford Street at the corner of Grove Street.</p>
        </div>
        <div className="follow">
            <h2 className='.black-heading'>Follow Us On</h2>
            <br />

        </div>
      </div>
    </div>
  )
}

export default Footer
