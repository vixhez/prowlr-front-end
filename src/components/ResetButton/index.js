import { connect } from 'react-redux';
import ResetButton from './ResetButton';
import { resetApp } from "../../data/actions/state";

const mapDispatchToProps = ( dispatch ) => ({
        resetApp: () => dispatch(resetApp())
});

export default connect(null, mapDispatchToProps)(ResetButton);