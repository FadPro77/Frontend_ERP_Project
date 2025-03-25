/* eslint-disable no-unused-vars */
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useRef } from "react";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/Login";
import { motion } from "motion/react";
export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  const [openLoginForm, setOpenLoginForm] = useState(true);
  return (
    <>
      <AuthLayout
        openLoginForm={openLoginForm}
        setOpenLoginForm={setOpenLoginForm}
      >
        {openLoginForm && <LoginForm />}
      </AuthLayout>
    </>
  );
}
