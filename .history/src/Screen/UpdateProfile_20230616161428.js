/** @format */

import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import HOC from "./layout/HOC";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const postHandler = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
        try{
            const { data } = await UpdateProfile
        }catch(e)  {
            console.log(e)
        }
    }
  };

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
      </div>

      <section className="sectionCont">
        <Container>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" pattern="[0-9]{10}" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <button
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HOC(UpdateProfile);
