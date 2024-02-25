import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";
//firebase
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Firebase";

import { toast, toastOptions, ToastContainer } from "react-toastify"

import { Button, Box, Spacer } from "@chakra-ui/react"


const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--purple);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #00000;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #00000;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #00000;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #00000;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;

const provider = new GoogleAuthProvider();


const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
}

const auth = getAuth(app);








const Contact = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''

  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const createUser = () => {
    console.log("clicked")
    if (!handleValidations()) {
      return;
    }
    createUserWithEmailAndPassword(auth, formData.email, formData.password).then((value) => {
      console.log(value)
    })

  }
  const [user, setUser] = useState(null)
  console.log(user)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { setUser(user); }

      else {
        console.log("you are logged out")
        setUser(null);
      }
    })
  })

  const findUser = () => {

    if (!handleValidations()) {
      return;
    }
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential)
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  const toastOptions = { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark" }
  const handleValidations = () => {
    const { password, confirmPassword } = formData;
    if (password.length < 8) {
      toast.error("Password should be greater than 8 characters", toastOptions);
      return false;
    }

    return true;
  }

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com//">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      <Form>
        <Row>
          <input name="name" type="text" onChange={handleChange} value={formData.name} placeholder="your name" />
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="enter working email id"
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}

            placeholder="enter any password"
          />

        </Row>

        <div style={{ margin: "0 auto" }}>
          <Button
            onClick={createUser}

          >
            SignUp
          </Button>
          <Button
            onClick={findUser}
          >
            SignIn
          </Button>
          <Button
            onClick={signInWithGoogle}
          >
            SignIn via google
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </ContactSection>
  );
};

export default Contact;
