import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { searchAPI } from '../api/youtube'
import Layout from '../components/Layout'
import { Movie } from '../components/Movie'

const Home: NextPage = () => {
  const [movies, setMovies] = useState<any[]>([])
  const [current, setCurrent] = useState<number>(0)
  // const [history, setHistory] = useState<[]>([])
  const getVideo = useCallback(async () => {
    const results = await searchAPI({ q: 'yunomi' })
    setMovies(results)
    console.log(results)
  }, [setMovies])

  let timer: number = 0
  const onStateChange = (event: any) => {
    const currentTime = event.target.getCurrentTime()
    if (currentTime < 20) {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => onStateChange(event), 1000)
      console.log(currentTime)
    } else {
      setCurrent(current + 1)
    }
  }

  const handleNextMovie = useCallback(() => {
    if (movies.length === current + 1) {
      setCurrent(0)
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getVideo()
    } else {
      setCurrent(current + 1)
    }
  }, [movies, current])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getVideo()
  }, [getVideo])

  return (
    <Layout>
      <h1>youtube_cruise</h1>
      {movies.length !== 0 ? (
        <Movie id={movies[current]?.id.videoId} onStateChange={onStateChange} />
      ) : (
        <>
          <p>loading</p>
        </>
      )}
      <button onClick={handleNextMovie}>next</button>
    </Layout>
  )
}

export default Home
