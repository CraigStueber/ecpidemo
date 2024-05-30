import "./Link.styles.css";

function Link({ url, text }) {
  return (
    <div className="ecpiLinks">
      <a href={`https://www.ecpi.edu/${url}`} target="_blank">
        {text}
      </a>
    </div>
  );
}

export default Link;
