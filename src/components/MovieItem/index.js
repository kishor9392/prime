import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {data, t} = props
  const {thumbnailUrl, videoUrl, categoryId} = data

  return (
    <>
      {t === categoryId ? (
        <li className="li">
          <Popup modal trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
            {close => (
              <>
                <div>
                  <ReactPlayer url={videoUrl} />

                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                    data-testid="closeButton"
                  >
                    <IoMdClose />
                    Close
                  </button>
                </div>
              </>
            )}
          </Popup>
        </li>
      ) : (
        ''
      )}
    </>
  )
}

export default MovieItem
