import ServiceRequest from "../index";

export const GetHighscore = () => {
  return ServiceRequest.get({
    url: "/home/highscore",
  });
};

export const GetGoodPriceInfo = () => {
  return ServiceRequest.get({
    url: "/home/goodprice",
  });
};

export const GetHomeHightScore = () => {
  return ServiceRequest.get({
    url: "/home/highscore",
  });
};


export const GetHomeDiscount = () => {
  return ServiceRequest.get({
    url: "/home/discount",
  });
};


export const GetHotRecommenddest = () => {
  return ServiceRequest.get({
    url: "/home/hotrecommenddest",
  });
};
