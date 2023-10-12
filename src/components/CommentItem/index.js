// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggoleIsLiked, onDeleteIcon, key} = props
  const {name, comment, isLiked, id, bgColor} = commentDetails
  const intialLetter = name[0]

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'changedColor liked-button' : 'liked-button'
  const onClickLikedButton = () => {
    toggoleIsLiked(id)
  }

  const onDelete = () => {
    onDeleteIcon(id)
  }
  return (
    <li className="comment-item">
      <div className="first-line">
        <div className={bgColor}>
          <p className="intial-letter">{intialLetter}</p>
        </div>
        <p className="comment-name">{name}</p>
        <p className="comment-time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="comment-text">{comment}</p>
      <div className="images-container">
        <button onClick={onClickLikedButton} type="button" className={likeText}>
          <img src={likeImage} alt="like" className="like-image" />
          Like
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
