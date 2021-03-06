import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import navigation from './navigation'
import blog from './blog'
import blogPost from './blogPost'
import writePost from './writePost'
import user from './user'

export default combineReducers({
  navigation,
  blog,
  blogPost,
  writePost,
  form,
  user
})
