import axios from "axios";

// BaseUrl
const BaseURL = "http://localhost:3040/"
// All Users Cashback

 export   const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "api/v1/profile/getallCashBack"
      );
    } catch (e) {
      console.log(e);
    }
  };