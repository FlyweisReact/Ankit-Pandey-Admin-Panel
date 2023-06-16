import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { AllCashback, UploadExcel } from "../Repository/Api";
import HOC from "./layout/HOC";


const UpdateProfile = () => {
   
  
    return (
      <>
     
        <p className="headP">Dashboard / Update Profile</p>
        <div
          className="pb-4 sticky top-0  w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase "
            style={{ fontSize: "1.5rem" }}
          >
            All Update Profile 
          </span>
  
          <button
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
        
          >Submit
          </button>
        </div>
  
        <section className="sectionCont">
            <Container>
                <Form></Form>
            </Container>
        </section>
      </>
    );
  };
  
export default HOC(UpdateProfile)