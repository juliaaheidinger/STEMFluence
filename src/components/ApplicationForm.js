import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 50px 10px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border: px solid black;
  border-radius: 4px;

  form {
    display: grid;
    grid-gap: 15px;
    padding: 20px;
  }
  label {
    display: grid;
    grid-gap: 8px;
  }
  .checkbox {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 5px;
  }

  .AGB-label {
    display: block;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    text-align: center;
    transition: all ease 0.5s;
    letter-spacing: 1.5px;
    background: #fff;
    max-width: 100%;
    height: 35px;
    border: 2px solid black;
    border-radius: 4px;
    padding-left: 15px;
    color: #000;
    text-transform: uppercase;
  }

  textarea {
    height: 100px;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 14px;
    padding-left: 4px;
  }

  input {
    height: 30px;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 14px;
    padding-left: 4px;
  }

  h2 {
    font-size: 26px;
    color: black;
    margin-bottom: 0;
  }

  a {
    color: navy;
    text-decoration: none;
  }
`

export default class ApplicationForm extends React.Component {
  render() {
    return (
      <Wrapper>
        <form id="contact" action="" method="post">
          <h2>Campaign Application</h2>
          <h3>Fill in the form to apply bindingly for this paid Campaign</h3>
          <input
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
          <input placeholder="Your Address" type="text" tabindex="2" required />
          <input
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          />
          <input
            placeholder="Your Social Media Plattform"
            type="text"
            tabindex="4"
            required
          />
          <input placeholder="Your Handle" type="text" tabindex="5" required />
          <input
            placeholder="Number of Followers"
            type="number"
            tabindex="6"
            required
          />
          <label>
            What connects you to the Product/Service?
            <textarea
              placeholder="Type your Message Here...."
              tabindex="7"
              required
            />
          </label>
          <label>
            What's your post idea and how do you realize the product placement?
            <textarea
              placeholder="Type your Idea Here..."
              tabindex="8"
              required
            />
          </label>
          <label>
            how much do you want to get paid for this campaign (in Euro)?
            <input placeholder="Your Fee" type="number" tabindex="9" required />
          </label>
          <div class="checkbox">
            <input
              type="checkbox"
              value="1"
              name="campaigns_application[accepted_terms]"
              id="campaigns_application_accepted_terms"
            />
            <label class="AGB-label">
              Die <a href="https://www.google.com">Influencer-AGB</a> und
              <a href="https://www.google.com">Datenschutzerklärung</a> habe ich
              zur Kenntnis genommen und bin mit deren Geltung einverstanden. Ich
              bestätige, dass alle meine Angaben in dieser Registrierung korrekt
              sind.
            </label>
          </div>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </form>
      </Wrapper>
    )
  }
}
