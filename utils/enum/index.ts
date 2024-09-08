
export const PLANS_PLATFORM = {
  TELEGRAM: "telegram",
  TWITTER: "twitter",
  DISCORD: "discord",
  REDDIT: "reddit",
};

export const COIN_LIST_FILTER = {
  todaysHot: "todaysHot",
  launchDate: "launchDate",
};

export const DEX_LIST = {
  PANCAKESWAP: 'Pancakeswap',
  UNISWAP: 'Uniswap',
}

export const CART_TYPE = {
  COIN: "coin",
  BANNER: "banner",
  PRESS: "press",
  KYC: "kyc",
  ARTICLE: "article",
  EMAIL_PROMOTION: "emailPromotion",
  INFLUENCER: "influencer",
};


export const handleDiscount = async (dates, amount) => {
  let discountAmout:any = null;
  let discount:any = null;
  let totalAmount = dates.length * Number(amount);
  if (dates.length > 5 && dates.length <= 10) {
    discountAmout = ((totalAmount) - ((totalAmount * 10) / 100));
    discount = 10;
  } else if (dates.length > 10 && dates.length <= 14) {
    discountAmout = ((totalAmount) - ((totalAmount * 15) / 100));
    discount = 15;
  } else if (dates.length >= 14) {
    discountAmout = ((totalAmount) - ((totalAmount * 20) / 100));
    discount = 20;
  } else {
    discountAmout = dates.length * Number(amount);
  }
  let data = {
    discountAmout,
    discount,
  };
  return data;
};

export const PresshandleDiscount = async (dates, amount) => {
  let discountAmout:any = null;
  let discount :any= null;
  let totalAmount = Number(amount);
  if (dates.length > 5 && dates.length <= 10) {
    discountAmout = ((totalAmount) - ((totalAmount * 10) / 100));
    discount = 10;
  } else if (dates.length > 10 && dates.length <= 14) {
    discountAmout = ((totalAmount) - ((totalAmount * 15) / 100));
    discount = 15;
  } else if (dates.length >= 14) {
    discountAmout = ((totalAmount) - ((totalAmount * 20) / 100));
    discount = 20;
  } else {
    discountAmout = Number(amount);
  }
  let data = {
    discountAmout,
    discount,
  };
  return data;
};

export const convertToBillionAndMultiply = (total) => {
  // Nine Zeroes for Billions
  const ConvertAmount = Number(total).toFixed(0)
  return Math.abs(Number(ConvertAmount)) >= 1.0e+9
    ? (Math.abs(Number(ConvertAmount)) / 1.0e+9).toFixed(0) + " B"
    // Six Zeroes for Millions 
    : Math.abs(Number(ConvertAmount)) >= 1.0e+6
      ? (Math.abs(Number(ConvertAmount)) / 1.0e+6).toFixed(0) + " M"
      // Three Zeroes for Thousands
      : Math.abs(Number(ConvertAmount)) >= 1.0e+3
        ? (Math.abs(Number(ConvertAmount)) / 1.0e+3).toFixed(0)
        : Math.abs(Number(ConvertAmount));

}

export const convertToDecimals = (item) => {
  const converToNoDecimal = Number(item)?.toFixed()
  const convetToLocale = Number(converToNoDecimal).toLocaleString()
  return convetToLocale;
}

export const convertToBillion = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9
    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6
      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
      // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
        : Math.abs(Number(labelValue));

}

export const convertToThousands = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9
    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6
      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
      // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
        : Math.abs(Number(labelValue));

}


export const getInitials = (name = '') => name
  .replace(/\s+/, ' ')
  .split(' ')
  .slice(0, 2)
  .map((v) => v && v[0].toUpperCase())
  .join('');


export const toCommonFixed = (value, precision = 0) => {
  if ((0.9).toFixed() !== '1') {
    return value.toFixed(precision);
  }
  let pow = Math.pow(10, precision);
  return (Math.round(value * pow) / pow).toFixed(precision);
}