import { loadFromLocalStorage } from './operations'
import { createReducer } from 'redux-starter-kit'
import campaignData from '../data/campaignData.json'
import { toggleBookmark } from './actions'

const initialState = {
  teaserData: loadFromLocalStorage('campaignData') || campaignData
}

export default createReducer(initialState, {
  [toggleBookmark]: (state, action) => {
    const id = action.payload
    const index = state.teaserData.findIndex(card => card.id === id)
    const cardObj = state.teaserData[index]
    console.log(index)
    return {
      ...state,
      teaserData: [
        ...state.teaserData.slice(0, index),
        { ...cardObj, isBookmarked: !cardObj.isBookmarked },
        ...state.teaserData.slice(index + 1)
      ]
    }
  }
})
