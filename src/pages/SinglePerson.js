import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

export default function SinglePerson() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [person, setPerson] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getPerson() {
      try {
        const response = await fetch(`https://swapi.dev/api/people/`);

        const { results } = await response.json();
        const data = results.find((element) => element.name === id);

        if (data) {
          const { name, image, height, gender } = data;

          const newPerson = {
            name,
            image,
            height,
            gender,
          };
          setPerson(newPerson);
        } else {
          setPerson(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getPerson();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!person) {
    return <h2 className="section-title">no person to display</h2>;
  } else {
    const { name, height, gender } = person;
    return (
      <section className="section person-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="response">
          <div></div>
          <div className="response-info">
            <p>
              <span className="response-data">name :</span> {name}
            </p>
            <p>
              <span className="response-data">height :</span> {height}
            </p>
            <p>
              <span className="response-data">gender :</span> {gender}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
