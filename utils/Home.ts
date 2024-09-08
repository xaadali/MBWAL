import { HTTP_CLIENT } from "../utils/request";
const homeTableData = async (todayHot, launchDate, marketCap, audited, presale, address) => {
  return await HTTP_CLIENT.get(
    `/coins-management/get-all-coins?walletAddress=${address ? address : ""}`,
    {
      params:
        marketCap === true
          ? {
            marketCap: true,
          }
          : launchDate === true
            ? {
              launchDate: true,
            }
            : todayHot === true
              ? {
                todaysHot: true,
              }
              : audited === true
                ? {
                  audited: true
                }
                : presale === true
                  ? {
                    presale: true
                  }
                  : ""
    }
  );
};



const handleUserReferral = async (param) => {
  return await HTTP_CLIENT.post("/user", param);
};

const getSingleCoinDetail = async (address, name) => {
  return await HTTP_CLIENT.get(`/coins-management/get-coin-detail?walletAddress=${address ? address : ""}&symbol=${name}`);
};

const handleNormalWallet = async (param) => {
  return await HTTP_CLIENT.get("/system-wallet", param);
};

const fetchChain = async (param) => {
  return await HTTP_CLIENT.get("/chain");
};

const topcoin = async () => {
  return await HTTP_CLIENT.get("/coins-management/get-top-market-coins");
};

const getMarketplace = async (address) => {
  return await HTTP_CLIENT.get(`/marketplace?userAddress=${address ? address : ""}`);
};

const getTopMarketplace = async (address) => {
  return await HTTP_CLIENT.get(`/marketplace/getTop?userAddress=${address}`);
};



const handleNews = async () => {
  return await HTTP_CLIENT.get("/news");
};
const addNewsletter = async (param) => {
  return await HTTP_CLIENT.post("/newsletter", param);
};
const addNewsVote = async (id, vote) => {
  return await HTTP_CLIENT.get(`/news/update-votes/${id}/${vote}`);
};

const aaddFavorit = async (id, address, favorit) => {
  return await HTTP_CLIENT.get(`/marketplace/${id}/${address}/${favorit}`);
};

const addToCard = async (param) => {
  return await HTTP_CLIENT.post("/promotions/bulk", param);
};

const validateDiscountCode = async (param) => {
  return await HTTP_CLIENT.get(`/coupon/${param}`);
};
const addSponsors = async () => {
  return await HTTP_CLIENT.get("/powered-by");
};
const getAdvertisement = async () => {
  return await HTTP_CLIENT.get("/advertise");
};

const getTotalContribute = async (symbol, address, type) => {
  return await HTTP_CLIENT.get(`/coin-vote-history/total-votes?walletAddress=${address ? address : ""}&id=${symbol ? symbol : ""}&type=${type ? type : ""}`)
}

const getUserOwnedToken = async (address) => {
  if (address) {
    return await HTTP_CLIENT.get(`/moralis/token/${address}`)
  }
}

const getUserPoolStatus = async (address) => {
  return await HTTP_CLIENT.get(`/customer-pool/user/${address ? address : null}`)
}
//
export {
  homeTableData,
  handleUserReferral,
  handleNormalWallet,
  getMarketplace,
  handleNews,
  addNewsletter,
  addToCard,
  topcoin,
  addSponsors,
  fetchChain,
  addNewsVote,
  aaddFavorit,
  getAdvertisement,
  getTotalContribute,
  getTopMarketplace,
  getSingleCoinDetail,
  validateDiscountCode,
  getUserOwnedToken,
  getUserPoolStatus
};
