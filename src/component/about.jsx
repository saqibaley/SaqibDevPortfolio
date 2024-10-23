import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faBookmark,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import profilePhoto from "../assets/profilePhoto.png";

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="heading">
        <h1>
          Saqib <br /> Ali
        </h1>
      </div>
      <div className="bioContainer">
        <div className="myBio">
          <div className="personalInfo">
            <p>
              One of my deepest joys comes from equipping creative people with
              the visual tools they need to further their work.
            </p>
          </div>
          <div className="profileTitle">
            <div className="profile">
              <img src={profilePhoto} alt="Profile" />
            </div>
            <div className="info">
              <p>Web Developer</p>
              <p>Webflow Developer</p>
            </div>
          </div>
        </div>

        <div className="myBio">
          <div className="bioText">
            <h4>Where you can start</h4>
          </div>
          <div className="skillsList">
            {[
              { icon: faUser, text: "Learn fun facts about me" },
              { icon: faClipboardList, text: "Learn fun facts about me" },
              { icon: faBookmark, text: "Learn fun facts about me" },
              { icon: faPencil, text: "Learn fun facts about me" },
            ].map((item, index) => (
              <div className="iconContainer" key={index}>
                <FontAwesomeIcon icon={item.icon} className="userIcon" />
                <span className="iconText">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
