// // // // // import React, { useState, useEffect } from 'react';

// // // // // const CoursePage = () => {
// // // // //   const [course, setCourse] = useState(null);

// // // // //   useEffect(() => {
// // // // //     fetch('https://codify-backend-n4xb.onrender.com/get-course')
// // // // //       .then(response => response.json())
// // // // //       .then(data => {
// // // // //         // Assuming the API returns an array, find the Python Full Stack course
// // // // //         const pythonCourse = data.find(c => c.title.toLowerCase().includes('python full stack'));
// // // // //         setCourse(pythonCourse);
// // // // //       })
// // // // //       .catch(error => console.error('Error fetching course:', error));
// // // // //   }, []);

// // // // //   if (!course) return <div>Loading...</div>;

// // // // //   return (
// // // // //     <div style={{ fontFamily: 'Inter, sans-serif' }}>
// // // // //       {/* Banner Section */}
// // // // //       <div style={{
// // // // //         background: 'linear-gradient(90deg, rgba(40,14,92,1) 0%, rgba(40,14,92,0.8) 100%)',
// // // // //         color: '#FFFFFF',
// // // // //         padding: '50px 20px',
// // // // //         textAlign: 'center'
// // // // //       }}>
// // // // //         <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
// // // // //           PYTHON FULL STACK WEB DEVELOPMENT TRAINING
// // // // //         </h1>
// // // // //         <p style={{ fontSize: '16px', marginBottom: '20px' }}>
// // // // //           Go from Beginner to Expert in Python Full Stack by building projects. The best investment for your Python Web Development journey!
// // // // //         </p>
// // // // //         <button style={{
// // // // //           backgroundColor: '#FFFFFF',
// // // // //           color: '#280E5C',
// // // // //           padding: '10px 20px',
// // // // //           border: 'none',
// // // // //           borderRadius: '20px',
// // // // //           fontWeight: 'bold',
// // // // //           cursor: 'pointer'
// // // // //         }}>
// // // // //           ENROLL NOW
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* What You'll Learn Section */}
// // // // //       <div style={{ padding: '40px 20px' }}>
// // // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // //           What You'll Learn
// // // // //         </h2>
// // // // //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '16px' }}>
// // // // //           <ul style={{ listStyleType: 'none', padding: 0 }}>
// // // // //             <li style={{ marginBottom: '10px' }}>✔ Learn best practices of Front-End and Server applications</li>
// // // // //             <li style={{ marginBottom: '10px' }}>✔ Add File Upload to ReactJS + Node/Express Applications</li>
// // // // //             <li style={{ marginBottom: '10px' }}>✔ Real world API building</li>
// // // // //             <li style={{ marginBottom: '10px' }}>✔ Work on various case studies and projects using Python, Django, React, Javascript, Tailwind CSS, etc</li>
// // // // //           </ul>
// // // // //           <ul style={{ listStyleType: 'none', padding: 0 }}>
// // // // //             <li style={{ marginBottom: '10px' }}>✔ Learn how to connect ReactJS with Python and Django</li>
// // // // //             <li style={{ marginBottom: '10px' }}>✔ Learn how to implement Authentication & Authorization</li>
// // // // //             <li style={{ marginBottom: '10px' }}>✔ Learn all Front end and Backend technologies with our Python Full Stack training course.</li>
// // // // //           </ul>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Our Training Process Section */}
// // // // //       <div style={{ padding: '40px 20px' }}>
// // // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
// // // // //           Our Training Process
// // // // //         </h2>
// // // // //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // //           {[
// // // // //             { icon: '👥', label: 'Practical Session' },
// // // // //             { icon: '📝', label: 'Assignment' },
// // // // //             { icon: '⚙️', label: 'Projects' },
// // // // //             { icon: '📄', label: 'Resume Building' },
// // // // //             { icon: '💬', label: 'Interview Preparation' },
// // // // //             { icon: '💼', label: 'Be Job Ready' }
// // // // //           ].map((step, index) => (
// // // // //             <div key={index} style={{ textAlign: 'center', flex: '1', minWidth: '100px' }}>
// // // // //               <div style={{ fontSize: '40px' }}>{step.icon}</div>
// // // // //               <p style={{ fontSize: '14px', marginTop: '10px' }}>{step.label}</p>
// // // // //               {index < 5 && <span style={{ display: 'inline-block', margin: '0 10px' }}>➡️</span>}
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Key Highlights Section */}
// // // // //       <div style={{
// // // // //         background: 'linear-gradient(90deg, rgba(40,14,92,1) 0%, rgba(40,14,92,0.8) 100%)',
// // // // //         color: '#FFFFFF',
// // // // //         padding: '40px 20px'
// // // // //       }}>
// // // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
// // // // //           Key Highlights
// // // // //         </h2>
// // // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
// // // // //           {[
// // // // //             { icon: '🌟', label: 'Personalized Career Coach' },
// // // // //             { icon: '📜', label: 'Certification' },
// // // // //             { icon: '📚', label: 'Study Material' },
// // // // //             { icon: '📝', label: 'Mock Interviews' },
// // // // //             { icon: '🛠️', label: '90% Practical Training' },
// // // // //             { icon: '💼', label: '100% Job Assurance' },
// // // // //             { icon: '❓', label: 'Instant Doubt Solving' },
// // // // //             { icon: '📈', label: 'Live Projects' },
// // // // //             { icon: '⏳', label: '100+ Hrs Training Duration' },
// // // // //             { icon: '🎓', label: '25000+ Students Trained' },
// // // // //             { icon: '🏢', label: '1000+ Hiring Companies' },
// // // // //             { icon: '💰', label: '8+ LPA Highest Fresher Salary' }
// // // // //           ].map((highlight, index) => (
// // // // //             <div key={index} style={{
// // // // //               backgroundColor: 'rgba(255,255,255,0.1)',
// // // // //               padding: '20px',
// // // // //               borderRadius: '10px',
// // // // //               textAlign: 'center'
// // // // //             }}>
// // // // //               <div style={{ fontSize: '30px', marginBottom: '10px' }}>{highlight.icon}</div>
// // // // //               <p style={{ fontSize: '14px' }}>{highlight.label}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Course Content Section */}
// // // // //       <div style={{ padding: '40px 20px' }}>
// // // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // //           Course Content
// // // // //         </h2>
// // // // //         <div style={{ backgroundColor: '#E6F6FA', padding: '20px', borderRadius: '10px' }}>
// // // // //           <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
// // // // //             HTML & CSS
// // // // //           </h3>
// // // // //           <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '16px' }}>
// // // // //             <li>INTRODUCTION TO HTML</li>
// // // // //             <li>HTML ELEMENTS</li>
// // // // //             <li>HTML TABLE</li>
// // // // //             <li>HTML FORMS</li>
// // // // //             <li>INTRODUCTION TO CSS</li>
// // // // //             <li>SIZING PROPERTIES</li>
// // // // //             <li>CSS BOX MODEL</li>
// // // // //             <li>BORDER PROPERTY</li>
// // // // //             <li>FLOAT</li>
// // // // //             <li>OVERFLOW PROPERTY</li>
// // // // //             <li>VISIBILITY PROPERTY</li>
// // // // //             <li>DISPLAY PROPERTY</li>
// // // // //             <li>FLEX PROPERTY</li>
// // // // //             <li>GRADIENTS & MULTIPLE BACKGROUNDS</li>
// // // // //             <li>POSITION PROPERTY</li>
// // // // //             <li>TRANSFORM, TRANSITIONS AND ANIMATIONS</li>
// // // // //             <li>GRID</li>
// // // // //             <li>MEDIA QUERIES</li>
// // // // //             <li>PROFESSIONAL PROJECTS</li>
// // // // //           </ul>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Skills You Will Gain Section */}
// // // // //       <div style={{ padding: '40px 20px' }}>
// // // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // //           Skills You Will Gain
// // // // //         </h2>
// // // // //         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
// // // // //           {[
// // // // //             'Python Stack', 'Django', 'MYSQL', 'Flask', 'Tailwind CSS', 'Bootstrap',
// // // // //             'HTML-CSS', 'Web Development', 'Front end Development', 'Web Design'
// // // // //           ].map((skill, index) => (
// // // // //             <span key={index} style={{
// // // // //               backgroundColor: '#F5F5F5',
// // // // //               padding: '10px 20px',
// // // // //               borderRadius: '20px',
// // // // //               fontSize: '14px'
// // // // //             }}>
// // // // //               {skill}
// // // // //             </span>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Course Certification Section */}
// // // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
// // // // //           Course Certification
// // // // //         </h2>
// // // // //         <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
// // // // //           Become a Certified Python Full Stack Web Development Training with Codify Institute and enhance your career prospects to the next level.
// // // // //         </p>
// // // // //         <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
// // // // //           This certificate serves as an official badge of your successful Python Full Stack Web Development Training course completion, highlighting your expertise.
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CoursePage;

// // // // import React from 'react';
// // // // import { useParams } from 'react-router-dom';

