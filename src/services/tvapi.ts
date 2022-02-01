import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.tvmaze.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getShows(dt: string) {
    return apiClient.get('/schedule/web?date=' + dt)
  },
  getShowId(id: string) {
    return apiClient.get('/shows/' + id)
  }
}
