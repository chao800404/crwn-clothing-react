/** @format */

import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import Spinner from "../../components/with-spinner/spinner.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js";
import { connect } from "react-redux";

const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
