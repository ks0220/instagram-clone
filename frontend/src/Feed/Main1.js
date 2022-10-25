import { useState } from 'react';
import './MainFeed.css';
import { BsHeart, BsChat } from 'react-icons/bs'
import { IoPaperPlaneOutline } from "react-icons/io5";
import { VscEllipsis } from "react-icons/vsc";
import { BiBookmark } from "react-icons/bi";
import FeedContainer from './FeedContainer';

const Main1 = () => {

    const [showMore, setShowMore] = useState(false);
    const text = "  #감성사진 #일본감성 #비오는날 #골목길 #소니 #a7iv "
        + " #sel55f18z #교토 #교토여행 #일본여행 #여행스타그램 #rainyday"
        + " #streetclassics #streetphotography #sonyimages #kyoto"
        + " #travelphotography #ig_kyoto #visitjapanjp #雨の日";

    return (
        <div className="main_feed">
            <div className="feed_name">
                <div className="profile_box">
                    <img className="profile_img" src="https://i.pinimg.com/originals/16/29/dc/1629dc000aa96e157258650389cf4818.jpg" alt='profile' />
                </div>
                <span className="feed_name_txt"> iuk_i </span>
                <p className='feed_menu'><VscEllipsis /></p>
            </div>
            <div className="border feed_box">
                <div className='feed-img-box'>
                    <img className="feed_img" src="./img/21.jpg" alt='feed_img' />
                </div>
                <div className="feed_content">
                    <button className='likebt'>
                        <BsHeart />
                    </button>
                    <button className='rebt'>
                        <BsChat />
                    </button>
                    <button className='dmbt'>
                        <IoPaperPlaneOutline />
                    </button>
                    <button className='bookmark'>
                        <BiBookmark />
                    </button>
                    <div className="feed_like">
                        <p><b>좋아요 10개</b></p>
                    </div>
                    <div className='feed_txt'>
                        <b>iuk_i</b> 일본 여행 가고 싶다~
                    </div>
                    <div className='Hash'>
                        {showMore ? text : `${text.substring(0, 32)}`}
                        <button className='btn' onClick={() => setShowMore(!showMore)}>
                            {showMore ? "닫기" : "...더보기"}
                        </button>
                    </div>
                    <div className='time'>
                        6시간 전
                    </div>
                    <div>
                        <FeedContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main1;