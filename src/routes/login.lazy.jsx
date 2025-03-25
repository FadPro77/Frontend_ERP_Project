/* eslint-disable no-unused-vars */
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useRef } from "react";
import GuestLayout from "../layouts/GuestLayout";
import LoginForm from "../components/Login";
import { motion } from "motion/react";
export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  const [openLoginForm, setOpenLoginForm] = useState(true);
  return (
    <>
      <GuestLayout
        openLoginForm={openLoginForm}
        setOpenLoginForm={setOpenLoginForm}
      >
        {openLoginForm && <LoginForm />}
      </GuestLayout>
    </>
  );
}
