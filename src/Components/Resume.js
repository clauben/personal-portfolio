import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Educatie</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Werk</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p className="info">{skillmessage}</p>

            {/* <div className="bars">
              <ul className="skills">{skills}</ul>
            </div> */}
          </div>

          {/* <div className="row skill">
            <h1><span>Favoriete tech</span></h1>
          </div>

          <div>
            <div className="nnine columns main-col"><p className="lead center">{skillmessage}</p></div>
              <ul className="bgrid-quarters s-bgrid-thirds cf">{skills}</ul>
          </div> */}
        </div>
        
        <div className="skills__size">
          <div className="skills__section">
          <div className="skills__cell">
              <div className="skills__logo">
              <img src="https://img.icons8.com/color/96/000000/microsoft.png" alt=''/>
              </div>
              <h1>.NET</h1>
              <div className="skills__text">
                Met dit framewerk kan ik volledige webapplicaties maken. Ik gebruik .NET om API's te ontwikkelen en met MVC en Razor Pages in de front-end om deze te consumeren. Het feit dat je met dit framework alles kan maken zorgt het ervoor die dit mijn voorkeur krijgt tegenover andere stacks.
              </div>
            </div>
          <div className="skills__cell">
              <div className="skills__logo">
              <img src="https://img.icons8.com/color/96/000000/c-sharp-logo.png" alt=''/>
              </div>
              <h1>C#</h1>
              <div className="skills__text">
                C# is de programmeertaal die ik gebruik met het .NET framework. Deze in samenwerking met visual studios krijgt mijn voorkeur omdat dit zeer fijn is om mee te werken en met regelmatige updates van microsoft steeds beter aan het worden is.
              </div>
            </div>
            <div className="skills__cell">
              <div className="skills__logo">
              <img src="https://img.icons8.com/color/96/000000/react-native.png" alt=''/>
              </div>
              <h1>ReactJS</h1>
              <div className="skills__text">
                React is mijn favoriete framework voor SPA's.
                De manier waarop applicaties opgedeeld zijn in herbruikbare
                componenten en de JSX taal waarin html gecombineerd wordt met
                javascript vindt ik aantrekkelijk aan dit framework. Ik heb dit framewerk
                gebruikt voor mijn persoonlijke fitness coaching pagina (te zien in projecten).
              </div>
            </div>
            <div className="skills__cell">
              <div className="skills__logo">
              <img src="https://img.icons8.com/color/96/000000/git.png" alt=''/>
              </div>
              <h1>Git</h1>
              <div className="skills__text">
                Ik gebruik github version control voor al mijn projecten. Dit maakt het
                makkelijk voor om te terug te gaan naar willekeurige versies van bestanden als
                dat nodig blijkt te zijn. In de toekomst ben ik van plan om bijdrages te leveren
                aan open source projecten.
              </div>
            </div>
            <div className="skills__cell">
              <div className="skills__logo">
              <img src="https://img.icons8.com/ios-filled/96/000000/mysql-logo.png" alt=''/>
              </div>
              <h1>MySQL</h1>
              <div className="skills__text">
                Ik gebruik MySQL om relationele databases op te bouwen en te beheren. 
              </div>
            </div>
            <div className="skills__cell">
              <div className="skills__logo">
              <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt=''/>
              </div>
              <h1>Javascript</h1>
              <div className="skills__text">
                Tegenwoordig kan je niet om javascript heen. Er bestaan al veel front-end frameworks om interactieve webapplicaties te maken. Met behulp van AJAX en JQuery geef ik mijn front-end applicaties interactiviteit. 
              </div>
            </div>
            <div className="skills__cell">
              <div className="skills__logo">
              <img src="https://img.icons8.com/color/96/000000/css3.png" alt=''/>
              </div>
              <h1>CSS</h1>
              <div className="skills__text">
                Met CSS ben ik staat om webapplicaties te voorzien van een aantrekkelijk uiterlijk.
                Ik probeer mijn ervaring met css te ontwikkelen door te oefenen met het maken van responsive layouts.
              </div>
            </div>
            <div className="skills__cell">
              <div className="skills__logo">
              <img src="https://img.icons8.com/color/96/000000/html-5.png" alt=''/>
              </div>
              <h1>HTML</h1>
              <div className="skills__text">
                In react gebruik ik html om de front-end vorm te geven. Ik begrijp hoe 
                webpagina's ingedeeld zijn en hoe ik HTML kan toepassen om pagina structuren
                op te bouwen.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
