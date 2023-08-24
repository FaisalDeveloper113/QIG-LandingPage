import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="z-20 flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-blue-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="z-20 flex-grow text-center lg:text-left">
          <h2 className="z-20 text-2xl font-medium lg:text-3xl">
            For general queries
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Please email support@quantfarming.com.
          </p>
        </div>
        <div className="z-20 flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTFjgQDjSHDRJwQqklNfTzdfXPcVGphWnGGMnTwFcHhtNhbLHxJBxKsDrMMkpCgPRtfDzKB"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-blue-500 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Send Email
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;