// // // // const courseData = [
// // // //   {
// // // //     "_id": "6614e70e5e83f24a6f063155",
// // // //     "CourseName": "Python Full Stack Web Development Training",
// // // //     "Category": "Full Stack Web Development",
// // // //     "Description": "Go from Beginner to Expert in Python Full Stack by building projects. The best investment for your Python Web Development journey!",
// // // //     "Skills": [
// // // //       "Python Stack",
// // // //       "Django",
// // // //       "MYSQL",
// // // //       "Flask",
// // // //       "Tailwind CSS",
// // // //       "Bootstrap",
// // // //       "HTML-CSS",
// // // //       "Web Development",
// // // //       "Front end Development",
// // // //       "Web Design"
// // // //     ],
// // // //     "WYWL": [
// // // //       "Learn best practices of Front-End and Server applications",
// // // //       "Learn how to connect ReactJS with Python and Django",
// // // //       "Add File Upload to ReactJS + Node/Express Applications",
// // // //       "Learn how to implement Authentication & Authorization",
// // // //       "Real world API building",
// // // //       "Learn all Front end and Backend technologies with our Python Full Stack training course.",
// // // //       "Work on various case studies and projects using Python, Django, React, Javascript, Tailwind CSS, etc"
// // // //     ],
// // // //     "CourseContent": [
// // // //       {
// // // //         "Heading": "HTML & CSS",
// // // //         "subheadings": [
// // // //           "Introduction to HTML",
// // // //           "HTML Elements",
// // // //           "HTML Table",
// // // //           "HTML Forms",
// // // //           "Introduction to CSS",
// // // //           "Sizing Properties",
// // // //           "CSS Box Model",
// // // //           "Border property",
// // // //           "Background property",
// // // //           "Float",
// // // //           "Overflow property",
// // // //           "Visibility property",
// // // //           "Display property",
// // // //           "Flex property",
// // // //           "Gradients & Multiple Backgrounds",
// // // //           "Position property",
// // // //           "Transformation, Transitions and Animations",
// // // //           "Grid",
// // // //           "Media Queries",
// // // //           "Professional Projects"
// // // //         ],
// // // //         "_id": "6614e7905e83f24a6f063192"
// // // //       },
// // // //       {
// // // //         "Heading": "TAILWIND CSS",
// // // //         "subheadings": [
// // // //           "Basics Of Tailwind CSS",
// // // //           "Installation of Tailwind CSS",
// // // //           "Layout",
// // // //           "Spacing",
// // // //           "Sizing",
// // // //           "Flexbox and Grid",
// // // //           "Typography",
// // // //           "Backgrounds",
// // // //           "Borders",
// // // //           "Effects",
// // // //           "Filters",
// // // //           "Tables",
// // // //           "Transitions and Animations",
// // // //           "Transform",
// // // //           "Interactivity",
// // // //           "Tailwind Content & styles",
// // // //           "Navigation",
// // // //           "Component",
// // // //           "Forms",
// // // //           "Data",
// // // //           "Helpers",
// // // //           "Design Blocks For functionality"
// // // //         ],
// // // //         "_id": "6614e9b65e83f24a6f063305"
// // // //       },
// // // //       {
// // // //         "Heading": "PYTHON",
// // // //         "subheadings": [
// // // //           "Introduction",
// // // //           "String manipulation",
// // // //           "Data Structures",
// // // //           "Control loops",
// // // //           "Functions",
// // // //           "Object Oriented Programming",
// // // //           "Modules and packages",
// // // //           "Exception Handling",
// // // //           "Variables",
// // // //           "PEP8",
// // // //           "Advanced concepts",
// // // //           "Application Programming Interface (API)",
// // // //           "Introduction to Machine Learning",
// // // //           "Introduction to Data Science"
// // // //         ],
// // // //         "_id": "6614ec305e83f24a6f0637bf"
// // // //       },
// // // //       {
// // // //         "Heading": "DJANGO-FLASK",
// // // //         "subheadings": [
// // // //           "Django Setup",
// // // //           "Django Models",
// // // //           "Models-Templates-Views Paradigm",
// // // //           "Django Forms",
// // // //           "Model Forms Exercise",
// // // //           "URL Template Inheritance, Template Filters and Custom Filters",
// // // //           "Django Passwords",
// // // //           "Flask: Structure & Routing",
// // // //           "Restful API with Flask",
// // // //           "Building a complete Flask web application"
// // // //         ],
// // // //         "_id": "6614ec895e83f24a6f0638e6"
// // // //       },
// // // //       {
// // // //         "Heading": "MYSQL",
// // // //         "subheadings": [
// // // //           "Introduction To MySQL",
// // // //           "Inserting Data",
// // // //           "CRUD commands",
// // // //           "String Functions",
// // // //           "Basic Database terminology",
// // // //           "MySQL constraints",
// // // //           "Aggregate Functions",
// // // //           "MySQL Stored Procedure",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614ece65e83f24a6f063a1f"
// // // //       },
// // // //       {
// // // //         "Heading": "PROFESSIONAL PROJECTS",
// // // //         "subheadings": [
// // // //           "Build social network",
// // // //           "E-commerce website",
// // // //           "Blog Application",
// // // //           "Canva website clone",
// // // //           "Bookmyshow Clone",
// // // //           "AirBnB Clone"
// // // //         ],
// // // //         "_id": "6614ed4c5e83f24a6f063b54"
// // // //       }
// // // //     ],
// // // //     "__v": 208,
// // // //     "NavName": "Python Full Stack"
// // // //   },
// // // //   {
// // // //     "_id": "6614ee215e83f24a6f063cbd",
// // // //     "CourseName": "Java Full Stack Training Course",
// // // //     "Category": "Full Stack Web Development",
// // // //     "Description": "Learn how to build Full Stack web applications & websites with React and Java Spring Boot with this project-focused course.",
// // // //     "Skills": [
// // // //       "Java Stack",
// // // //       "Core Java",
// // // //       "Spring Boot",
// // // //       "JUnit",
// // // //       "SQL",
// // // //       "React JS",
// // // //       "Javascript",
// // // //       "Advanced Javascript",
// // // //       "Microservices",
// // // //       "Tailwind CSS",
// // // //       "Bootstrap",
// // // //       "HTML",
// // // //       "Full Stack Web Development"
// // // //     ],
// // // //     "WYWL": [
// // // //       "Develop a Full Stack web application with React front-end and Spring Boot back-end",
// // // //       "Learn how to build React front-end applications …. all from the beginning.",
// // // //       "Develop your code using modern development tools such as IntelliJ, VS Code, Maven and npm",
// // // //       "Learn the magic of Spring Boot – Auto Configuration, Spring Initializr and Starter Projects.",
// // // //       "Develop a Spring Boot back-end using REST APIs and MySQL database",
// // // //       "Make realtime projects on React, Java, Spring Boot, API, Microservices, Javascript, etc."
// // // //     ],
// // // //     "CourseContent": [
// // // //       {
// // // //         "Heading": "HTML & CSS",
// // // //         "subheadings": [
// // // //           "Introduction to HTML",
// // // //           "HTML Elements",
// // // //           "HTML Table",
// // // //           "HTML Forms",
// // // //           "Introduction to CSS",
// // // //           "Sizing Properties",
// // // //           "CSS Box Model",
// // // //           "Border property",
// // // //           "Background property",
// // // //           "Float",
// // // //           "Overflow property",
// // // //           "Visibility property",
// // // //           "Display property",
// // // //           "Flex property",
// // // //           "Gradients & Multiple Backgrounds",
// // // //           "Position property",
// // // //           "Transformation, Transitions and Animations",
// // // //           "Grid",
// // // //           "Media Queries",
// // // //           "Professional Projects"
// // // //         ],
// // // //         "_id": "6614e7905e83f24a6f063192"
// // // //       },
// // // //       {
// // // //         "Heading": "TAILWIND CSS",
// // // //         "subheadings": [
// // // //           "Basics Of Tailwind CSS",
// // // //           "Installation of Tailwind CSS",
// // // //           "Layout",
// // // //           "Spacing",
// // // //           "Sizing",
// // // //           "Flexbox and Grid",
// // // //           "Typography",
// // // //           "Backgrounds",
// // // //           "Borders",
// // // //           "Effects",
// // // //           "Filters",
// // // //           "Tables",
// // // //           "Transitions and Animations",
// // // //           "Transform",
// // // //           "Interactivity",
// // // //           "Tailwind Content & styles",
// // // //           "Navigation",
// // // //           "Component",
// // // //           "Forms",
// // // //           "Data",
// // // //           "Helpers",
// // // //           "Design Blocks For functionality"
// // // //         ],
// // // //         "_id": "6614e9b65e83f24a6f063305"
// // // //       },
// // // //       {
// // // //         "Heading": "MYSQL",
// // // //         "subheadings": [
// // // //           "Introduction To MySQL",
// // // //           "Inserting Data",
// // // //           "CRUD commands",
// // // //           "String Functions",
// // // //           "Basic Database terminology",
// // // //           "MySQL constraints",
// // // //           "Aggregate Functions",
// // // //           "MySQL Stored Procedure",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614ece65e83f24a6f063a1f"
// // // //       },
// // // //       {
// // // //         "Heading": "PROFESSIONAL PROJECTS",
// // // //         "subheadings": [
// // // //           "Build social network",
// // // //           "E-commerce website",
// // // //           "Blog Application",
// // // //           "Canva website clone",
// // // //           "Bookmyshow Clone",
// // // //           "AirBnB Clone"
// // // //         ],
// // // //         "_id": "6614ed4c5e83f24a6f063b54"
// // // //       },
// // // //       {
// // // //         "Heading": "CORE JAVA",
// // // //         "subheadings": [
// // // //           "Introduction To Java",
// // // //           "Java Fundamentals",
// // // //           "Essentials of Object-Oriented Programming",
// // // //           "Writing Java Classes",
// // // //           "Packages",
// // // //           "Exception Handling",
// // // //           "I/O Operations in Java",
// // // //           "Multithreaded Programming",
// // // //           "Java Util Package / Collections Framework",
// // // //           "Generics",
// // // //           "Inner Classes",
// // // //           "Abstract Window Toolkit",
// // // //           "Collection of Framework",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "662e05156cdcd337abe8a8af"
// // // //       },
// // // //       {
// // // //         "Heading": "SPRINGBOOT AND SPRINGBOOT JPA",
// // // //         "subheadings": [
// // // //           "Spring 1st Project",
// // // //           "Injections",
// // // //           "Creating Interface",
// // // //           "Java Based Config",
// // // //           "Bean Name",
// // // //           "Scope Annotation",
// // // //           "Autowire",
// // // //           "Spring To Spring Boot",
// // // //           "Using Annotations In Spring Boot",
// // // //           "Different Layers",
// // // //           "Service Class",
// // // //           "Repository Layer"
// // // //         ],
// // // //         "_id": "662e05b46cdcd337abe8c38a"
// // // //       }
// // // //     ],
// // // //     "__v": 55,
// // // //     "NavName": "Java Full Stack"
// // // //   },
// // // //   {
// // // //     "_id": "6614f1ac5e83f24a6f063d79",
// // // //     "CourseName": "DotNet Full Stack Web Development Training",
// // // //     "Category": "Full Stack Web Development",
// // // //     "Description": "Learn to create Full Stack Web Applications with ASP.NET, Web API, Entity Framework, C# REST API, and Angular!",
// // // //     "Skills": [
// // // //       "ASP Dot Net",
// // // //       "Dot Net Core",
// // // //       "Dot Net Stack",
// // // //       "Dot Net",
// // // //       "MVC Dot Net",
// // // //       "Javascript",
// // // //       "Advanced Javascript",
// // // //       "Tailwind CSS",
// // // //       "Bootstrap",
// // // //       "HTML",
// // // //       "CSS",
// // // //       "Web Development",
// // // //       "Frontend",
// // // //       "Web Design"
// // // //     ],
// // // //     "WYWL": [
// // // //       ".NET API with Authentication and Authorization.",
// // // //       "Learn SQL transactions and transaction commands.",
// // // //       "Async and Sync communication between Microservices.",
// // // //       "Learn MVC with hands-on examples.",
// // // //       "How to create your own function.",
// // // //       "Build secure web applications with ASP .NET MVC and C#.",
// // // //       "Learn objects, classes, fields, properties, methods and constructors in detail."
// // // //     ],
// // // //     "CourseContent": [
// // // //       {
// // // //         "Heading": "HTML & CSS",
// // // //         "subheadings": [
// // // //           "Introduction to HTML",
// // // //           "HTML Elements",
// // // //           "HTML Table",
// // // //           "HTML Forms",
// // // //           "Introduction to CSS",
// // // //           "Sizing Properties",
// // // //           "CSS Box Model",
// // // //           "Border property",
// // // //           "Background property",
// // // //           "Float",
// // // //           "Overflow property",
// // // //           "Visibility property",
// // // //           "Display property",
// // // //           "Flex property",
// // // //           "Gradients & Multiple Backgrounds",
// // // //           "Position property",
// // // //           "Transformation, Transitions and Animations",
// // // //           "Grid",
// // // //           "Media Queries",
// // // //           "Professional Projects"
// // // //         ],
// // // //         "_id": "6614e7905e83f24a6f063192"
// // // //       },
// // // //       {
// // // //         "Heading": "TAILWIND CSS",
// // // //         "subheadings": [
// // // //           "Basics Of Tailwind CSS",
// // // //           "Installation of Tailwind CSS",
// // // //           "Layout",
// // // //           "Spacing",
// // // //           "Sizing",
// // // //           "Flexbox and Grid",
// // // //           "Typography",
// // // //           "Backgrounds",
// // // //           "Borders",
// // // //           "Effects",
// // // //           "Filters",
// // // //           "Tables",
// // // //           "Transitions and Animations",
// // // //           "Transform",
// // // //           "Interactivity",
// // // //           "Tailwind Content & styles",
// // // //           "Navigation",
// // // //           "Component",
// // // //           "Forms",
// // // //           "Data",
// // // //           "Helpers",
// // // //           "Design Blocks For functionality"
// // // //         ],
// // // //         "_id": "6614e9b65e83f24a6f063305"
// // // //       },
// // // //       {
// // // //         "Heading": "JAVASCRIPT",
// // // //         "subheadings": [
// // // //           "Introduction to Javascript",
// // // //           "Variables",
// // // //           "Datatypes",
// // // //           "Popup Boxes",
// // // //           "Built-in-functions",
// // // //           "Functions",
// // // //           "DOM",
// // // //           "Operators",
// // // //           "Math Methods",
// // // //           "String methods",
// // // //           "Conditional Statements",
// // // //           "Function with parameter",
// // // //           "Arrays and Objects",
// // // //           "Nested Array and Objects",
// // // //           "Array methods",
// // // //           "Loops",
// // // //           "Nested Loops",
// // // //           "Break and Continue",
// // // //           "Events",
// // // //           "Components",
// // // //           "Timing Functions",
// // // //           "DOM Elements",
// // // //           "Built-in-objects",
// // // //           "JavaScript Form Validation",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614ea565e83f24a6f0633d1"
// // // //       },
// // // //       {
// // // //         "Heading": "ADVANCED JAVASCRIPT",
// // // //         "subheadings": [
// // // //           "The let keyword",
// // // //           "The const keyword",
// // // //           "Arrow Functions",
// // // //           "Spread and Rest Operator",
// // // //           "String and Object Literals",
// // // //           "Optional Chaining",
// // // //           "Default Parameter",
// // // //           "Array and Object Destructuring",
// // // //           "Array Methods",
// // // //           "array.filer()",
// // // //           "array.find()",
// // // //           "array.map()",
// // // //           "array.findIndex()",
// // // //           "array.reduce()",
// // // //           "array.foreach()",
// // // //           "JavaScript Classes and Objects",
// // // //           "Callback Function",
// // // //           "JavaScript Hoisting",
// // // //           "Closure",
// // // //           "Session storage and Local Storage",
// // // //           "AJAX",
// // // //           "API Fetching",
// // // //           "Promises",
// // // //           "Promise methods",
// // // //           "ASYNC / Await",
// // // //           "Fetch method",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614eafb5e83f24a6f0634c8"
// // // //       },
// // // //       {
// // // //         "Heading": "ANGULAR",
// // // //         "subheadings": [
// // // //           "Introduction",
// // // //           "TypeScript",
// // // //           "Angular Building Blocks",
// // // //           "Anatomy of an Angular application",
// // // //           "Templates",
// // // //           "Directives",
// // // //           "Pipes",
// // // //           "Dependency Injection",
// // // //           "Forms",
// // // //           "Routing and Navigation",
// // // //           "Communicating with Servers",
// // // //           "SQL",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614f4815e83f24a6f063fc1"
// // // //       },
// // // //       {
// // // //         "Heading": "C",
// // // //         "subheadings": [
// // // //           "Overview of C#",
// // // //           "Data Types",
// // // //           "Memory Concepts",
// // // //           "Control Structures",
// // // //           "Arrays",
// // // //           "Namespaces"
// // // //         ],
// // // //         "_id": "6614f64e5b73714be8dbccc8"
// // // //       },
// // // //       {
// // // //         "Heading": "ASP DOT NET",
// // // //         "subheadings": [
// // // //           "Introduction to Javascript on server & Node.js",
// // // //           "Events and callbacks in Node js",
// // // //           "Modules/Packages",
// // // //           "Network Communication & Web Technology",
// // // //           "Events and In build modules of node js and it working",
// // // //           "Babel and modern javascript with es6+ syntaxes",
// // // //           "API and HTTP methods",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614f7035b73714be8dbcfb8"
// // // //       },
// // // //       {
// // // //         "Heading": "MVC DOT NET",
// // // //         "subheadings": [
// // // //           "ASP.NET MVC fundamentals",
// // // //           "Restful services",
// // // //           "ASP.NET web API",
// // // //           "Client-side development",
// // // //           "Authentication and authorization",
// // // //           "Performance optimization",
// // // //           "End-to-end systematically"
// // // //         ],
// // // //         "_id": "6614f7435b73714be8dbd0a3"
// // // //       },
// // // //       {
// // // //         "Heading": "PROFESSIONAL PROJECTS",
// // // //         "subheadings": [
// // // //           "Build social network",
// // // //           "E-commerce website",
// // // //           "Blog Application",
// // // //           "Canva website clone",
// // // //           "Bookmyshow Clone",
// // // //           "Olx Clone",
// // // //           "AirBnB Clone"
// // // //         ],
// // // //         "_id": "6614f76f5b73714be8dbd19c"
// // // //       }
// // // //     ],
// // // //     "__v": 69,
// // // //     "NavName": "DotNet Full Stack"
// // // //   },
// // // //   {
// // // //     "_id": "6614f7bd5b73714be8dbd34c",
// // // //     "CourseName": "PHP Full Stack Web Development Training",
// // // //     "Category": "Full Stack Web Development",
// // // //     "Description": "The Complete PHP Mastery from Frontend to Backend with our PHP Full Stack Training Course in India!",
// // // //     "Skills": [
// // // //       "PHP Stack",
// // // //       "Laravel",
// // // //       "Angular",
// // // //       "MySQL",
// // // //       "Javascript",
// // // //       "Advanced Javascript",
// // // //       "Tailwind CSS",
// // // //       "Material UI",
// // // //       "Bootstrap",
// // // //       "HTML",
// // // //       "CSS",
// // // //       "PHP",
// // // //       "Ajax",
// // // //       "Json",
// // // //       "Web Development",
// // // //       "Frontend Development",
// // // //       "Web Design"
// // // //     ],
// // // //     "WYWL": [
// // // //       "Learn best practices of Front-End and Server applications",
// // // //       "Learn how to connect ReactJS with NodeJS, Express & MongoDB",
// // // //       "Add File Upload to ReactJS + Node/Express Applications",
// // // //       "Learn how to implement Authentication & Authorization",
// // // //       "Real world API building with Node JS, Typescript, Express, Mongodb",
// // // //       "Learn all Front end and Backend technologies with many real time assignments",
// // // //       "Work on various case studies and projects using PHP stack"
// // // //     ],
// // // //     "CourseContent": [
// // // //       {
// // // //         "Heading": "HTML & CSS",
// // // //         "subheadings": [
// // // //           "Introduction to HTML",
// // // //           "HTML Elements",
// // // //           "HTML Table",
// // // //           "HTML Forms",
// // // //           "Introduction to CSS",
// // // //           "Sizing Properties",
// // // //           "CSS Box Model",
// // // //           "Border property",
// // // //           "Background property",
// // // //           "Float",
// // // //           "Overflow property",
// // // //           "Visibility property",
// // // //           "Display property",
// // // //           "Flex property",
// // // //           "Gradients & Multiple Backgrounds",
// // // //           "Position property",
// // // //           "Transformation, Transitions and Animations",
// // // //           "Grid",
// // // //           "Media Queries",
// // // //           "Professional Projects"
// // // //         ],
// // // //         "_id": "6614e7905e83f24a6f063192"
// // // //       },
// // // //       {
// // // //         "Heading": "TAILWIND CSS",
// // // //         "subheadings": [
// // // //           "Basics Of Tailwind CSS",
// // // //           "Installation of Tailwind CSS",
// // // //           "Layout",
// // // //           "Spacing",
// // // //           "Sizing",
// // // //           "Flexbox and Grid",
// // // //           "Typography",
// // // //           "Backgrounds",
// // // //           "Borders",
// // // //           "Effects",
// // // //           "Filters",
// // // //           "Tables",
// // // //           "Transitions and Animations",
// // // //           "Transform",
// // // //           "Interactivity",
// // // //           "Tailwind Content & styles",
// // // //           "Navigation",
// // // //           "Component",
// // // //           "Forms",
// // // //           "Data",
// // // //           "Helpers",
// // // //           "Design Blocks For functionality"
// // // //         ],
// // // //         "_id": "6614e9b65e83f24a6f063305"
// // // //       },
// // // //       {
// // // //         "Heading": "JAVASCRIPT",
// // // //         "subheadings": [
// // // //           "Introduction to Javascript",
// // // //           "Variables",
// // // //           "Datatypes",
// // // //           "Popup Boxes",
// // // //           "Built-in-functions",
// // // //           "Functions",
// // // //           "DOM",
// // // //           "Operators",
// // // //           "Math Methods",
// // // //           "String methods",
// // // //           "Conditional Statements",
// // // //           "Function with parameter",
// // // //           "Arrays and Objects",
// // // //           "Nested Array and Objects",
// // // //           "Array methods",
// // // //           "Loops",
// // // //           "Nested Loops",
// // // //           "Break and Continue",
// // // //           "Events",
// // // //           "Components",
// // // //           "Timing Functions",
// // // //           "DOM Elements",
// // // //           "Built-in-objects",
// // // //           "JavaScript Form Validation",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614ea565e83f24a6f0633d1"
// // // //       },
// // // //       {
// // // //         "Heading": "ADVANCED JAVASCRIPT",
// // // //         "subheadings": [
// // // //           "The let keyword",
// // // //           "The const keyword",
// // // //           "Arrow Functions",
// // // //           "Spread and Rest Operator",
// // // //           "String and Object Literals",
// // // //           "Optional Chaining",
// // // //           "Default Parameter",
// // // //           "Array and Object Destructuring",
// // // //           "Array Methods",
// // // //           "array.filer()",
// // // //           "array.find()",
// // // //           "array.map()",
// // // //           "array.findIndex()",
// // // //           "array.reduce()",
// // // //           "array.foreach()",
// // // //           "JavaScript Classes and Objects",
// // // //           "Callback Function",
// // // //           "JavaScript Hoisting",
// // // //           "Closure",
// // // //           "Session storage and Local Storage",
// // // //           "AJAX",
// // // //           "API Fetching",
// // // //           "Promises",
// // // //           "Promise methods",
// // // //           "ASYNC / Await",
// // // //           "Fetch method",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614eafb5e83f24a6f0634c8"
// // // //       },
// // // //       {
// // // //         "Heading": "ANGULAR",
// // // //         "subheadings": [
// // // //           "Introduction",
// // // //           "TypeScript",
// // // //           "Angular Building Blocks",
// // // //           "Anatomy of an Angular application",
// // // //           "Templates",
// // // //           "Directives",
// // // //           "Pipes",
// // // //           "Dependency Injection",
// // // //           "Forms",
// // // //           "Routing and Navigation",
// // // //           "Communicating with Servers",
// // // //           "SQL",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614f4815e83f24a6f063fc1"
// // // //       },
// // // //       {
// // // //         "Heading": "MATERIAL UI",
// // // //         "subheadings": [
// // // //           "Basics of Material UI",
// // // //           "Material UI Layout",
// // // //           "Inputs",
// // // //           "Data display and Feedback",
// // // //           "Surface and Navigation",
// // // //           "Utilities and MUI X",
// // // //           "Components API",
// // // //           "Customization"
// // // //         ],
// // // //         "_id": "6614f9675b73714be8dbd42f"
// // // //       },
// // // //       {
// // // //         "Heading": "PHP-MYSQL",
// // // //         "subheadings": [
// // // //           "Introduction",
// // // //           "PHP Fundamentals",
// // // //           "Arrays",
// // // //           "PHP Functions",
// // // //           "PHP Forms",
// // // //           "PHP Global Arrays",
// // // //           "PHP Cookies & PHP Sessions",
// // // //           "Advanced SQL query building",
// // // //           "Advanced MySQL Joins, Full Text Search",
// // // //           "Ajax & JSON",
// // // //           "Live Projects"
// // // //         ],
// // // //         "_id": "6614f9955b73714be8dbd501"
// // // //       },
// // // //       {
// // // //         "Heading": "LARAVEL",
// // // //         "subheadings": [
// // // //           "Setting Up and Installing Laravel",
// // // //           "Using Controllers",
// // // //           "Laravel Routing",
// // // //           "Displaying Your Views",
// // // //           "Using Forms and Gathering Input",
// // // //           "Models & Migrations",
// // // //           "Storing and Using Data",
// // // //           "Relationships",
// // // //           "Using Composer Packages"
// // // //         ],
// // // //         "_id": "6614f9d65b73714be8dbd60a"
// // // //       },
// // // //       {
// // // //         "Heading": "API CREATION",
// // // //         "subheadings": [
// // // //           "Integrating the API with a front-end application",
// // // //           "Creating APIs for CRUD operations",
// // // //           "Making API requests with cURL",
// // // //           "Handling JSON responses"
// // // //         ],
// // // //         "_id": "6614fa0b5b73714be8dbd719"
// // // //       },
// // // //       {
// // // //         "Heading": "PROFESSIONAL PROJECTS",
// // // //         "subheadings": [
// // // //           "Build social network",
// // // //           "E-commerce website",
// // // //           "Blog Application",
// // // //           "Canva website clone",
// // // //           "Bookmyshow Clone",
// // // //           "Olx Clone",
// // // //           "AirBnB Clone"
// // // //         ],
// // // //         "_id": "6614fa2d5b73714be8dbd828"
// // // //       }
// // // //     ],
// // // //     "__v": 72,
// // // //     "NavName": "PHP Full Stack"
// // // //   },
// // // //   {
// // // //     "_id": "6614fa815b73714be8dbd9ff",
// // // //     "CourseName": "MEAN Stack Web Development Training",
// // // //     "Category": "Full Stack Web Development",
// // // //     "Description": "Learn how to connect your Angular Frontend to a NodeJS, Express & MongoDB Backend by building real Applications!",
// // // //     "Skills": [
// // // //       "MEAN Stack",
// // // //       "MongoDB",
// // // //       "Express JS",
// // // //       "Angular",
// // // //       "NodeJs",
// // // //       "Javascript",
// // // //       "Advanced Javascript",
// // // //       "Tailwind CSS",
// // // //       "Material UI",
// // // //       "Bootstrap",
// // // //       "HTML",
// // // //       "CSS",
// // // //       "Web Development",
// // // //       "Frontend Development",
// // // //       "Web Design"
// // // //     ],
// // // //     "WYWL": [
// // // //       "Craft both front-end (client-side) and back-end (server-side) components within a single ecosystem.",
// // // //       "Develop a strong command of JavaScript across its various environments, including the browser, Node.js, and Angular.",
// // // //       "Master the core MEAN stack components: MongoDB (NoSQL database), Express.js (backend framework), Angular (frontend framework), and Node.js (JavaScript runtime).",
// // // //       "Create RESTful APIs in Node.js using Express.js to handle data requests and responses efficiently.",
// // // //       "Leverage Angular’s framework and components to build interactive and visually appealing user interfaces.",
// // // //       "Gain solid knowledge of MongoDB’s data modeling and querying capabilities"
// // // //     ],
// // // //     "CourseContent": [
// // // //       {
// // // //         "Heading": "HTML & CSS",
// // // //         "subheadings": [
// // // //           "Introduction to HTML",
// // // //           "HTML Elements",
// // // //           "HTML Table",
// // // //           "HTML Forms",
// // // //           "Introduction to CSS",
// // // //           "Sizing Properties",
// // // //           "CSS Box Model",
// // // //           "Border property",
// // // //           "Background property",
// // // //           "Float",
// // // //           "Overflow property",
// // // //           "Visibility property",
// // // //           "Display property",
// // // //           "Flex property",
// // // //           "Gradients & Multiple Backgrounds",
// // // //           "Position property",
// // // //           "Transformation, Transitions and Animations",
// // // //           "Grid",
// // // //           "Media Queries",
// // // //           "Professional Projects"
// // // //         ],
// // // //         "_id": "6614e7905e83f24a6f063192"
// // // //       },
// // // //       {
// // // //         "Heading": "TAILWIND CSS",
// // // //         "subheadings": [
// // // //           "Basics Of Tailwind CSS",
// // // //           "Installation of Tailwind CSS",
// // // //           "Layout",
// // // //           "Spacing",
// // // //           "Sizing",
// // // //           "Flexbox and Grid",
// // // //           "Typography",
// // // //           "Backgrounds",
// // // //           "Borders",
// // // //           "Effects",
// // // //           "Filters",
// // // //           "Tables",
// // // //           "Transitions and Animations",
// // // //           "Transform",
// // // //           "Interactivity",
// // // //           "Tailwind Content & styles",
// // // //           "Navigation",
// // // //           "Component",
// // // //           "Forms",
// // // //           "Data",
// // // //           "Helpers",
// // // //           "Design Blocks For functionality"
// // // //         ],
// // // //         "_id": "6614e9b65e83f24a6f063305"
// // // //       },
// // // //       {
// // // //         "Heading": "JAVASCRIPT",
// // // //         "subheadings": [
// // // //           "Introduction to Javascript",
// // // //           "Variables",
// // // //           "Datatypes",
// // // //           "Popup Boxes",
// // // //           "Built-in-functions",
// // // //           "Functions",
// // // //           "DOM",
// // // //           "Operators",
// // // //           "Math Methods",
// // // //           "String methods",
// // // //           "Conditional Statements",
// // // //           "Function with parameter",
// // // //           "Arrays and Objects",
// // // //           "Nested Array and Objects",
// // // //           "Array methods",
// // // //           "Loops",
// // // //           "Nested Loops",
// // // //           "Break and Continue",
// // // //           "Events",
// // // //           "Components",
// // // //           "Timing Functions",
// // // //           "DOM Elements",
// // // //           "Built-in-objects",
// // // //           "JavaScript Form Validation",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614ea565e83f24a6f0633d1"
// // // //       },
// // // //       {
// // // //         "Heading": "ADVANCED JAVASCRIPT",
// // // //         "subheadings": [
// // // //           "The let keyword",
// // // //           "The const keyword",
// // // //           "Arrow Functions",
// // // //           "Spread and Rest Operator",
// // // //           "String and Object Literals",
// // // //           "Optional Chaining",
// // // //           "Default Parameter",
// // // //           "Array and Object Destructuring",
// // // //           "Array Methods",
// // // //           "array.filer()",
// // // //           "array.find()",
// // // //           "array.map()",
// // // //           "array.findIndex()",
// // // //           "array.reduce()",
// // // //           "array.foreach()",
// // // //           "JavaScript Classes and Objects",
// // // //           "Callback Function",
// // // //           "JavaScript Hoisting",
// // // //           "Closure",
// // // //           "Session storage and Local Storage",
// // // //           "AJAX",
// // // //           "API Fetching",
// // // //           "Promises",
// // // //           "Promise methods",
// // // //           "ASYNC / Await",
// // // //           "Fetch method",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614eafb5e83f24a6f0634c8"
// // // //       },
// // // //       {
// // // //         "Heading": "ANGULAR",
// // // //         "subheadings": [
// // // //           "Introduction",
// // // //           "TypeScript",
// // // //           "Angular Building Blocks",
// // // //           "Anatomy of an Angular application",
// // // //           "Templates",
// // // //           "Directives",
// // // //           "Pipes",
// // // //           "Dependency Injection",
// // // //           "Forms",
// // // //           "Routing and Navigation",
// // // //           "Communicating with Servers",
// // // //           "SQL",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614f4815e83f24a6f063fc1"
// // // //       },
// // // //       {
// // // //         "Heading": "NODE JS",
// // // //         "subheadings": [
// // // //           "Introduction to Javascript on server & Node.js",
// // // //           "Events and callbacks in Node js",
// // // //           "Modules/Packages",
// // // //           "Network Communication & Web Technology",
// // // //           "Events and In build modules of node js and it working",
// // // //           "Babel and modern javascript with es6+ syntaxes",
// // // //           "API and HTTP methods",
// // // //           "Projects & Assignments"
// // // //         ],
// // // //         "_id": "6614fc1b5b73714be8dbdbba"
// // // //       },
// // // //       {
// // // //         "Heading": "EXPRESS JS",
// // // //         "subheadings": [
// // // //           "Introduction to Express Framework",
// // // //           "What is express",
// // // //           "Installation and setup of node js using express",
// // // //           "Modules",
// // // //           "Routing",
// // // //           "Middleware",
// // // //           "Controllers"
// // // //         ],
// // // //         "_id": "6614fc4b5b73714be8dbdc8c"
// // // //       },
// // // //       {
// // // //         "Heading": "MONGODB",
// // // //         "subheadings": [
// // // //           "Introduction to database",
// // // //           "Introduction to MongoDB",
// // // //           "Understanding MongoDB and nosql database",
// // // //           "Installing MongoDB",
// // // //           "Writing CRUD queries in mongoshell",
// // // //           "Models",
// // // //           "Introduction and Understanding models in Express and node.",
// // // //           "Installing mongoose package to connect with MongoDB",
// // // //           "Writing queries through api for CRUD operations in MongoDb"
// // // //         ],
// // // //         "_id": "6614fc835b73714be8dbdd89"
// // // //       },
// // // //       {
// // // //         "Heading": "PROFESSIONAL PROJECTS",
// // // //         "subheadings": [
// // // //           "Build social network",
// // // //           "E-commerce website",
// // // //           "Blog Application",
// // // //           "Canva website clone",
// // // //           "Bookmyshow Clone",
// // // //           "Olx Clone",
// // // //           "AirBnB Clone"
// // // //         ],
// // // //         "_id": "6614fcba5b73714be8dbdeac"
// // // //       }
// // // //     ],
// // // //     "__v": 58,
// // // //     "NavName": "MEAN Stack"
// // // //   },
// // // //   {
// // // //     "_id": "6614fd165b73714be8dbe038",
// // // //     "CourseName": "Android Training",
// // // //     "Category": "Mobile App Development",
// // // //     "Description": "Master Android App Development from ZERO to HERO. Work on Live Projects with our Android Training Course with Kotlin.",
// // // //     "Skills": [
// // // //       "Java",
// // // //       "Android",
// // // //       "Kotlin",
// // // //       "Android Studio",
// // // //       "User Interface Design(UI)",
// // // //       "Database Management",
// // // //       "Networking",
// // // //       "Multi-Threading",
// // // //       "Testing and Debugging",
// // // //       "Firebase",
// // // //       "Performance Optimization",
// // // //       "App Deployment"
// // // //     ],
// // // //     "WYWL": [
// // // //       "Learn Clean Architecture.",
// // // //       "Introduction to MVC, MVP and MVVM Patterns.",
// // // //       "Design user interfaces using XML and build dynamic layouts.",
// // // //       "Handle user interactions with buttons, gestures, and touch events.",
// // // //       "Work with databases to store and retrieve app data.",
// // // //       "Integrate APIs and web services for enhanced functionality.",
// // // //       "Implement authentication and security features for your apps.",
// // // //       "Gain expertise in networking, mastering HTTP requests, JSON handling with our Android training course.",
// // // //       "Firebase and API integration.",
// // // //       "Upload and Publish your android apps to the Google play store."
// // // //     ],
// // // //     "CourseContent": [
// // // //       {
// // // //         "Heading": "INTRODUCTION TO ANDROID",
// // // //         "subheadings": [
// // // //           "What is Android and Android Studio?",
// // // //           "Android Architecture and Libraries",
// // // //           "Dalvik Virtual Machine, DDMS, SDK Manager and AVD Manager",
// // // //           "Android API levels (versions & version names)",
// // // //           "Setting Android Programming Environment"
// // // //         ],
// // // //         "_id": "6614fdd05b73714be8dbe0ed"
// // // //       },
// // // //       {
// // // //         "Heading": "APPLICATION STRUCTURE",
// // // //         "subheadings": [
// // // //           "Basic Building blocks – Activities and Activity Life Cycle",
// // // //           "AndroidManifest.xml",
// // // //           "Gradle & Build.Gradle",
// // // //           "Layouts & Drawable Resource",
// // // //           "Values (Color.xml, String.xml and styles.xml)",
// // // //           "First sample Application"
// // // //         ],
// // // //         "_id": "6614fdd95b73714be8dbe0fd"
// // // //       },
// // // //       {
// // // //         "Heading": "EMULATOR-ANDROID VIRTUAL DEVICE",
// // // //         "subheadings": [
// // // //           "Create emulator",
// // // //           "Editing emulator settings",
// // // //           "Emulator shortcuts",
// // // //           "Log-cat usage",
// // // //           "Timber library",
// // // //           "Testing Application in Different Screens resolutions And OS version Emulators"
// // // //         ],
// // // //         "_id": "6614fde15b73714be8dbe102"
// // // //       },
// // // //       {
// // // //         "Heading": "UI DESIGN",
// // // //         "subheadings": [
// // // //           "Form widgets",
// // // //           "Text Fields",
// // // //           "Using CoordinatorLayout",
// // // //           "RelativeLayout",
// // // //           "LinearLayout",
// // // //           "ConstraintLayout",
// // // //           "Material Design (Snackbar, fab button, toolbar etc)",
// // // //           "Project: Life Cycle App, Calculator App, Kids App to learn",
// // // //           "Month, Weekdays, number 1 to 10, Personal Info App"
// // // //         ],
// // // //         "_id": "6614fde85b73714be8dbe120"
// // // //       },
// // // //       {
// // // //         "Heading": "JETPACK COMPONENT",
// // // //         "subheadings": [
// // // //           "Data Binding",
// // // //           "LiveData",
// // // //           "Room DB",
// // // //           "Life Cycle",
// // // //           "View Model"
// // // //         ],
// // // //         "_id": "6614fdee5b73714be8dbe127"
// // // //       },
// // // //       {
// // // //         "Heading": "UI COMPONENTS",
// // // //         "subheadings": [
// // // //           "Time-picker and Date-picker",
// // // //           "ImageView and Vector Images",
// // // //           "Radio Button and Radio Group",
// // // //           "CheckBox & Spinner",
// // // //           "SeekBar & AutoCompleteTextview"
// // // //         ],
// // // //         "_id": "6614fdf35b73714be8dbe12f"
// // // //       },
// // // //       {
// // // //         "Heading": "INTENTS",
// // // //         "subheadings": [
// // // //           "Explicit Intents (Communicating data among Activities)",
// // // //           "Implicit intents (Phone Calls, SMS and Email Sending)",
// // // //           "Services & Broadcast Sending and Receivers",
// // // //           "Problems with services and solutions",
// // // //           "Project: Kids App to learn Month, Weekdays, number 1 to 10, Personal Info App"
// // // //         ],
// // // //         "_id": "6614fdf95b73714be8dbe138"
// // // //       },
// // // //       {
// // // //         "Heading": "ADAPTERS AND LIST VIEWS",
// // // //         "subheadings": [
// // // //           "RecyclerView with CardView",
// // // //           "CustomListview, Listview and Gridview",
// // // //           "Using ArrayAdapters, BaseAdapters",
// // // //           "Project: Implement RecyclerView with Grid Layout Manager"
// // // //         ],
// // // //         "_id": "6614fdff5b73714be8dbe142"
// // // //       },
// // // //       {
// // // //         "Heading": "DATA STORAGE",
// // // //         "subheadings": [
// // // //           "Shared Preferences",
// // // //           "Android File System",
// // // //           "Project: Sign-In, Sign Out And Sign-up App"
// // // //         ],
// // // //         "_id": "6614fe045b73714be8dbe14d"
// // // //       },
// // // //       {
// // // //         "Heading": "DATABASE (CONTENT PROVIDERS)",
// // // //         "subheadings": [
// // // //           "Creating Database",
// // // //           "Inserting, Updating, Deleting & Select Operations",
// // // //           "Using Cursor Reading and updating records in DB",
// // // //           "Project: Develop an App for CRUD operations, Food recipe mobile app"
// // // //         ],
// // // //         "_id": "6614fe0b5b73714be8dbe159"
// // // //       },
// // // //       {
// // // //         "Heading": "GOOGLE API SERVICES",
// // // //         "subheadings": [
// // // //           "GPS, Location Manager based Services",
// // // //           "Google MAP Integration with API Key",
// // // //           "Apps Notification"
// // // //         ],
// // // //         "_id": "6614fe105b73714be8dbe166"
// // // //       },
// // // //       {
// // // //         "Heading": "NETWORKING CONNECTION",
// // // //         "subheadings": [
// // // //           "Implementing Async Task.",
// // // //           "JSON Parsing with GET and POST Requests Using",
// // // //           "Retrofit Or Volley Library",
// // // //           "Glide Library for Image Loading from URL",
// // // //           "Accessing Image from Gallery and Upload on Web Server Using API.",
// // // //           "Projects: Capture Photos & Upload on Server Using Retrofit or Volley, Display list of category and onClick content inside with view pager, Implement ViewPager. Create share and download option for content like text, audio, video and Image"
// // // //         ],
// // // //         "_id": "6614fe155b73714be8dbe174"
// // // //       },
// // // //       {
// // // //         "Heading": "FRAGMENTS",
// // // //         "subheadings": [
// // // //           "Fragments Life Cycle With respect to Activity Class",
// // // //           "Communication between two fragments",
// // // //           "Communication and data transfer between activity and fragment",
// // // //           "View Pager",
// // // //           "TabLayout"
// // // //         ],
// // // //         "_id": "6614fe1c5b73714be8dbe183"
// // // //       },
// // // //       {
// // // //         "Heading": "ADVANCED TOPIC",
// // // //         "subheadings": [
// // // //           "Animation",
// // // //           "Transition Animation",
// // // //           "Action Bar and Custom Action Bar",
// // // //           "Swipe Refresh",
// // // //           "Drag Drop Effect",
// // // //           "VideoView & Media player",
// // // //           "Using Webview",
// // // //           "Dashboard UI Design",
// // // //           "Alert Dialog Boxes",
// // // //           "NavigationView with DrawerLayout",
// // // //           "Introduction to MVVM",
// // // //           "Generate Signed APK for Google App Store"
// // // //         ],
// // // //         "_id": "6614fe225b73714be8dbe193"
// // // //       }
// // // //     ],
// // // //     "__v": 47,
// // // //     "NavName": "Android"
// // // //   }
// // // // ];

