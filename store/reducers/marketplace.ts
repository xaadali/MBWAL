import { createSlice } from "@reduxjs/toolkit";

export type MarketplaceTypes = {
  marketplace: any,
  highestVote:any,
  favouriteMarketplace: any;
};

const initialState : MarketplaceTypes = {
  marketplace: [],
  highestVote: [],
  favouriteMarketplace: []
};
export const MarketplaceSlice = createSlice({
  name: "Marketplace",
  initialState,
  reducers: {
    saveMarketplace(state, action) {
      state.marketplace = action.payload;
    },
    saveHighestVote(state, action) {
      let FilterHighestVote = action.payload;
      let findMaxVoteObject:any = {};
      let max = 0;
      for (let i = 0; i < FilterHighestVote.length; ++i) {
        if (Number(FilterHighestVote[i].votes) > max) {
          max = Number(FilterHighestVote[i].votes);
          findMaxVoteObject = FilterHighestVote[i];
        }
      }
      if (Object.keys(findMaxVoteObject)?.length === 0) {
        state.highestVote = [];
      } else {
        state.highestVote = [findMaxVoteObject];

      }
    },
    saveFavoriteMarketplace(state, action) {
      state.favouriteMarketplace = action.payload;
    },
  },
});
export const { saveMarketplace, saveHighestVote, saveFavoriteMarketplace } = MarketplaceSlice.actions;
export default MarketplaceSlice.reducer;
