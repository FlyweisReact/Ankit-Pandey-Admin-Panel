/** @format */

import axios from "axios";

// BaseUrl
const BaseURL = "http://localhost:3040/";


// All Users Cashback
export const AllCashback = async () => {
  try {
    const response = await axios.get(
      ` ${BaseURL}api/v1/profile/getallCashBack`
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};


// Uplaod Excel

 export const UploadExcel = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("file", file);
    try {
      const { data } = await axios.post(
        "http://localhost:3040/api/v1/profile/AddcashBackExcel",
        fd
      );
      toast.success(data.message);
      fetchData();
      props.onHide();
    } catch (e) {
      console.log(e);
    }
  };


