export default function Footer(props) {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© 2021, Raslan Rauff</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              class="github-button"
              href="https://github.com/raslan1994"
              aria-label="Follow @raslan1994 on GitHub"
            >
              Follow @raslan1994
            </a>
          </li>
          <li className="ms-3">
            <a
              class="github-button"
              href="https://github.com/sponsors/raslan1994"
              data-icon="octicon-heart"
              aria-label="Sponsor @raslan1994 on GitHub"
            >
              Sponsor
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              <img
                alt="Creative Commons License"
                style={{ borderWidth: 0 }}
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
              />
            </a>
            {/* <br />
            This work is licensed under a{" "}
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License
            </a> */}
          </li>
          <li className="ms-">
            <a
              className="text-muted"
              href="mailto:rstudioDevelopment@gmail.com"
            >
              Connect via email
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
