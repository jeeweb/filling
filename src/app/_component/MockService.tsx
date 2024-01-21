"use client";

import { useEffect } from "react";
import { worker } from "@/mocks/browser";

export const MockService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window is undefined");
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        worker.start();
      }
    }
  }, []);

  return null;
};