// // // // const CoursePage = () => {
// // // //   const { courseId } = useParams();

// // // //   // Find the course based on the courseId from the URL
// // // //   const course = courseData.find(
// // // //     c => c.CourseName.toLowerCase().replace(/\s+/g, '-') === courseId
// // // //   );

// // // //   if (!course) return <div>Course not found</div>;

// // // //   return (
// // // //     <div style={{ fontFamily: 'Inter, sans-serif' }}>
// // // //       {/* Banner Section */}
// // // //       <div style={{
// // // //         background: 'linear-gradient(90deg, rgba(40,14,92,1) 0%, rgba(40,14,92,0.8) 100%)',
// // // //         color: '#FFFFFF',
// // // //         padding: '50px 20px',
// // // //         textAlign: 'center'
// // // //       }}>
// // // //         <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
// // // //           {course.CourseName.toUpperCase()}
// // // //         </h1>
// // // //         <p style={{ fontSize: '16px', marginBottom: '20px' }}>
// // // //           {course.Description}
// // // //         </p>
// // // //         <button style={{
// // // //           backgroundColor: '#FFFFFF',
// // // //           color: '#280E5C',
// // // //           padding: '10px 20px',
// // // //           border: 'none',
// // // //           borderRadius: '20px',
// // // //           fontWeight: 'bold',
// // // //           cursor: 'pointer'
// // // //         }}>
// // // //           ENROLL NOW
// // // //         </button>
// // // //       </div>

