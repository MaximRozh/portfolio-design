import React, { useEffect, useState } from "react";
import "./App.scss";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import { client } from "./client";
import { queryAll } from "./query/requests";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!Object.keys(data).length) {
      client.fetch(queryAll).then((res) => {
        setData(res);
      });
    }
  }, [data]);

  return (
    <div className="app">
      <Navbar />
      <Header avatar={data?.personalInfo?.[0].image} />
      <About abouts={data?.about || []} />
      <Work works={data?.works || []} />
      <Skills
        skills={data?.skills || []}
        experiences={data?.experiences || []}
      />
      <Testimonial
        testimonials={data?.testimonials || []}
        brands={data?.brands || []}
      />
      <Footer contactInfo={data?.personalInfo?.[0] || []} />
    </div>
  );
}

export default App;
