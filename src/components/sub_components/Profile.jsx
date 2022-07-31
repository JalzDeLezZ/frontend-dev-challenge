import React from "react";
import { MY_BTN_DOWN } from "./Buttons";
import "./styles/Profile.scss";
import { MY_GROUP_INPUT } from "./InputGroup";

const user = {
  name: "James Jalz",
  lastName: "Díaz López",
  email: "james.delez@gmail.com",
  phone: "+51 900 284 446",
  photo: "https://i.ibb.co/MNQtjMt/p.jpg",
  qr: "https://i.ibb.co/QrhSpJZ/qrcode-jalzdelezz-github-io.png",
  skills: [
    { id: 1, name: "NextJS" },
    { id: 2, name: "ReactJS" },
    { id: 3, name: "NodeJS" },
    { id: 4, name: "TypeScript" },
    { id: 5, name: "AWS" },
  ],
};

const Profile = () => {
  return (
    <section className="sub-component--profile">
      <MY_GROUP_INPUT />

      <section className="profile--personal_info">
        <figure className="personal_info--photo">
          <img src={user.photo} alt="" />
        </figure>

        <div className="personal_info--information">
          <h1 className="profile--name">{user.name}</h1>

          <article className="profile--data">
            <h5>Last Name:</h5>
            <p>{user.lastName}</p>
          </article>
          <article className="profile--data">
            <h5>Phone Number:</h5>
            <p>{user.phone}</p>
          </article>
          <article className="profile--data">
            <h5>Email:</h5>
            <p>{user.email}</p>
          </article>
          <div className="profile--skills">
            <ol>
              {user.skills.map((skill) => (
                <li key={skill.id}>
                  <span className="AS-OF-LUCK">♠</span>
                  {skill.name}
                </li>
              ))}
            </ol>
            <figure className="cmp-qr--jalz">
              <img src={user.qr} alt="James Jalz QR" className="qr-jalz--img" />
            </figure>
          </div>
        </div>
      </section>

      <MY_BTN_DOWN />

      <section className="profile--form">
        <form className="form--profile"></form>
      </section>
    </section>
  );
};

export default Profile;

/* 
 <button className="camera--btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z" />
          </svg>
        </button>

        
        .camera--btn {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            margin: 1rem auto;
            border-radius: 50%;
            background-color: rgb(255 255 255 / 24%);
            backdrop-filter: blur(1px);
            padding: 0.5rem;
            width: 4rem;
            height: 4rem;
            box-shadow: black 0px 0px 21px;
            transition: 0.7s;
            &:hover {
                transform: scale(1.1);
            }

        }


*/
