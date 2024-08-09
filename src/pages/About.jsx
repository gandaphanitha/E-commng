 
// // const About = () => {
// //   return (
// //     <div>About</div>
// //   )
// // }

// // export default About;
// // pages/About.jsx
// import React from 'react';
// import '../css/About.css'; // Ensure you have a CSS file for styling

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <section className="company-overview">
//         <h2>Our Story</h2>
//         <p>Welcome to [Company Name]! We started with a simple mission to provide [product/service] that [unique value proposition]. Our journey began in [year] with a vision to [company vision].</p>
//       </section>
      
//       <section className="team">
//         <h2>Meet the Team</h2>
//         <div className="team-member">
//           <img src="path/to/photo.jpg" alt="Founder Name" />
//           <h3>Founder Name</h3>
//           <p>Founder & CEO</p>
//           <p>Bio about the founder.</p>
//         </div>
//         {/* More team members */}
//       </section>
      
//       <section className="values">
//         <h2>Our Values</h2>
//         <p>We are committed to [core values]. These principles guide our work and help us deliver exceptional service.</p>
//       </section>
      
//       <section className="testimonials">
//         <h2>What Our Customers Say</h2>
//         <blockquote>
//           <p>"[Testimonial]"</p>
//           <footer>- Customer Name</footer>
//         </blockquote>
//         {/* More testimonials */}
//       </section>
      
//       <section className="social-responsibility">
//         <h2>Our Commitment</h2>
//         <p>We are dedicated to [social responsibility initiatives], including [community engagement, sustainability efforts, etc.].</p>
//       </section>
      
//       <section className="contact">
//         <h2>Contact Us</h2>
//         <p>For any inquiries, please reach out to us at [contact details].</p>
//       </section>
//     </div>
//   );
// };

// export default About;


// pages/About.jsx
import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      
      <section className="company-overview">
        <h2>Our Story</h2>
        <p>Welcome to TechWorld! Since 2010, we've been committed to delivering innovative tech solutions. Our journey began with a vision to revolutionize technology and empower users globally.</p>
      </section>
      
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          {/* <img src="path/to/founder.jpg" alt="Jane Doe" /> */}
          <div>
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
            <p>Jane leads with a vision for innovation and excellence in tech.</p>
          </div>
        </div>
        {/* Add more team members */}
      </section>
      
      <section className="values">
        <h2>Our Values</h2>
        <p>We value Innovation, Integrity, Customer Focus, and Sustainability.</p>
      </section>
      
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>
          <p>"TechWorld's solutions are game-changers!"</p>
          <footer>- Alex Johnson</footer>
        </blockquote>
        {/* Add more testimonials */}
      </section>
      
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@techworld.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default About;
