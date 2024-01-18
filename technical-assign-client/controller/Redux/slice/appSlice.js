import { createSlice } from '@reduxjs/toolkit'
import { KEY_STORE } from '../../../common/constants'
import { saveDataLocal } from '../../../common/function'

const initialState = {
  modal: null,
  userData: null,
  userAdmin: {
    username: 'admin',
    password: 'admin007',
    role: 'admin',
    accessToken: null,
  },
  acceptToken: null,
  language: 'en',
  sidebar: true,
  devMode: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      saveDataLocal(KEY_STORE.SET_USER, action.payload)
      state.userData = action.payload
    },
    setUserAdmin: (state, action) => {
      saveDataLocal(KEY_STORE.USER_ADMIN, action.payload)
      state.userAdmin = action.payload
    },
    setModal: (state, action) => {
      if (action.payload === null && state.modal?.afterClose) {
        state.modal?.afterClose()
      }
      state.modal = action.payload
    },
    setAcceptToken: (state, action) => {
      state.acceptToken = action.payload
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar
    },
  },
})

export const { setUserData, setModal, setAcceptToken, toggleSidebar, setLanguage, setUserAdmin, setDevMode } = appSlice.actions

export default appSlice.reducer
