import React, { Component } from "react";

class About extends Component {
  render() {
    

    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/profilepic.jpg";
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Claudio Benjamin Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>Over mij</h2>

            <p>
            Ik zal mijzelf even voorstellen. Ik heet Claudio Benjamin,  geboren op 30 maart 1990 te Rotterdam. Momenteel volg ik een BSc Software Engineering aan de Haagse Hogeschool. Welkom op mijn portfolio pagina.
              <br />
              <br /> 
              Ik ben in bezit van zowel technische- als soft skills. Soft skills heb ik in de loop der jaren mogen ontwikkelen door mijn functie als teamleader bij Vapiano, Fitnessinstructeur bij Fit for Free en Freelancer bij Temper .Technische skills ben ik aan het ontwikkelen tijdens  de opleiding en door zelfstudie.
              <br />
              <br /> 
              Tijdens mijn opleiding heb ik tevens in scrum teams mogen werken,  en  Object-Oriented Programming, SOLID principes en design patterns leren programmeren. Ik heb geleerd applicaties in te richten volgens AVG richtlijnen met behulp van Privacy by Design en Privacy Enhancing Technologies. Daarnaast heb ik geleerd relationele databases te ontwerpen, implementeren en te beheren. Verder staat Security en database design centraal in de opleiding.
              <br />
              <br /> 
              Relevante werkervaring als Software Engineer heb ik nog niet kunnen opdoen, maar wat ik mis in ervaring kan ik ruimschoots goed maken, gezien mijn sterke motivatie in het leren, mijn sterk ontwikkelde communicatieve vaardigheden, zelfstandigheid en proactieve houding.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