// // // //       {/* What You'll Learn Section */}
// // // //       <div style={{ padding: '40px 20px' }}>
// // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // //           What You'll Learn
// // // //         </h2>
// // // //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '16px' }}>
// // // //           <ul style={{ listStyleType: 'none', padding: 0 }}>
// // // //             {course.WYWL.slice(0, Math.ceil(course.WYWL.length / 2)).map((item, index) => (
// // // //               <li key={index} style={{ marginBottom: '10px' }}>✔ {item}</li>
// // // //             ))}
// // // //           </ul>
// // // //           <ul style={{ listStyleType: 'none', padding: 0 }}>
// // // //             {course.WYWL.slice(Math.ceil(course.WYWL.length / 2)).map((item, index) => (
// // // //               <li key={index} style={{ marginBottom: '10px' }}>✔ {item}</li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //       </div>

// // // //       {/* Our Training Process Section */}
// // // //       <div style={{ padding: '40px 20px' }}>
// // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
// // // //           Our Training Process
// // // //         </h2>
// // // //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // //           {[
// // // //             { icon: '👥', label: 'Practical Session' },
// // // //             { icon: '📝', label: 'Assignment' },
// // // //             { icon: '⚙️', label: 'Projects' },
// // // //             { icon: '📄', label: 'Resume Building' },
// // // //             { icon: '💬', label: 'Interview Preparation' },
// // // //             { icon: '💼', label: 'Be Job Ready' }
// // // //           ].map((step, index) => (
// // // //             <div key={index} style={{ textAlign: 'center', flex: '1', minWidth: '100px' }}>
// // // //               <div style={{ fontSize: '40px' }}>{step.icon}</div>
// // // //               <p style={{ fontSize: '14px', marginTop: '10px' }}>{step.label}</p>
// // // //               {index < 5 && <span style={{ display: 'inline-block', margin: '0 10px' }}>➡️</span>}
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Key Highlights Section */}
// // // //       <div style={{
// // // //         background: 'linear-gradient(90deg, rgba(40,14,92,1) 0%, rgba(40,14,92,0.8) 100%)',
// // // //         color: '#FFFFFF',
// // // //         padding: '40px 20px'
// // // //       }}>
// // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
// // // //           Key Highlights
// // // //         </h2>
// // // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
// // // //           {[
// // // //             { icon: '🌟', label: 'Personalized Career Coach' },
// // // //             { icon: '📜', label: 'Certification' },
// // // //             { icon: '📚', label: 'Study Material' },
// // // //             { icon: '📝', label: 'Mock Interviews' },
// // // //             { icon: '🛠️', label: '90% Practical Training' },
// // // //             { icon: '💼', label: '100% Job Assurance' },
// // // //             { icon: '❓', label: 'Instant Doubt Solving' },
// // // //             { icon: '📈', label: 'Live Projects' },
// // // //             { icon: '⏳', label: '100+ Hrs Training Duration' },
// // // //             { icon: '🎓', label: '25000+ Students Trained' },
// // // //             { icon: '🏢', label: '1000+ Hiring Companies' },
// // // //             { icon: '💰', label: '8+ LPA Highest Fresher Salary' }
// // // //           ].map((highlight, index) => (
// // // //             <div key={index} style={{
// // // //               backgroundColor: 'rgba(255,255,255,0.1)',
// // // //               padding: '20px',
// // // //               borderRadius: '10px',
// // // //               textAlign: 'center'
// // // //             }}>
// // // //               <div style={{ fontSize: '30px', marginBottom: '10px' }}>{highlight.icon}</div>
// // // //               <p style={{ fontSize: '14px' }}>{highlight.label}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Course Content Section */}
// // // //       <div style={{ padding: '40px 20px' }}>
// // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // //           Course Content
// // // //         </h2>
// // // //         {course.CourseContent.map((content, index) => (
// // // //           <div key={index} style={{ backgroundColor: '#E6F6FA', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
// // // //             <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
// // // //               {content.Heading}
// // // //             </h3>
// // // //             <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '16px' }}>
// // // //               {content.subheadings.map((subheading, subIndex) => (
// // // //                 <li key={subIndex}>{subheading}</li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Skills You Will Gain Section */}
// // // //       <div style={{ padding: '40px 20px' }}>
// // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // //           Skills You Will Gain
// // // //         </h2>
// // // //         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
// // // //           {course.Skills.map((skill, index) => (
// // // //             <span key={index} style={{
// // // //               backgroundColor: '#F5F5F5',
// // // //               padding: '10px 20px',
// // // //               borderRadius: '20px',
// // // //               fontSize: '14px'
// // // //             }}>
// // // //               {skill}
// // // //             </span>
// // // //           ))}
// // // //         </div>

