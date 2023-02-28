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
