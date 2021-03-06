import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './store';
import {RootState} from './rootReducer';
import {loadNearby, loadReviews, updateFavoriteRoom} from './room-data/room-data';
import {requireAuthorization, setUserData} from './user-process/user-process';
import {saveToken, dropToken} from '../services/token';
import {redirectToRoute} from './action';
import {clearFavorites, updateFavorites} from './favorites-data/favorites-data';
import {updateFavoriteOffer} from './offers-data/offers-data';
import {errorServerHandle} from '../services/error-handle';
import {APIRoute, AppRoute, AuthorizationStatus, ApiActions, NameSpace} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {AppDispatch} from '../types/state';
import {ReviewData} from '../types/review-data';
import {OfferDTO} from '../types/offer';
import {ReviewDTO} from '../types/review';

export const checkAuthAction = createAsyncThunk<
    void,
    void,
    {dispatch: AppDispatch}
  >(ApiActions.CheckAuth, async (_, {dispatch}) => {
    try {
      const {data} = await api.get(APIRoute.Login);

      dispatch(setUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorServerHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  });

export const loginAction = createAsyncThunk<
    void,
    AuthData,
    {dispatch: AppDispatch}
  >(ApiActions.Login, async ({email, password}, {dispatch}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});

      saveToken(data.token);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorServerHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  });

export const logoutAction = createAsyncThunk<
    void,
    void,
    {dispatch: AppDispatch}
  >(ApiActions.Logout, async (_, {dispatch}) => {
    try {
      await api.delete(APIRoute.Logout);

      dropToken();

      dispatch(clearFavorites());
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorServerHandle(error);
    }
  });

export const fetchNearbyAction = createAsyncThunk<
    void,
    number,
    {dispatch: AppDispatch}
  >(ApiActions.FetchNearby, async (id, {dispatch}) => {
    try {
      const {data} = await api.get<OfferDTO[]>(`${APIRoute.Offers}/${id}/nearby`);

      dispatch(loadNearby(data));
    } catch (error) {
      errorServerHandle(error);
    }
  });

export const fetchReviewsAction = createAsyncThunk<
    void,
    number,
    {
      dispatch: AppDispatch,
    }
  >(ApiActions.FetchReviews, async (id, {dispatch}) => {
    try {
      const {data} = await api.get<ReviewDTO[]>(`${APIRoute.Comments}${id}`);

      dispatch(loadReviews(data));
    } catch (error) {
      errorServerHandle(error);
    }
  });


export const postNewReviewAction = createAsyncThunk<
  ReviewDTO[],
  ReviewData,
  {
    state: RootState,
    rejectValue: undefined,
  }
  >(ApiActions.postNewReview, async ({comment, rating}, {getState, rejectWithValue}) => {
    try {
      const {id} = getState()[NameSpace.RoomData].room as OfferDTO;

      const {data} = await api.post<ReviewDTO[]>(`${APIRoute.Comments}${id}`, {comment, rating});

      return data;
    } catch (error) {
      errorServerHandle(error);

      return rejectWithValue(undefined);
    }
  });

export const addToFavoritesAction = createAsyncThunk<
  OfferDTO,
  OfferDTO,
  {
    state: RootState,
    dispatch: AppDispatch,
    rejectValue: undefined,
  }
  >(ApiActions.addToFavorites, async (offer, {rejectWithValue, dispatch}) => {
    const {id, isFavorite} = offer;

    try {
      const {data} = await api.post<OfferDTO>(`${APIRoute.Favorite}/${id}/${Number(!isFavorite)}`);

      dispatch(updateFavorites(data));
      dispatch(updateFavoriteOffer(data));
      dispatch(updateFavoriteRoom(data));

      return data;
    } catch (error) {
      errorServerHandle(error);

      return rejectWithValue(undefined);
    }
  });
