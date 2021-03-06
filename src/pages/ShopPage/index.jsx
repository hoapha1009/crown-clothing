import ErrorBoundary from 'components/error-boundary/error-boundary.component';
import Spinner from 'components/Spinner/spinner.component';
import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchCollectionsStart } from 'redux/shop/shopActions';
import './styles.scss';

const CollectionOverviewContainer = lazy(() =>
    import('components/CollectionOverview/collection-overview.container')
);
const CollectionPageContainer = lazy(() =>
    import('pages/CollectionPage/collection-page.container')
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <Switch>
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Route
                        exact
                        path={match.path}
                        component={CollectionOverviewContainer}
                    />
                    <Route
                        path={`${match.path}/:collectionId`}
                        component={CollectionPageContainer}
                    />
                </Suspense>
            </ErrorBoundary>
        </Switch>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
