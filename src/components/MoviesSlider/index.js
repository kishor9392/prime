import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const MoviesSlider = props => {
  const {data, type} = props
  return (
    <Slider {...settings}>
      {data.map(each => (
        <MovieItem key={each.id} data={each} t={type} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
