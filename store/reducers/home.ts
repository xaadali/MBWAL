import { createSlice } from "@reduxjs/toolkit";

export type HomeTypes = {
  coinData: [],
  refferalCode: "",
  normalWalletAddress: "",
  marketplace: [],
  allNews: [],
  singleNews: [],
  cart: any,
  chains: [],
  topRatedNews: [],
  promoteCoins: [],
  trendingCoin: [],
  loading: false,
  advertisement: [],
  partner: [],
  clonedTableData: [],
  SuperCharged: [],
  superChargedStatus: false
};



const initialState: HomeTypes = {
  coinData: [],
  refferalCode: "",
  normalWalletAddress: "",
  marketplace: [],
  allNews: [],
  singleNews: [],
  cart: [],
  chains: [],
  topRatedNews: [],
  promoteCoins: [],
  trendingCoin: [],
  loading: false,
  advertisement: [],
  partner: [],
  clonedTableData: [],
  SuperCharged: [],
  superChargedStatus: false
};
export const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {
    tableData(state, action) {
      let payloadCoind = action.payload;
      // if ()
      let CoinPayload = payloadCoind?.map((item, index) => {
        let filterValue = state.SuperCharged?.some((element:any) => (item?.name === element?.name))
        let filterObject;
        if (filterValue) {
          filterObject = {
            ...item,
            superCharged: true,
            count: ((index) + Number(1))
          }
        } else {
          filterObject = {
            ...item,
            superCharged: false,
            count: ((index) + Number(1))
          }
        }
        return filterObject;
      })
      state.coinData = CoinPayload;
    },
    saveSuperCharged(state, action) {
      state.SuperCharged = action.payload
    },
    referralCode(state, action) {
      state.refferalCode = action.payload;
    },
    saveTrendingCoin(state, action) {
      state.trendingCoin = action.payload;

    },
    promotedCoin(state, action) {
      state.promoteCoins = action.payload;
    },
    saveChain(state, action) {
      state.chains = action.payload;
    },

    normalWallet(state, action) {
      state.normalWalletAddress = action.payload;
    },
    marketplaceData(state, action) {
      state.marketplace = action.payload;
    },

    saveNews(state, action) {
      state.allNews = action.payload;
    },
    singleNews(state, action) {
      state.singleNews = action.payload;
    },
    saveAdvertisement(state, action) {
      state.advertisement = action.payload;
    },
    savePartners(state, action) {
      state.partner = action.payload;
    },
    topVoteNews(state, action) {
      state.topRatedNews = action.payload;
    },
    saveclonedTableData(state, action) {
      state.clonedTableData = action.payload;
    },
    saveLoading(state, action) {
      state.loading = action.payload;
    },
    saveCart(state, action) {
      state.cart = state?.cart
        ? [...state?.cart, action?.payload]
        : [action?.payload];
    },
    deleteCart(state, action) {
      const filterArray = state?.cart.filter(
        (element) => element.id != action.payload.id
      );
      state.cart = filterArray;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});
export const {
  tableData,
  referralCode,
  normalWallet,
  marketplaceData,
  saveNews,
  singleNews,
  saveCart,
  deleteCart,
  clearCart,
  saveChain,
  saveSuperCharged,
  topVoteNews,
  saveLoading,
  saveAdvertisement,
  savePartners,
  saveclonedTableData,
  saveTrendingCoin,
  promotedCoin
} = HomeSlice.actions;
export default HomeSlice.reducer;
