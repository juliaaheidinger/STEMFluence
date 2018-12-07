import { connect } from 'react-redux'
import { toggleBookmark } from '../duck/actions'
import Card from './Card'

const mapStateToProps = state => ({
  isBookmarked: state.isBookmarked,
  teaserData: state.teaserData
})

const mapDispatchToProps = {
  toggleBookmark
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
