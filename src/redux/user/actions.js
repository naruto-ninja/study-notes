import * as constants from '@/redux/constants'
import axios from '@/lib/axios'
import { message } from 'antd'
import api from '@/api/index'

export const login = params => {
  return dispatch =>
    axios.post(api['login'], params).then(res => {
      if (res.code === 200) {
        localStorage.setItem('token', res.token)
        dispatch({ type: constants.USER_LOGIN, payload: { token: res.token } })
      } else {
        message.error(res.message)
      }
      return res
    })
}

export const register = params => {
  return dispatch =>
    axios.post(api['register'], params).then(res => {
      if (res.code === 200) message.success(res.message)
      else message.error(res.message)
      return res
    })
}

export const updateUser = params => {
  return dispatch =>
    axios.put(`${api['user']}/${params.userId}`, params).then(res => {
      if (res.code === 200) {
        message.success(res.message)
        localStorage.setItem('token', res.token)
        dispatch({ type: constants.USER_LOGIN, payload: { token: res.token } })
      } else message.error(res.message)
      return res
    })
}

export const logout = () => {
  localStorage.removeItem('token')
  return { type: constants.USER_LOGINOUT }
}
