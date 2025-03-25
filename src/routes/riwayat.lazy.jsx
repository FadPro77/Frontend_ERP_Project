/* eslint-disable no-unused-vars */
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useRef } from "react";
import GuestLayout from "../layouts/GuestLayout";
import ScreenHistory from "../components/History/ScreenHistory";
import { motion } from "motion/react";
export const Route = createLazyFileRoute("/riwayat")({
  component: Riwayat,
});

function Riwayat() {
  const [openHistory, setOpenHistory] = useState(true);
  return (
    <>
      <GuestLayout openHistory={openHistory} setOpenHistory={setOpenHistory}>
        {openHistory && <ScreenHistory />}
      </GuestLayout>
    </>
  );
}
