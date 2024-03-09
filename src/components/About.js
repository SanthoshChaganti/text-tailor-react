import React from 'react';
import './About.css';


export default function About(props) {
  return (
    <div className={`about-container ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
      <h1 className={`about-heading ${props.mode === 'dark' ? 'text-white' : ''}`}>Santhosh's Text Manipulation Website</h1>
      <p className={`about-text ${props.mode === 'dark' ? 'text-white' : ''}`}>
        Welcome to Santhosh's Text Manipulation Website! This platform offers a variety of tools to manipulate text easily and efficiently. Whether you're a writer, student, or professional, our website provides you with the tools you need to enhance your text editing experience.
      </p>

      <div className={`features-container ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
        <h2 className={`about-subheading ${props.mode === 'dark' ? 'text-white' : ''}`}>Features</h2>
        <ul className={`about-list ${props.mode === 'dark' ? 'text-white' : ''}`}>
          <li><strong>Convert Case:</strong> Quickly convert text between upper case, lower case, and title case formats.</li>
          <li><strong>Remove Extra Spaces:</strong> Clean up your text by removing unnecessary spaces, tabs, and line breaks.</li>
          <li><strong>Character and Word Count:</strong> Get instant character and word count for your text.</li>
          <li><strong>Copy to Clipboard:</strong> Easily copy your modified text to the clipboard with a single click.</li>
          <li><strong>Dark Mode:</strong> Enhance readability and reduce eye strain with our dark mode feature.</li>
        </ul>
      </div>

      <h2 className={`about-subheading ${props.mode === 'dark' ? 'text-white' : ''}`}>About the Developer</h2>
      <p className={`about-text ${props.mode === 'dark' ? 'text-white' : ''}`}>
        Hello there! I'm Santhosh Chaganti, a passionate developer dedicated to creating innovative and user-friendly solutions. Here's a bit about me:
      </p>

      <ul className={`about-list ${props.mode === 'dark' ? 'text-white' : ''}`}>
        <li><strong>Contact:</strong> +91 9182757161</li>
        <li><strong>Email:</strong> santhoshchaganti897@gmail.com</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/chaganti-santhosh-kumar-reddy-98a172243/" target="_blank" rel="noopener noreferrer" className={`about-link ${props.mode === 'dark' ? 'text-white' : ''}`}>LinkedIn Profile</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/SanthoshChaganti" target="_blank" rel="noopener noreferrer" className={`about-link ${props.mode === 'dark' ? 'text-white' : ''}`}>GitHub Profile</a></li>
      </ul>

      <p className={`about-text ${props.mode === 'dark' ? 'text-white' : ''}`}>
        As a developer, my goal is to deliver high-quality software that meets your needs. Whether you have questions, suggestions, or feedback, feel free to reach out. I'm here to assist you on your journey with our products.
      </p>
    </div>
  );
}
