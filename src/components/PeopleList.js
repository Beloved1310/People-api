import React from "react";
import People from "./People";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function PeopleList() {
  const { peoples, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (peoples.length < 1) {
    return (
      <h2 className="section-title">no peoples matched your search criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">People</h2>
      <div className="peoples-center">
        {peoples.map((item) => {
          return <People key={item.name} {...item} />;
        })}
      </div>
    </section>
  );
}
