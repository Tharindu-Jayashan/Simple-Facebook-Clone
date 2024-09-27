import React from 'react';
import './post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">

            <div className="postTop">
                <img src="/images/IMGJayashan.jpg" alt="" className="postImage" />
                <span className="postUserName">Tharindu Jayashan</span>
                <span className="postTime">5 min ago</span>
            </div>

            <div className="postCenter">
                <div className="postCaption">
                    Hellow I'am tharindu Jayashan..
                </div>
                <img src="/images/IMGJayashan.jpg" alt="" className="postedImage" />
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.png" alt="" className="reactionPic" />
                    <img src="/images/heart.png" alt="" className="reactionPic" />
                    <img src="/images/wow.png" alt="" className="reactionPic" />
                    <img src="/images/care.png" alt="" className="reactionPic" />
                    <span className="likeCount">You and 225 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">
                        15 comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
