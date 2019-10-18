import { connect } from 'react-redux';
import Hero from 'components/Hero';

import { getHeroById, removeHero } from 'store/actions';

const mapStateToProps = state => ({
    hero: state.hero,
    loadedHero: state.loadedHero
});

const mapDispatchToProps = dispatch => ({
    getHeroById: (heroId) => {
        dispatch(getHeroById(heroId));
    },
    removeHero: () => {
        dispatch(removeHero())
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);