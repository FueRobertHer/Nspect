import { connect } from 'react-redux'
import Search from './search';
import { fetchObservations } from '../actions/observations_actions';
import { updateFilter } from '../actions/filter_actions';


const mapSTP = ({ entities: {observations} }) => ({
  observations: Object.values(observations),
})

const mapDTP = dispatch => ({
  fetchObservations: () => dispatch(fetchObservations()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapSTP,
  mapDTP,
)(Search);