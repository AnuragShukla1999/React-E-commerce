import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">

                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>

        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem labore sunt minus recusandae commodi corrupti enim saepe maxime placeat! Eos temporibus esse aspernatur eius sequi eum quos quidem mollitia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore ad laborum maxime veritatis eaque officia atque dolores culpa accusantium distinctio mollitia officiis sint nostrum, repudiandae nobis explicabo natus totam!</p>
        </div>
    </div>
  )
}

export default DescriptionBox