import React from 'react';
import './addPost.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className="addPost">

        <div className="addPostContainer">

            <div className="addPostTop">
                <img src="/images/IMGTharindu.jpeg" alt="" className="addPostPic" />
                <input placeholder='what is in your mind?' type="text" className="addPostInput" />
            </div>

            <hr className="posthr" />
            
            <div className="addPostBottom">

                <div className="addPostOptions">

                    <div className="addPostOption">
                            <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
                            <span className="addPostOptionText">Add Photo/Video</span>
                    </div>
                    <div className="addPostOption">
                            <AddLocationAltIcon htmlColor='red' className='addLocation'/>
                            <span className="addPostOptionText">Add Location</span>
                    </div>
                    <div className="addPostOption">
                            <LocalOfferIcon htmlColor='blue' className='addTag'/>
                            <span className="addPostOptionText">Add Tag</span>
                    </div>
                    <div className="addPostOption">
                            <LiveTvIcon htmlColor='tomato' className='goLive'/>
                            <span className="addPostOptionText">Go Live</span>
                    </div>
                    <button className="postButton">Post</button>
                </div>

                
                    
                

            </div>
        </div>
    </div>
  )
}
