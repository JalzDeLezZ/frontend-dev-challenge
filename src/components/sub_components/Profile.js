import React, { useRef, useState } from "react";
import { MY_BTN_DOWN, MY_BTN_SEND } from "./Buttons";
import "./styles/Profile.scss";
import { MY_GROUP_INPUT } from "./InputGroup";
import MY_SELECT from "./Selects";
import { useLocalStorage } from "../../context/hooks.js";
import { user } from "../../assets/data/apiUser.js";

const Profile = () => {
  const [userData, setUserData] = useLocalStorage("userLS", user);
  const [image, setImage] = useLocalStorage("imageLS", {
    url: "https://icon-library.com/images/2018/2206115_thin-line-user-icon-png-transparent-png.png",
  });

  const oValues = {
    inn_name: { value: "", error: null },
    inn_lastName: { value: "", error: null },
    inn_email: { value: "", error: null },
    inn_phone: { value: "", error: null },
    inn_skills: { value: [], error: null },
    qr: "https://i.ibb.co/QrhSpJZ/qrcode-jalzdelezz-github-io.png",
    photo:
      "https://icon-library.com/images/2018/2206115_thin-line-user-icon-png-transparent-png.png",
  };

  const [formValues, setFormValues] = useState(oValues);

  const rForm = useRef(null);

  const [file, setFile] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
      },
    });
  };

  const validateForm = () => {
    let isError = false;
    Object.values(formValues).forEach((val) => {
      if (val.error) {
        isError = true;
      }
    });
    if (formValues.inn_skills.value.length < 1) {
      isError = true;
    }
    return isError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (!errors) {
      setUserData({
        name: formValues.inn_name.value,
        lastName: formValues.inn_lastName.value,
        email: formValues.inn_email.value,
        phone: formValues.inn_phone.value,
        photo: image.url || formValues.photo,
        skills: formValues.inn_skills.value,
        qr: formValues.qr,
      });
      setFormValues(oValues);
      setImage({
        url: "https://icon-library.com/images/2018/2206115_thin-line-user-icon-png-transparent-png.png",
      });
    } else {
      console.log("Not Success Submit");
    }
  };

  const mSetFile = (e) => {
    const { files } = e.target;
    setFile(files[0]);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImage({
        url: e.target.result,
      });
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <section className="sub-component--profile">
      <section className="profile--personal_info">
        <div className="personal_info--information">
          <figure className="personal_info--photo">
            <img src={userData.photo} alt="" />
            {/* <img src={image.url} alt="" /> */}
          </figure>

          <div className="personal_info--data">
            <h1 className="profile--name">{userData.name}</h1>
            <article className="profile--data">
              <h5>Last Name:</h5>
              <p>{userData.lastName}</p>
            </article>
            <article className="profile--data">
              <h5>Cellphone:</h5>
              <p>{userData.phone}</p>
            </article>
            <article className="profile--data">
              <h5>Email:</h5>
              <p>{userData.email}</p>
            </article>
          </div>

          <div className="profile--skills">
            <article className="skills--content">
              <h5>Skills</h5>
              <ol>
                {userData.skills.map((skill, i) => (
                  <li key={i}>
                    <span className="AS-OF-LUCK">♠</span>
                    {skill}
                  </li>
                ))}
              </ol>
            </article>
            <figure className="cmp-qr--jalz">
              <img
                src={userData.qr}
                alt="James Jalz QR"
                className="qr-jalz--img"
              />
            </figure>
          </div>
        </div>
      </section>

      <MY_BTN_DOWN />

      <section className="profile--form">
        <h3 className="profile--form_title">Edit Profile</h3>
        <form
          ref={rForm}
          className="form--profile"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <figure className="cmp--upload-img">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/2018/2206115_thin-line-user-icon-png-transparent-png.png"
              }
              alt=""
            />
            <label htmlFor="iUploadImg" className="camera--label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z" />
              </svg>
              <input
                accept="image/*"
                type="file"
                id="iUploadImg"
                onChange={mSetFile}
                style={{ display: "none" }}
              />
            </label>
          </figure>

          <MY_GROUP_INPUT
            pLabel="Name"
            pName="inn_name"
            pInputValue={formValues.inn_name.value}
            pFormValues={formValues}
            pSetFormValues={setFormValues}
            pOnChange={handleChange}
            pRegEx={/^[a-zA-Z\s]{3,}$/m}
            pLegendError="Only letters (aA-zZ), Min 3 characters to accepted"
          />
          <MY_GROUP_INPUT
            pLabel="Last Name"
            pName="inn_lastName"
            pFormValues={formValues}
            pSetFormValues={setFormValues}
            pOnChange={handleChange}
            pRegEx={/^[a-zA-Z\s]{3,}$/m}
            pLegendError="Only letters (aA-zZ), Min 3 characters to accepted"
          />
          <MY_GROUP_INPUT
            pLabel="Phone Number"
            pName="inn_phone"
            pFormValues={formValues}
            pSetFormValues={setFormValues}
            pOnChange={handleChange}
            pRegEx={/^\+?[0-9\s]{4,15}$/m}
            pLegendError="Must be in the format +(xxx) xxx xxx xxx"
          />
          <MY_GROUP_INPUT
            pLabel="E-Mail"
            pName="inn_email"
            pFormValues={formValues}
            pSetFormValues={setFormValues}
            pOnChange={handleChange}
            pRegEx={
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/m
            }
            pLegendError="Must be a valid email"
          />
          <MY_SELECT
            pLabel="Skills"
            pAOptions={[
              "Viajar",
              "Cantar",
              "Pistear",
              "Video Juegos",
              "Nadar",
              "Programar",
              "Ninguna de la Anteriores",
            ]}
            pName="inn_skills"
            pFormValues={formValues}
            pSetFormValues={setFormValues}
          />
          <ol className="show-skills">
            {formValues.inn_skills.value?.map((skill, i) => (
              <li key={i}>
                <span className="AS-OF-LUCK">♠</span>
                {skill}
              </li>
            ))}
          </ol>
          <MY_BTN_SEND />
        </form>
      </section>
    </section>
  );
};

export default Profile;

/*
            // setFormValues({
    //   ...formValues,
    //   inn_photo: {
    //     ...formValues.inn_photo,
    //     value: url_img,
    //     bitmap: e.target.files[0],
    //   },
    // });


*/
