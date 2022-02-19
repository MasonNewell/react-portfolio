import portrait from "../images/portrait.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <h1>About Me:</h1>
      <div className="row justify-content-center py-4">
        <div className="col-xl-5 col-lg-5 col-md-5 col-11">
          <img src={portrait}></img>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-11 py-4">
          <p>
            I am a full-stack Web Developer who loves solving difficult problems and finding better
            ways to do things. I enjoy learning new frameworks and libraries on my free time as well
            as challenging myself to do something new.
          </p>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-11 py-4">
          <p>I have experience with front-end and back-end technologies such as:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">React</li>
            <li className="list-group-item">Node</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">API's</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">MySQL with Sequelize</li>
            <li className="list-group-item" li className="list-group-item">
              NoSQL with MongoDB/Mongoose
            </li>
            <li className="list-group-item">IndexedDB</li>
            <li className="list-group-item">GraphQL</li>
            <li className="list-group-item">Handlebars</li>
            <li className="list-group-item">Bootstrap</li>
          </ul>
        </div>
      </div>
    </>
  );
}
