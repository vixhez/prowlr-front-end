import { connect } from 'react-redux';
import App from './App';

import { getAnimals } from '../../data/actions/api';


const mapStateToProps = ({ loaded }) => ({
    loaded, 
});

const mapDispatchToProps = dispatch => {
    return {
        getAnimals: () => dispatch(getAnimals()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);