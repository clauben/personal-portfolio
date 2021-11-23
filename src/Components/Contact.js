import React, { Component } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_Oi0lKtYK3i025ldanfhB6");

class Contact extends Component {

  render() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_81jg93z",
          "template_pwxb2il",
          e.target,
          "user_Oi0lKtYK3i025ldanfhB6"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Uw bericht is verzonden");
          },
          (error) => {
            console.log(error.text);
            alert("Het is NIET gelukt uw bericht te verzenden");
          }
        );
    }

    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Naam <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Onderwerp</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Bericht <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  {/* <button className="submit">Verstuur</button> */}
                  <button>Verstuur</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error </div>
            <div id="message-success">
              <i className="fa fa-check"></i>Uw bericht is verzonden, bedankt!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address & Nummer</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{email}</span>
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
