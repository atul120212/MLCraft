import React from "react";
import "../styles/footer.scss";

function Footer() {
  return (
    <div
      className=" w-full flex justify-evenly items-center flex-col bg-transparent  pb-1"
      id="footer"
    >
      <div
        className="bg-transparent text-white flex flex-col items-center gap-10 text-container text-center p-10"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl text-white bg-transparent">
          © {new Date().getFullYear()}{" "}
          <a
            href="hhttps://gdg.community.dev/gdg-cloud-noida/"
            className="underline bg-transparent text-blue-500"
          >
            GDG Cloud Noida
          </a>
        </h1>
        
      </div>
    </div>
  );
}

export default Footer;
