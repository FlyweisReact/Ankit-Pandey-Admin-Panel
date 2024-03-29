/** @format */

import axios from "axios";

// BaseUrl
const BaseURL = "https://ankit-pandey-backend.vercel.app/";

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
      `${BaseURL}api/v1/profile/AddcashBackExcel`,
      fd
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

//   All Users

export const AllUsers = async () => {
  try {
    const response = await axios.get(` ${BaseURL}api/v1/profile/getAlluser`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Login Admin
export const LoginAdmin = async (email, password) => {
  try {
    const response = await axios.post(`${BaseURL}api/v1/admin/login`, {
      email,
      password,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Update Profile
export const UpdateUser = async (name, email, password, phone) => {
  try {
    const response = await axios.put(
      `${BaseURL}api/v1/admin/update`,
      {
        name,
        email,
        password,
        phone,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