// // // //         {/* Course Certification Section */}
// // // //         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
// // // //           Course Certification
// // // //         </h2>
// // // //         <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
// // // //           Become a Certified {course.CourseName} with Codify Institute and enhance your career prospects to the next level.
// // // //         </p>
// // // //         <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
// // // //           This certificate serves as an official badge of your successful {course.CourseName} course completion, highlighting your expertise.
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CoursePage;


// // // import React, { useState, useEffect } from 'react';
// // // import { useParams } from 'react-router-dom';

// // // const CoursePage = () => {
// // //   const { courseId } = useParams();
// // //   const [course, setCourse] = useState(null);

// // //   useEffect(() => {
// // //     fetch('https://codify-backend-n4xb.onrender.com/get-course')
// // //       .then(response => response.json())
// // //       .then(data => {
// // //         const selectedCourse = data.find(
// // //           c => c.CourseName.toLowerCase().replace(/\s+/g, '-') === courseId
// // //         );
// // //         setCourse(selectedCourse);
// // //       })
// // //       .catch(error => {
// // //         console.error('Error fetching course:', error);
// // //       });
// // //   }, [courseId]);

// // //   if (!course) return <div className="text-center text-2xl mt-10">Loading..</div>;

// // //   return (
// // //     <div style={{ fontFamily: 'Inter, sans-serif' }}>
// // //       {/* Banner Section */}
// // //       <div className="bg-gradient-to-r from-[#6B46C1] to-[#6B46C1]/80 text-white py-12 px-5 text-center">
// // //         <h1 className="text-4xl font-bold mb-3">{course.CourseName.toUpperCase()}</h1>
// // //         <p className="text-base mb-5">{course.Description}</p>
// // //         <button className="bg-white text-[#6B46C1] px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
// // //           ENROLL NOW
// // //         </button>
// // //       </div>

