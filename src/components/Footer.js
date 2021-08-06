export default function Footer(props) {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-5 d-flex align-items-center">
          <span className="text-muted">
            © 2021, Raslan Rauff (Data obtained from{" "}
            <span>www.hpb.health.gov.lk</span>)
          </span>
        </div>

        <ul className="nav col-auto justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="github-button"
              href="https://github.com/raslan1994"
              aria-label="Follow @raslan1994 on GitHub"
            >
              Follow @raslan1994
            </a>
          </li>
          <li className="ms-3">
            <a
              className="github-button"
              href="https://github.com/raslan1994/covid-sl"
              data-icon="octicon-star"
              aria-label="Star raslan1994/covid-sl on GitHub"
            >
              Star
            </a>
          </li>
        </ul>
        <ul className="nav row col-auto">
          <li className="ms-3">
            <a
              className="text-muted"
              href="mailto:rstudioDevelopment@gmail.com"
            >
              Connect via email
            </a>
          </li>
          <li className="ms-3">
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              <img
                alt="Creative Commons License"
                style={{ borderWidth: 0 }}
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
