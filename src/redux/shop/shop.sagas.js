/** @format */

import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.type";

import { collection, getDocs } from "firebase/firestore";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  const collectionRef = collection(db, "collections");

  try {
    const snapshot = yield getDocs(collectionRef);
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
