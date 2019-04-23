import React, { Component } from 'react'
import './style.scss'

// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.renderSlide = this.renderSlide.bind(this)
    this.createSlides = this.createSlides.bind(this)
    this.goToSlide = this.goToSlide.bind(this)
    this.goToPrevSlide = this.goToPrevSlide.bind(this)
    this.goToNextSlide = this.goToNextSlide.bind(this)

    this.state = {
      activeIndex: 0,
      slideData: [{name:test1}],
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }
    ++index;

    this.setState({
      activeIndex: index
    });
  }

  renderSlide(index) {
    let data = this.state.slideData[index]
    return (
        <section>
          <h3>{data.name}</h3>
        </section>
      )
  }

  render() {
    return (
      <div className="carousel">
        {this.renderSlide(this.state.activeIndex)}
      </div>
    );
  }
}

export default Carousel
