import { connect } from 'react-redux'
import Search from './search';
import { fetchObservations } from '../actions/observations_actions';

const mapSTP = ({ entities: {observations} }) => ({
  observations: Object.values(observations),
})

const mapDTP = dispatch => ({
  fetchObservations: () => dispatch(fetchObservations()),
})

export default connect(
  mapSTP,
  mapDTP,
)(Search);