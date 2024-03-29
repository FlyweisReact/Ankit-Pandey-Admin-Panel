/** @format */
import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { AllCashback, UploadExcel } from "../Repository/Api";
import HOC from "./layout/HOC";

const EAdminCustomer = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  // Pagination and Filter
  const [query, setQuery] = useState("");
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  let pages2 = [];

  const TotolData = query
    ? data?.filter((i) =>
        i?.userId?.toLowerCase().includes(query?.toLowerCase())
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
      const { data } = await AllCashback();
      setData(data.result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [file, setFile] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await UploadExcel(file);
        console.log(data.message);
        toast.success("Uploaded");
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload Cashback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="file"
                placeholder="Select File"
                required
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <p className="headP">Dashboard / Cashback</p>
      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Cashback ( Total : {data?.length} )
        </span>

        <button
          className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          onClick={() => setModalShow(true)}
        >
          <i className="fa-solid fa-upload"></i> Upload
        </button>
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
                placeholder="Search by User Id	"
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
                    <th>SNo.</th>
                    <th>User Id</th>
                    <th>Cashback</th>
                  </tr>
                </thead>
                <tbody>
                  {slicedData?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td> {i.userId} </td>
                      <td>
                        {" "}
                        <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                        {i.cash}{" "}
                      </td>
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
            </div>)}
          </>
        )}
      </section>
    </>
  );
};

export default HOC(EAdminCustomer);
