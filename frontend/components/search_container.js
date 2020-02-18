import { connect } from 'react-redux'
import Search from './search';
import { fetchObservations } from '../actions/observations_actions';
import { updateFilter } from '../actions/filter_actions';


const mapSTP = ({ entities: {observations}, ui: {filters: {taxa}} }) => ({
  observations: Object.values(observations),
  taxa
})

const mapDTP = dispatch => ({
  fetchObservations: () => dispatch(fetchObservations()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapSTP,
  mapDTP,
)(Search);