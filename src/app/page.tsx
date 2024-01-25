// "use client"
import { Box } from "@mui/material";
import React from "react";
import "../styles/home.css";
import Link from "next/link";
// TODO: create the page about my story with paragraphs and pictures of myself
// TODO: deploy the website on vercel or somewhere else
export default function Home() {
  const handleDownloadClick = () => {
    const pdfUrl = "/resume-mpvb.pdf";
    const tempLink = document.createElement("a");
    tempLink.href = pdfUrl;
    tempLink.setAttribute("download", "resume-mpvb.pdf");
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };
  return (
    <div className="home-container">
      <Box className="squared-paper" style={{ textAlign: "center" }}>
        <h1>Hello everyone. My name is Matheus Pontes Vilas Boas!</h1>
        <br />
        <p>This is my sketchbook, where you&apos;ll find all useful information about me.</p>
        <br />
        <p>Just so you know, I am a software developer currently working in web development, but I also engage in research and studies involving artificial intelligence. Additionally, I am a computer science student. </p>
        <br />
        <p>On my <u><b><a href={"https://www.github.com/pontesvilasboas"} className="custom-link" target="_blank" rel="noopener noreferrer">Github</a></b></u>, you can find my projects.</p>
        <br />
        <p>
          On my <u><b><a href={"https://www.linkedin.com/in/pontesvilasboas/"}  className="custom-link" target="_blank" rel="noopener noreferrer">Linkedin</a></b></u>, you can learn more about my academic and professional career, as well as get in touch with me.
        </p>
        <br />
        <p>
          But if you prefer not to contact me through LinkedIn, feel free to access my <u><b><a href={"https://www.instagram.com/matheuspvilasboas"} className="custom-link" target="_blank" rel="noopener noreferrer">Instagram</a></b></u> or even send an email to:
          <u><b>pontesvilasboas@gmail.com</b></u>.
        </p>
        <br />
        <p>And if you&apos;re interested, feel free to <u><b><a href="#" onClick={handleDownloadClick} className="custom-link">download</a></b></u> my resume.</p>
      </Box>
    </div>
  );
}
