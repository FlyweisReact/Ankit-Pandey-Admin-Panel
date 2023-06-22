/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import HOC from "./layout/HOC";

const Orders = () => {
  const [data, setData] = useState([]);

  // Pagination and Filter
  const [query, setQuery] = useState("");
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  let pages2 = [];

  const TotolData = query
    ? data?.filter(
        (i) =>
          i?.orderId
            ?.toString()
            ?.toLowerCase()
            .includes(query?.toLowerCase()) ||
          i?.cash?.toString()?.toLowerCase().includes(query?.toLowerCase())
      )
    : data;

  useEffect(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

  const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);

  for (let i = 1; i <= Math.ceil(TotolData?.length / postPerPage2); i++) {
    pages2.push(i);
  }

  function Next() {
    setCurrentPage2(currentPage2 + 1);
  }

  function Prev() {
    if (currentPage2 !== 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  }

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://ankit-pandey-backend.vercel.app/api/v1/admin/getAllOrders"
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p className="headP">Dashboard / Order's</p>
      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Orders ( Total : {data?.length} )
        </span>
      </div>

      <section className="sectionCont">
        {data?.length === 0 || !data ? (
          <Alert>No Data Found</Alert>
        ) : (
          <>
            <div className="filterBox">
              <img
                src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
                alt=""
              />
              <input
                type="search"
                placeholder="Search by Order Id and  User Id"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {slicedData?.length === 0 ? (
              <Alert>Sorry, we couldn't find any results for "{query}" </Alert>
            ) : (
              <div className="overFlowCont">
                <Table>
                  <thead>
                    <tr>
                      <th>Number.</th>
                      <th>OrderId</th>
                      <th>Cash</th>
                      <th>Prc</th>
                      <th>discQtyPerc</th>
                      <th>Qty</th>
                      <th>Sym</th>
                      <th>Status</th>
                      <th>Exseg</th>
                      <th>ExchConfrmtime</th>
                      <th>ExchOrdID</th>
                      <th>Pcode</th>
                      <th>Avgprc</th>
                      <th>Trantype</th>
                      <th>Scripname</th>
                      <th>Validity</th>
                      <th>series</th>
                      <th>remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slicedData?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td> {i.orderId} </td>
                        <td> {i.cash} </td>
                        <td> {i.Prc} </td>
                        <td> {i.discQtyPerc} </td>
                        <td> {i.Qty} </td>
                        <td> {i.Sym} </td>
                        <td> {i.Status} </td>
                        <td> {i.Exseg} </td>
                        <td> {i.ExchConfrmtime} </td>
                        <td> {i.ExchOrdID} </td>
                        <td> {i.Pcode} </td>
                        <td> {i.Avgprc} </td>
                        <td> {i.Trantype} </td>
                        <td> {i.Scripname} </td>
                        <td> {i.Validity} </td>
                        <td> {i.series} </td>
                        <td> {i.remarks} </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>{" "}
                <div className="pagination">
                  <div className="text">
                    Showing {slicedData?.length} of {data?.length}
                  </div>
                  <div className="Pag">
                    <button onClick={() => Prev()} className="prevBtn">
                      <i className="fa-solid fa-backward"></i>
                    </button>
                    {currentPage2 === 1 ? (
                      ""
                    ) : (
                      <button onClick={() => setCurrentPage2(1)}>1</button>
                    )}

                    {pages2
                      ?.slice(currentPage2 - 1, currentPage2 + 3)
                      .map((i, index) =>
                        i === pages2?.length ? (
                          ""
                        ) : (
                          <button
                            key={index}
                            onClick={() => setCurrentPage2(i)}
                            className={currentPage2 === i ? "activePage" : ""}
                          >
                            {" "}
                            {i}{" "}
                          </button>
                        )
                      )}

                    <button
                      onClick={() => setCurrentPage2(pages2?.length)}
                      className={
                        currentPage2 === pages2?.length ? "activePage" : ""
                      }
                    >
                      {" "}
                      {pages2?.length}{" "}
                    </button>

                    {currentPage2 === pages2?.length ? (
                      ""
                    ) : (
                      <button onClick={() => Next()} className="nextBtn">
                        {" "}
                        <i className="fa-sharp fa-solid fa-forward"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default HOC(Orders);
