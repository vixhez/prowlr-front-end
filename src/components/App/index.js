import { connect } from 'react-redux';
import App from './App';

import { getAnimals } from '../../data/actions/api';


const mapStateToProps = ({ loaded, finished }) => ({
    loaded, 
    finished
});

const mapDispatchToProps = dispatch => {
    return {
        getAnimals: () => dispatch(getAnimals()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);