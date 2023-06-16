/** @format */

import axios from "axios";

// BaseUrl
const BaseURL = "http://localhost:3040/";
// All Users Cashback

export const fetchData = async () => {
  try {
    const response = await axios.get(
      ` ${BaseURL}api/v1/profile/getallCashBack`
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};
