import axios from 'axios'

interface Props {
  q?: string
}
export const searchAPI = async (props: Props) => {
  return await axios
    .get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'id',
        q: props.q,
        type: 'video',
        maxResults: 30,
        key: 'AIzaSyAkWvdYgp8Dro1RlMvJOUJe-UUUfDGkVNc'
      }
    })
    .then((res) => {
      return res.data.items
    })
}
