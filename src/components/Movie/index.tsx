import { NextPage } from 'next'
import YouTube, { Options } from 'react-youtube'
import { Props } from './interface'

const options: Options = {
  height: '390',
  width: '460',
  playerVars: {
    autoplay: 1
  }
}

export const Movie: NextPage<Props> = ({ id, onStateChange }: Props) => (
  <div className="text-red-500">
    <YouTube
      videoId={id}
      opts={options}
      onStateChange={(event) => onStateChange(event)}
    />
  </div>
)
