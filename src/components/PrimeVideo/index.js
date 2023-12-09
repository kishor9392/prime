import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="PImg"
      />
      <div className="bg2">
        <h1 className="h1">Action Movies</h1>
        <MoviesSlider data={moviesList} type="ACTION" />
      </div>

      <div className="bg2">
        <h1 className="h1">Comedy Movies</h1>
        <MoviesSlider data={moviesList} type="ACTION" />
      </div>
    </div>
  )
}

export default PrimeVideo
