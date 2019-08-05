import * as constants from '@/redux/constants'
import axios from '@/lib/axios'
import api from '@/api/index'

export const getTags = () => {
  return dispatch =>
    axios.get(api['tagList']).then(res => {
      dispatch({ type: constants.TAG_GETLIST, payload: res.data })
    })
}

export const getCategories = () => {
  return dispatch =>
    axios.get(api['categoriesList']).then(res => {
      dispatch({ type: constants.CATEGORY_GETLIST, payload: res.data })
    })
}

