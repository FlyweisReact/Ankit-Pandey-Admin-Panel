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
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='name' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='name' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='tel' pattern="[0-9]{10}" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type='password' />
                    </Form.Group>
                </Form>
            </Container>
        </section>
      </>
    );
  };
  
export default HOC(UpdateProfile)