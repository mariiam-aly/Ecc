"use client";
import { useState,useEffect } from "react";
export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
      console.log(ref)
  if(ref){
      observer.observe(ref.current);}
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }