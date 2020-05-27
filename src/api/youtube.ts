import axios from 'axios'

interface Props {
  q?: string
}
export const searchAPI = async (props: Props) => {
  return await axios
    .get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: props.q,
        key: 'AIzaSyBaSBGsdnm1s1TWfOn2HTsU4_5xNKjJ_eg'
      }
    })
    .then((res) => {
      return res.data.items[0]
    })
}
