/* eslint-disable no-unused-vars */
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useRef } from "react";
import AuthLayout from "../layouts/AuthLayout";
import RegisterForm from "../components/Login/register";
import { motion } from "motion/react";
export const Route = createLazyFileRoute("/register")({
  component: Register,
});

function Register() {
  const [openRegisterForm, setOpenRegisterForm] = useState(true);
  return (
    <>
      <AuthLayout
        openRegisterForm={openRegisterForm}
        setOpenRegisterForm={setOpenRegisterForm}
      >
        {openRegisterForm && <RegisterForm />}
      </AuthLayout>
    </>
  );
}
