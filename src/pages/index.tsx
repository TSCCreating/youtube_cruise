import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { searchAPI } from '../api/youtube'
import Layout from '../components/Layout'
import { Movie } from '../components/Movie'

const Home: NextPage = () => {
  const [movie, setMovie] = useState<any>()
  const getVideo = useCallback(async () => {
    const results = await searchAPI({ q: '嶺上開花' })
    setMovie(results)
  }, [setMovie])
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getVideo()
  }, [getVideo])
  return (
    <Layout>
      <h1>youtube_cruise</h1>
      <Movie id={movie?.id.videoId} />
    </Layout>
  )
}

export default Home
