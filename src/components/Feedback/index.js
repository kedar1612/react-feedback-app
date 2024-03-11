// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {selectFeedback: true}

  onClickEmoji = () => {
    this.setState({selectFeedback: false})
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="feedback-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-image"
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

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji-love" />

        <h1 className="thank-you">Thank You</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {selectFeedback} = this.state

    return (
      <div className="container">
        <div className="feedback-card">
          {selectFeedback ? this.renderFeedback() : this.renderThankYou()}
        </div>
      </div>
    )
  }
}

export default Feedback