// // //       {/* What You'll Learn Section */}
// // //       <div className="py-10 px-5">
// // //         <h2 className="text-3xl font-bold mb-5">What You'll Learn</h2>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-base">
// // //           <ul className="list-none p-0">
// // //             {course.WYWL.slice(0, Math.ceil(course.WYWL.length / 2)).map((item, index) => (
// // //               <li key={index} className="mb-2">✔ {item}</li>
// // //             ))}
// // //           </ul>
// // //           <ul className="list-none p-0">
// // //             {course.WYWL.slice(Math.ceil(course.WYWL.length / 2)).map((item, index) => (
// // //               <li key={index} className="mb-2">✔ {item}</li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       </div>

// // //       {/* Our Training Process Section */}
// // //       <div className="py-10 px-5">
// // //         <h2 className="text-3xl font-bold mb-7">Our Training Process</h2>
// // //         <div className="flex flex-wrap justify-between items-center">
// // //           {[
// // //             { icon: '👥', label: 'Practical Session' },
// // //             { icon: '📝', label: 'Assignment' },
// // //             { icon: '⚙️', label: 'Projects' },
// // //             { icon: '📄', label: 'Resume Building' },
// // //             { icon: '💬', label: 'Interview Preparation' },
// // //             { icon: '💼', label: 'Be Job Ready' }
// // //           ].map((step, index) => (
// // //             <div key={index} className="text-center flex-1 min-w-[100px]">
// // //               <div className="text-4xl">{step.icon}</div>
// // //               <p className="text-sm mt-2">{step.label}</p>
// // //               {index < 5 && <span className="inline-block mx-2">➡️</span>}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Key Highlights Section */}
// // //       <div className="bg-gradient-to-r from-[#6B46C1] to-[#6B46C1]/80 text-white py-10 px-5">
// // //         <h2 className="text-3xl font-bold mb-7">Key Highlights</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
// // //           {[
// // //             { icon: '🌟', label: 'Personalized Career Coach' },
// // //             { icon: '📜', label: 'Certification' },
// // //             { icon: '📚', label: 'Study Material' },
// // //             { icon: '📝', label: 'Mock Interviews' },
// // //             { icon: '🛠️', label: '90% Practical Training' },
// // //             { icon: '💼', label: '100% Job Assurance' },
// // //             { icon: '❓', label: 'Instant Doubt Solving' },
// // //             { icon: '📈', label: 'Live Projects' },
// // //             { icon: '⏳', label: '100+ Hrs Training Duration' },
// // //             { icon: '🎓', label: '25000+ Students Trained' },
// // //             { icon: '🏢', label: '1000+ Hiring Companies' },
// // //             { icon: '💰', label: '8+ LPA Highest Fresher Salary' }
// // //           ].map((highlight, index) => (
// // //             <div key={index} className="bg-white/10 p-5 rounded-lg text-center">
// // //               <div className="text-3xl mb-2">{highlight.icon}</div>
// // //               <p className="text-sm">{highlight.label}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Course Content Section */}
// // //       <div className="py-10 px-5">
// // //         <h2 className="text-3xl font-bold mb-5">Course Content</h2>
// // //         {course.CourseContent.map((content, index) => (
// // //           <div key={index} className="bg-[#D6BCFA]/30 p-5 rounded-lg mb-5">
// // //             <h3 className="text-xl font-bold mb-3">{content.Heading}</h3>
// // //             <ul className="list-disc pl-5 text-base">
// // //               {content.subheadings.map((subheading, subIndex) => (
// // //                 <li key={subIndex}>{subheading}</li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Skills You Will Gain Section */}
// // //       <div className="py-10 px-5">
// // //         <h2 className="text-3xl font-bold mb-5">Skills You Will Gain</h2>
// // //         <div className="flex flex-wrap gap-2 mb-7">
// // //           {course.Skills.map((skill, index) => (
// // //             <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm">
// // //               {skill}
// // //             </span>
// // //           ))}
// // //         </div>

