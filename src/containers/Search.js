import { connect } from 'react-redux';
import Search from 'components/Search';

import { onChange } from 'store/actions';

const mapStateToProps = state => ({
    inputValue: state.inputValue,
    loadingSearch: state.loadingSearch,
    heroes: state.heroes,
});

const mapDispatchToProps = dispatch => ({
    onChange: (inputValue) => {
        dispatch(onChange(inputValue));
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);