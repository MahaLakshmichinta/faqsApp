// Write your code here.

import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderActiveAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="para">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickPlus = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImg = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE

    const text = isActive ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.onClickPlus}>
        <img alt={text} className="image" src={image} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="list-items">
        <div className="card-list">
          <h1 className="heading-ques">{questionText}</h1>
          {this.renderActiveImg()}
        </div>
        {this.renderActiveAnswer()}
      </li>
    )
  }
}
export default FaqItem