// // //         {/* Course Certification Section */}
// // //         <h2 className="text-3xl font-bold mb-2">Course Certification</h2>
// // //         <p className="text-base leading-6">
// // //           Become a Certified {course.CourseName} with Codify Institute and enhance your career prospects to the next level.
// // //         </p>
// // //         <p className="text-base leading-6">
// // //           This certificate serves as an official badge of your successful {course.CourseName} course completion, highlighting your expertise.
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CoursePage;

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';

// // const CoursePage = () => {
// //   const { courseId } = useParams();
// //   const [course, setCourse] = useState(null);

// //   useEffect(() => {
// //     fetch('https://codify-backend-n4xb.onrender.com/get-course')
// //       .then(response => response.json())
// //       .then(data => {
// //         const selectedCourse = data.find(
// //           c => c.CourseName.toLowerCase().replace(/\s+/g, '-') === courseId
// //         );
// //         setCourse(selectedCourse);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching course:', error);
// //       });
// //   }, [courseId]);

// //   if (!course) return <div className="text-center text-2xl mt-10">Loading..</div>;

// //   return (
// //     <div style={{ fontFamily: 'Inter, sans-serif' }}>
// //       {/* Banner Section */}
// //       <div className="bg-gradient-to-r from-[#280E5C] to-[#280E5C]/80 text-white py-12 px-5 text-center">
// //         <h1 className="text-4xl font-bold mb-3">{course.CourseName.toUpperCase()}</h1>
// //         <p className="text-base mb-5">{course.Description}</p>
// //         <button className="bg-white text-[#280E5C] px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
// //           ENROLL NOW
// //         </button>
// //       </div>

// //       {/* What You'll Learn Section */}
// //       <div className="py-10 px-5">
// //         <h2 className="text-3xl font-bold mb-5">What You'll Learn</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-base">
// //           <ul className="list-none p-0">
// //             {course.WYWL.slice(0, Math.ceil(course.WYWL.length / 2)).map((item, index) => (
// //               <li key={index} className="mb-2">✔ {item}</li>
// //             ))}
// //           </ul>
// //           <ul className="list-none p-0">
// //             {course.WYWL.slice(Math.ceil(course.WYWL.length / 2)).map((item, index) => (
// //               <li key={index} className="mb-2">✔ {item}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Our Training Process Section */}
// //       <div className="py-10 px-5">
// //         <h2 className="text-3xl font-bold mb-7">Our Training Process</h2>
// //         <div className="flex flex-wrap justify-between items-center">
// //           {[
// //             { icon: '👥', label: 'Practical Session' },
// //             { icon: '📝', label: 'Assignment' },
// //             { icon: '⚙️', label: 'Projects' },
// //             { icon: '📄', label: 'Resume Building' },
// //             { icon: '💬', label: 'Interview Preparation' },
// //             { icon: '💼', label: 'Be Job Ready' }
// //           ].map((step, index) => (
// //             <div key={index} className="text-center flex-1 min-w-[100px]">
// //               <div className="text-4xl">{step.icon}</div>
// //               <p className="text-sm mt-2">{step.label}</p>
// //               {index < 5 && <span className="inline-block mx-2">➡️</span>}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Key Highlights Section */}
// //       <div className="bg-gradient-to-r from-[#280E5C] to-[#280E5C]/80 text-white py-10 px-5">
// //         <h2 className="text-3xl font-bold mb-7">Key Highlights</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
// //           {[
// //             { icon: '🌟', label: 'Personalized Career Coach' },
// //             { icon: '📜', label: 'Certification' },
// //             { icon: '📚', label: 'Study Material' },
// //             { icon: '📝', label: 'Mock Interviews' },
// //             { icon: '🛠️', label: '90% Practical Training' },
// //             { icon: '💼', label: '100% Job Assurance' },
// //             { icon: '❓', label: 'Instant Doubt Solving' },
// //             { icon: '📈', label: 'Live Projects' },
// //             { icon: '⏳', label: '100+ Hrs Training Duration' },
// //             { icon: '🎓', label: '25000+ Students Trained' },
// //             { icon: '🏢', label: '1000+ Hiring Companies' },
// //             { icon: '💰', label: '8+ LPA Highest Fresher Salary' }
// //           ].map((highlight, index) => (
// //             <div key={index} className="bg-white/10 p-5 rounded-lg text-center">
// //               <div className="text-3xl mb-2">{highlight.icon}</div>
// //               <p className="text-sm">{highlight.label}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Course Content Section */}
// //       <div className="py-10 px-5">
// //         <h2 className="text-3xl font-bold mb-5">Course Content</h2>
// //         {course.CourseContent.map((content, index) => (
// //           <div key={index} className="bg-[#4B3A7F]/30 p-5 rounded-lg mb-5">
// //             <h3 className="text-xl font-bold mb-3">{content.Heading}</h3>
// //             <ul className="list-disc pl-5 text-base">
// //               {content.subheadings.map((subheading, subIndex) => (
// //                 <li key={subIndex}>{subheading}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Skills You Will Gain Section */}
// //       <div className="py-10 px-5">
// //         <h2 className="text-3xl font-bold mb-5">Skills You Will Gain</h2>
// //         <div className="flex flex-wrap gap-2 mb-7">
// //           {course.Skills.map((skill, index) => (
// //             <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm">
// //               {skill}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Course Certification Section */}
// //         <h2 className="text-3xl font-bold mb-2">Course Certification</h2>
// //         <p className="text-base leading-6">
// //           Become a Certified {course.CourseName} with Codify Institute and enhance your career prospects to the next level.
// //         </p>
// //         <p className="text-base leading-6">
// //           This certificate serves as an official badge of your successful {course.CourseName} course completion, highlighting your expertise.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CoursePage;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const CoursePage = () => {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     fetch('https://codify-backend-n4xb.onrender.com/get-course')
//       .then(response => response.json())
//       .then(data => {
//         const selectedCourse = data.find(
//           c => c.CourseName.toLowerCase().replace(/\s+/g, '-') === courseId
//         );
//         setCourse(selectedCourse);
//       })
//       .catch(error => {
//         console.error('Error fetching course:', error);
//       });
//   }, [courseId]);

