"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useOnRoute = (callback: (path: string) => void) => {
  const path = usePathname();

  useEffect(() => {
    console.log("something changed");
    callback(path);
  }, [path, callback]);
};
