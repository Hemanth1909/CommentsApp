import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentsList: [], bgColor: ''}

  onChangeNameInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({comment: event.target.value})
  }

  onClickSubmittButton = () => {
    const {name, comment, bgColor} = this.state
    const background = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      bgColor: initialContainerBackgroundClassNames[background],
    }
    console.log(newComment)
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggoleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteIcon = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => id !== eachComment.id,
      ),
    }))
  }

  render() {
    const {name, comment, commentsList, id} = this.state

    return (
      <form className="all-back">
        <div className="top-part">
          <div className="comments-part">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <div className="input-container">
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeNameInput}
                value={name}
              />
              <textarea
                type="text"
                rows="8"
                cols="20"
                placeholder="Your Comment"
                className="comment-input"
                onChange={this.onChangeCommentInput}
                value={comment}
              />
              <button
                type="button"
                className="add-button"
                onClick={this.onClickSubmittButton}
              >
                Add Comment
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <p>
          <span className="comments-count">{commentsList.length}</span>
          comments
        </p>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              toggoleIsLiked={this.toggoleIsLiked}
              onDeleteIcon={this.onDeleteIcon}
              key={eachComment.id}
            />
          ))}
        </ul>
      </form>
    )
  }
}

export default Comments
