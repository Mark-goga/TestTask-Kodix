import axios from "axios";

export async function fetchLeftoverFilter({ locationId, shopId, timeInterval, inputQuery, IsSeller, }) {
  try {
    const response = await axios.get('/leftover/filter', {
      params: {
        LocationId: locationId,
        ShopId: shopId,
        timeInterval: timeInterval,
        inputQuery: inputQuery,
        IsSeller
      }
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
}

export const fetchAllLeftovers = async ({ locationId, shopId, timeInterval, filterByArticleOrName, IsSeller, }) => {
  console.log(
    "🚀 ~ {locationId, shopId, timeInterval, filterByArticleOrName}:",
    { locationId, shopId, timeInterval, filterByArticleOrName }
  );

    try {
      const response = await axios.get('/leftover', {
        params: {
          LocationId: locationId,
          ShopId: shopId,
          timeInterval: timeInterval,
          IsSeller,
          filterByArticleOrName: filterByArticleOrName,
        }
      });
      return response.data.data;
    } catch (error) {
      throw error.response.data.message;
    }

};
