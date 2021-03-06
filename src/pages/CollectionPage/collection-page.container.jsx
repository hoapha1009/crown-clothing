import WithSpinner from 'components/with-spinner';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectIsCollectionsLoaded } from 'redux/shop/shopSelectors';
import { createStructuredSelector } from 'reselect';
import CollectionPage from '.';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
