import React from "react";

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="form-group mb-3">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Phone number"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleFormControlInput1">Email </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button class="btn btn-outline-primary mb-3" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