//   if (!course) return <div className="text-center text-2xl mt-10">Loading..</div>;

//   return (
//     <div style={{ fontFamily: 'Inter, sans-serif' }}>
//       {/* Banner Section */}
//       <div className="bg-gradient-to-r from-[#280E5C] to-[#280E5C]/80 text-white py-12 px-5 text-center">
//         <h1 className="text-4xl font-bold mb-3">{course.CourseName.toUpperCase()}</h1>
//         <p className="text-base mb-5">{course.Description}</p>
//         <button className="bg-white text-[#280E5C] px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
//           ENROLL NOW
//         </button>
//       </div>

//       {/* What You'll Learn Section */}
//       <div className="py-10 px-5">
//         <h2 className="text-3xl font-bold mb-5">What You'll Learn</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-base">
//           <ul className="list-none p-0">
//             {course.WYWL.slice(0, Math.ceil(course.WYWL.length / 2)).map((item, index) => (
//               <li key={index} className="mb-2">✔ {item}</li>
//             ))}
//           </ul>
//           <ul className="list-none p-0">
//             {course.WYWL.slice(Math.ceil(course.WYWL.length / 2)).map((item, index) => (
//               <li key={index} className="mb-2">✔ {item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Our Training Process Section */}
//       <div className="py-10 px-5">
//         <h2 className="text-3xl font-bold mb-7">Our Training Process</h2>
//         <div className="flex flex-wrap justify-between items-center">
//           {[
//             { icon: '👥', label: 'Practical Session' },
//             { icon: '📝', label: 'Assignment' },
//             { icon: '⚙️', label: 'Projects' },
//             { icon: '📄', label: 'Resume Building' },
//             { icon: '💬', label: 'Interview Preparation' },
//             { icon: '💼', label: 'Be Job Ready' }
//           ].map((step, index) => (
//             <div key={index} className="text-center flex-1 min-w-[100px]">
//               <div className="text-4xl">{step.icon}</div>
//               <p className="text-sm mt-2">{step.label}</p>
//               {index < 5 && <span className="inline-block mx-2">➡️</span>}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Key Highlights Section */}
//       <div className="bg-gradient-to-r from-[#280E5C] to-[#280E5C]/80 text-white py-10 px-5">
//         <h2 className="text-3xl font-bold mb-7">Key Highlights</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//           {[
//             { icon: '🌟', label: 'Personalized Career Coach' },
//             { icon: '📜', label: 'Certification' },
//             { icon: '📚', label: 'Study Material' },
//             { icon: '📝', label: 'Mock Interviews' },
//             { icon: '🛠️', label: '90% Practical Training' },
//             { icon: '💼', label: '100% Job Assurance' },
//             { icon: '❓', label: 'Instant Doubt Solving' },
//             { icon: '📈', label: 'Live Projects' },
//             { icon: '⏳', label: '100+ Hrs Training Duration' },
//             { icon: '🎓', label: '25000+ Students Trained' },
//             { icon: '🏢', label: '1000+ Hiring Companies' },
//             { icon: '💰', label: '8+ LPA Highest Fresher Salary' }
//           ].map((highlight, index) => (
//             <div key={index} className="bg-white/10 p-5 rounded-lg text-center">
//               <div className="text-3xl mb-2">{highlight.icon}</div>
//               <p className="text-sm">{highlight.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Course Content Section */}
//       <div className="py-10 px-5">
//         <h2 className="text-3xl font-bold mb-5 text-center">Course Content</h2>
//         <div className="max-w-3xl mx-auto">
//           {course.CourseContent.map((content, index) => (
//             <div key={index} className="bg-[#4B3A7F]/30 p-5 rounded-lg mb-5">
//               <h3 className="text-xl font-bold mb-3">{content.Heading}</h3>
//               <ul className="list-disc pl-4 text-base w-full">
//                 {content.subheadings.map((subheading, subIndex) => (
//                   <li key={subIndex} className="mb-1">{subheading}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Skills You Will Gain Section */}
//       <div className="py-10 px-5">
//         <h2 className="text-3xl font-bold mb-5">Skills You Will Gain</h2>
//         <div className="flex flex-wrap gap-2 mb-7">
//           {course.Skills.map((skill, index) => (
//             <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm">
//               {skill}
//             </span>
//           ))}
//         </div>

//         {/* Course Certification Section */}
//         <h2 className="text-3xl font-bold mb-2">Course Certification</h2>
//         <p className="text-base leading-6">
//           Become a Certified {course.CourseName} with Codify Institute and enhance your career prospects to the next level.
//         </p>
//         <p className="text-base leading-6">
//           This certificate serves as an official badge of your successful {course.CourseName} course completion, highlighting your expertise.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CoursePage;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate(); // Add useNavigate hook for navigation

  useEffect(() => {
    fetch('https://codify-backend-n4xb.onrender.com/get-course')
      .then(response => response.json())
      .then(data => {
        const selectedCourse = data.find(
          c => c.CourseName.toLowerCase().replace(/\s+/g, '-') === courseId
        );
        setCourse(selectedCourse);
      })
      .catch(error => {
        console.error('Error fetching course:', error);
      });
  }, [courseId]);

  // Function to handle navigation to the contact page
  const handleEnrollClick = () => {
    navigate('/contact');
  };

  if (!course) return <div className="text-center text-2xl mt-10">Loading..</div>;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-[#280E5C] to-[#280E5C]/80 text-white py-12 px-5 text-center">
        <h1 className="text-4xl font-bold mb-3">{course.CourseName.toUpperCase()}</h1>
        <p className="text-base mb-5">{course.Description}</p>
        <button 
          onClick={handleEnrollClick}
          className="bg-white text-[#280E5C] px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors"
        >
          ENROLL NOW
        </button>
      </div>

      {/* What You'll Learn Section */}
      <div className="py-10 px-5">
        <h2 className="text-3xl font-bold mb-5">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-base">
          <ul className="list-none p-0">
            {course.WYWL.slice(0, Math.ceil(course.WYWL.length / 2)).map((item, index) => (
              <li key={index} className="mb-2">✔ {item}</li>
            ))}
          </ul>
          <ul className="list-none p-0">
            {course.WYWL.slice(Math.ceil(course.WYWL.length / 2)).map((item, index) => (
              <li key={index} className="mb-2">✔ {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Our Training Process Section */}
      <div className="py-10 px-5">
        <h2 className="text-3xl font-bold mb-7">Our Training Process</h2>
        <div className="flex flex-wrap justify-between items-center">
          {[
            { icon: '👥', label: 'Practical Session' },
            { icon: '📝', label: 'Assignment' },
            { icon: '⚙️', label: 'Projects' },
            { icon: '📄', label: 'Resume Building' },
            { icon: '💬', label: 'Interview Preparation' },
            { icon: '💼', label: 'Be Job Ready' }
          ].map((step, index) => (
            <div key={index} className="text-center flex-1 min-w-[100px]">
              <div className="text-4xl">{step.icon}</div>
              <p className="text-sm mt-2">{step.label}</p>
              {index < 5 && <span className="inline-block mx-2">➡️</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="bg-gradient-to-r from-[#280E5C] to-[#280E5C]/80 text-white py-10 px-5">
        <h2 className="text-3xl font-bold mb-7">Key Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[
            { icon: '🌟', label: 'Personalized Career Coach' },
            { icon: '📜', label: 'Certification' },
            { icon: '📚', label: 'Study Material' },
            { icon: '📝', label: 'Mock Interviews' },
            { icon: '🛠️', label: '90% Practical Training' },
            { icon: '💼', label: '100% Job Assurance' },
            { icon: '❓', label: 'Instant Doubt Solving' },
            { icon: '📈', label: 'Live Projects' },
            { icon: '⏳', label: '100+ Hrs Training Duration' },
            { icon: '🎓', label: '25000+ Students Trained' },
            { icon: '🏢', label: '1000+ Hiring Companies' },
            { icon: '💰', label: '8+ LPA Highest Fresher Salary' }
          ].map((highlight, index) => (
            <div key={index} className="bg-white/10 p-5 rounded-lg text-center">
              <div className="text-3xl mb-2">{highlight.icon}</div>
              <p className="text-sm">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Content Section */}
      <div className="py-10 px-5">
        <h2 className="text-3xl font-bold mb-5">Course Content</h2>
        <div className="max-w-3xl mx-auto">
          {course.CourseContent.map((content, index) => (
            <div key={index} className="bg-[#4B3A7F]/30 p-5 rounded-lg mb-5">
              <h3 className="text-xl font-bold mb-3">{content.Heading}</h3>
              <ul className="list-disc pl-4 text-base w-full">
                {content.subheadings.map((subheading, subIndex) => (
                  <li key={subIndex} className="mb-1">{subheading}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills You Will Gain Section */}
      <div className="py-10 px-5">
        <h2 className="text-3xl font-bold mb-5">Skills You Will Gain</h2>
        <div className="flex flex-wrap gap-2 mb-7">
          {course.Skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>

        {/* Course Certification Section */}
        <h2 className="text-3xl font-bold mb-2">Course Certification</h2>
        <p className="text-base leading-6">
          Become a Certified {course.CourseName} with Codify Institute and enhance your career prospects to the next level.
        </p>
        <p className="text-base leading-6">
          This certificate serves as an official badge of your successful {course.CourseName} course completion, highlighting your expertise.
        </p>
      </div>
    </div>
  );
};

export default CoursePage;