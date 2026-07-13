import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter({ value, suffix = "", duration = 2.2 }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  return (
    <span ref={ref}>
      {inView ? <CountUp end={value} duration={duration} suffix={suffix} /> : `0${suffix}`}
    </span>
  );
}
