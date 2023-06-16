/** @format */

import axios from "axios";
import toast from 'react-toastify'

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

 export const UploadExcel = async (file) => {
    const fd = new FormData();
    fd.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:3040/api/v1/profile/AddcashBackExcel",
        fd
      );
      return 
    } catch (e) {
      console.log(e);
    }
  };


