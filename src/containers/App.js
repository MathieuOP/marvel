import { connect } from 'react-redux';
import App from 'components/App';

const mapStateToProps = state => ({
    error404: state.error404,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);