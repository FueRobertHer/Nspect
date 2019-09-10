import { connect } from 'react-redux'
import Search from './search';
// import { fetchBenches } from '../actions/bench_actions';

const mapStateToProps = ({ entities: {benches} }) => ({
  benches: Object.values(benches),
})

const mapDispatchtoProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(Search);