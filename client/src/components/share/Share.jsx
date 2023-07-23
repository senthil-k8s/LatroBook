import "./share.css";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function Share() {
  return (
    <div className="share">

        <div className='shareWrapper'>

            <div className="shareTop">
                <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input placeholder='Share Your Thoughts Here..' className='shareInput' />
            </div>

            <hr className="sharehr" />

            <div className="shareBottom">

                   <div className="shareOptions">
                        <div className="shareOption">
                            <AddAPhotoIcon htmlColor="gray" className="shareIcon"/>
                            <span className="shareOptionText"> Take a Picture </span>
                        </div>

                        <div className="shareOption">
                            <AddPhotoAlternateIcon htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText"> Photo / Video </span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="gold" className="shareIcon"/>
                            <span className="shareOptionText"> Emoji </span>
                        </div>

                        <div className="shareOption">
                            <AddLocationIcon htmlColor="red" className="shareIcon"/>
                            <span className="shareOptionText"> Location </span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
    
  )
}
