

// All Users Cashback

 export   const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3040/api/v1/profile/getallCashBack"
      );
      setData(data.result);
    } catch (e) {
      console.log(e);
    }
  };