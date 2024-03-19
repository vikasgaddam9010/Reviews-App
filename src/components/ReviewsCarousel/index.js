import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    id: 0,
  }

  onIncreament = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  onDecreament = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    if (id < reviewsList.length - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[id]
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="username">Reviews</h1>
          <div className="card">
            <button
              type="button"
              onClick={this.onIncreament}
              data-testid="leftArrow"
              className="btn"
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <div className="review-section">
              <img alt={username} src={imgUrl} />
              <p className="username">{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button
              type="button"
              onClick={this.onDecreament}
              data-testid="rightArrow"
              className="btn"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
