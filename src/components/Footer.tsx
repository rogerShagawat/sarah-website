import React from "react";
import { FooterObject } from "../types";

interface Props {
  footerObj: FooterObject;
}

function Footer({ footerObj }: Props) {
  const { icon_width, icon_height, icon_data, email } = footerObj;
  return (
    <div className="container p-4 pb-0" style={{ marginBottom: 25 }}>
      <div>
        <section>
          <footer className="text-center">
            {icon_data.map(({ name, className, href, path_d }, index) => (
              <a
                className="btn"
                target="_blank"
                href={href}
                role="button"
                key={name}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={icon_width}
                  height={icon_height}
                  fill="currentColor"
                  className={"bi" + " " + className}
                  viewBox="0 0 16 16"
                >
                  <path d={path_d} />
                </svg>
              </a>
            ))}
            <address>
              <a href={"mailto:" + email}>{email}</a>
            </address>
          </footer>
        </section>
      </div>

      {/* <div
        className="text-center p-3"
        // style={{background-color: rgba(0, 0, 0, 0.2)}}
      >
        © 2025 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
    </div>
  );
}

export default Footer;
