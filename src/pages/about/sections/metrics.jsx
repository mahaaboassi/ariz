

import { useEffect, useRef, useState } from "react";

const Metrics = () => {
  const data = [
    { num: 1000, des: "Projects Done", suffix: "+" },
    { num: 375, des: "Satisfied Customers", suffix: "+" },
    { num: 20000, des: "Campaigns Processed", suffix: "" },
    { num: 20, des: "Team of Professionals", suffix: "+" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(data.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    data.forEach((item, index) => {
      let start = 0;
      const end = item.num;
      const duration = 1500;
      const increment = end / (duration / 30);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 30);
    });
  }, [visible]);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-4 px-4 sm:px-10 metrics pt-10"
    >
      {data.map((e, idx) => (
        <div
          className="flex px-3 justify-center items-center flex-col"
          key={`About_Us_metrics_${e.des}_${idx}`}
          style={idx < 3 ? { borderRight: `4px solid #ca9e67` } : {}}
        >
          <h4>
            {counts[idx].toLocaleString()}
            {e.suffix}
          </h4>
          <p>{e.des}</p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;