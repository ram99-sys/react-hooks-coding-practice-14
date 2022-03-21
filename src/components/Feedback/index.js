import {useState} from 'react'
import './index.css'

const Feedback = props => {
  const [feedback, setFeedback] = useState(false)

  const onClickEmoji = () => {
    setFeedback(prevState => !prevState)
  }

  const renderEmojisScreen = () => {
    const {resources} = props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" className="button" onClick={onClickEmoji}>
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-sizing"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderThankYouScreen = () => {
    const {resources} = props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="image-sizing" />
        <h1 className="thank-you-heading">Thank you</h1>
        <p className="feedback-heading">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="card-container">
        {feedback ? renderThankYouScreen() : renderEmojisScreen()}
      </div>
    </div>
  )
}

export default Feedback
