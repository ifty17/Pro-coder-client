import React from 'react';

const Blogs = () => {
    return (
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            what is cors?
          </div>
          <div className="collapse-content">
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              I am using firebase for authentication like login sign Up etc.
              <br />
              The options i have for authentication given below.
              <br /> Back4App <br /> Backendless <br /> Kuzzle <br /> Pubnub{" "}
              <br /> Kumulos <br />
              Appwrite <br /> Deployd <br /> NHost <br /> AWS Amplify <br />{" "}
              Heroku.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              The react private route component renders child components
              (children) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is Node? How does Node work?
          </div>
          <div className="collapse-content">
            <p>
              Node.js is an open source, cross-platform runtime environment for
              developing server-side and networking applications. Node.js
              applications are written in JavaScript, and can be run within the
              Node.js runtime on OS X, Microsoft Windows, and Linux. Node.js
              also provides a rich library of various JavaScript modules which
              simplifies the development of web applications using Node.js to a
              great extent. <br />
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;