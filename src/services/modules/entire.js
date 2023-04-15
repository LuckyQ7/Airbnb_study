import ServiceRequest from "../index";

export const GetEntireListAPI = (offset = 0, size = 20) => {
  return ServiceRequest.get({
    url: "/entire/list?offset=" + offset + "&size=" + size,
  });
};
