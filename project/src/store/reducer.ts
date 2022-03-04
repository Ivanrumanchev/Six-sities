import {createReducer} from '@reduxjs/toolkit';
import {paris, cologne, brussels, amsterdam, hamburg, dusseldorf} from './action';
import {FilterType} from '../const';
import {offers} from '../mocks/offers';
import {filter} from '../utils/filter';

const filteredOffers = filter(offers);

const initialState = {
  city: FilterType.Paris,
  offers: filteredOffers[FilterType.Paris],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(paris, (state) => {
      state.city = FilterType.Paris;
      state.offers = filteredOffers[FilterType.Paris];
    })
    .addCase(cologne, (state) => {
      state.city = FilterType.Cologne;
      state.offers = filteredOffers[FilterType.Cologne];
    })
    .addCase(brussels, (state) => {
      state.city = FilterType.Brussels;
      state.offers = filteredOffers[FilterType.Brussels];
    })
    .addCase(amsterdam, (state) => {
      state.city = FilterType.Amsterdam;
      state.offers = filteredOffers[FilterType.Amsterdam];
    })
    .addCase(hamburg, (state) => {
      state.city = FilterType.Hamburg;
      state.offers = filteredOffers[FilterType.Hamburg];
    })
    .addCase(dusseldorf, (state) => {
      state.city = FilterType.Dusseldorf;
      state.offers = filteredOffers[FilterType.Dusseldorf];
    });
});

export {reducer};
