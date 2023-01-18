import React, { useState } from 'react'
import './styles/styles.css'

const App = () => {
  const [dark, setDark] = useState(false)
  const darkMode = e => {
    if(!dark){
      const body = document.getElementById('app-body')
      body.style.color = "white";
      body.style.backgroundColor = '#777777';
      const bigtxt = document.querySelectorAll('h1')
      for(let i=0; i<bigtxt.length; i++){
        bigtxt[i].style.color = "#A020F0";
      }
      const medtxt = document.querySelectorAll('h2')
      for(let i=0; i<medtxt.length; i++){
        medtxt[i].style.color = "#A020F0";
      }
      const txt = document.querySelectorAll('h3')
      for(let i=0; i<txt.length; i++){
        txt[i].style.color = "#A020F0";
      }
      const headerIn = document.getElementById('app-header-inner')
      headerIn.style.color = "white";
      headerIn.style.backgroundColor = "#222222";
      const sections = document.querySelectorAll('section');
      for(let i=0; i<sections.length; i++){
        sections[i].style.color = "white";
        sections[i].style.backgroundColor = "#434343";
      }
      const divs = document.querySelectorAll('div');
      for(let i=0; i<divs.length; i++){
        divs[i].style.color = "white";
        divs[i].style.backgroundColor = "#434343";
      }
      setDark(true)
    }else{
      window.location.reload(false)
      setDark(false)
    }
    
  }
  return (
    <div>
      <body id="app-body">
        <header className="header" id="app-header">
          <div className="container" id="app-header-inner">     
            <div className="row justify-content-center text-center align-items-center m-2 border p-3">
              {/* <div className="col">          */}
                <img className="profile-image img-fluid float-start rounded-circle" src="assets/images/profile.png" alt="profile" />
                <div className="profile-content">
                  <h1 className="name">Mark Harmon</h1>
                  <h2 className="desc">Full Stack Developer</h2>   
                  <ul className="social list-inline">
                      <li className="list-inline-item"><a href="https://twitter.com/ManicNeo142"><i className="fab fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.linkedin.com/in/markharmon142/"><i className="fab fa-linkedin-in"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.github.com/neoj1sec142" rel="noreferrer" target="_blank"><i className="fab fa-github-alt"></i></a></li>    
                      {/* <li className="list-inline-item"><a href="#!"><i className="fab fa-stack-overflow"></i></a></li>  */}
                      <li className="list-inline-item last-item"><a href="https://codepen.io/J1sec1503"><i className="fab fa-codepen"></i></a></li>                
                  </ul> 
                {/* </div> */}
              </div>
              <div className="col-12 col-md-auto">
                <div className="dark-mode-switch d-flex ms-5">
                  <div className="form-check form-switch mx-auto mx-md-0">
                    <input onClick={e=>darkMode(e)} type="checkbox" className="form-check-input me-2" id="darkSwitch" />
                    <label className="custom-control-label" for="darkSwitch">Dark Mode</label>
                  </div>
                </div>
                <a className="btn btn-cta-primary" href="./assets/Mark_Harmon_Full_Stack_Developer.pdf" download><i className="fas fa-paper-plane"></i>Download Resume</a>        
              </div>
            </div>
          </div>
        </header>

        <div class="container sections-wrapper py-5">
          <div class="row d-flex justify-content-center">
            <div class="primary col-lg-8 col-12">
              <section class="about section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">About Me</h2>
                  <div class="content">
                    <p>Full Stack Software Engineer with a passion for creativity and precision, I offer creative solutions to complex problems.</p>
                    <p className='card text-center'>C# | Python | Django | React | Redux | Vue | MySQL | PostgreSQL | SQLite | Sequelize | MongoDB | Mongoose | Express | Linux | Mircom TX3 | Bash | JavaScript | CSS | HTML </p> 
                  </div>
                </div>
              </section>
              <section className="latest section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Latest Projects</h2>
                    <div className="content">  

                    <div className="item featured text-center">   
                      <div className="featured-image has-ribbon">
                        <a href="https://github.com/Neoj1sec142/" rel="noreferrer" target="_blank">
                        <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-featured.png" alt="project name" />
                        </a>
                        <div className="ribbon">
                            <div className="text">New</div>
                        </div>
                      </div>
                      <h3 className="title mb-3"><a href="https://holicity.herokuapp.com/" rel="noreferrer" target="_blank">Holicity - A Social Platform promoting a Greener Earth</a></h3>
                      <div className="desc text-start">                                    
                        <p>For my solo capstone project at General Assemby I created a full stack social platform with JWT Auth, and full CRUD. Tech used: React, Bootstrap, Sequelize, Express, PostgreSQL, and JWT Authenication</p>
                      </div>
                      <a className="btn btn-cta-secondary" rel="noreferrer" href="https://www.github.neoj1sec142/holicity/" target="_blank"><i className="fas fa-thumbs-up"></i> View Code </a>
                    </div>

                    <hr className="divider" />

                    <div className="item row">
                      <a className="col-md-4 col-12" href="https://github.com/Neoj1sec142/Foodle-Front" rel="noreferrer" target="_blank">
                      <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-3.png" alt="project name" />
                      </a>
                      <div className="desc col-md-8 col-12">
                        <h3 className="title"><a href="https://github.com/Neoj1sec142/Foodle-Front" rel="noreferrer" target="_blank">Foodle</a></h3>
                        <p className="mb-2">For my third project at General Assembly I worked on a team to create a full stack Food Instagram Like Website With full CRUD capabilities, and JWT Auth. <li>Tech Used: React, Redux, PostgreSQL, JWT Auth, Express, Sequelize, and CSS. </li></p>
                      </div>                          
                    </div>
                            
                    <div className="item row">
                      <a className="col-md-4 col-12" href="https://github.com/Neoj1sec142/django_blog" rel="noreferrer" target="_blank">
                      <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-2.png" alt="project name" />
                      </a>
                      <div className="desc col-md-8 col-12">
                        <h3 className="title"><a href="https://github.com/Neoj1sec142/django_blog" rel="noreferrer" target="_blank">Django Blog</a></h3>
                        <p className="mb-2">Full Featured Django Blog With Password Reset Email and Django token Authenication.<li>Tech used: Python, Django, Django-Crispy-Forms, Bootstrap4, Pillow, and CSS.</li></p>
                      </div>                          
                    </div>
                            
                    <div className="item row">
                      <a className="col-md-4 col-12" href="https://github.com/Neoj1sec142/task_gui" rel="noreferrer" target="_blank">
                      <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/new_project-1.png" alt="project name" />
                      </a>
                      <div className="desc col-md-8 col-12">
                        <h3 className="title"><a href="https://github.com/Neoj1sec142/task_gui" rel="noreferrer" target="_blank">Task Manager CRUD App</a></h3>
                        <p className="mb-2">My first project after General Assembly's Software Engineering Immersive I decided to create a python / MySQL task manager with tkinter to exapnd on python, OOP, and relational SQL databases.</p>
                      </div>                      
                    </div>
                              
                    <div className="item row">
                      <a className="col-md-4 col-12" href="#!" rel="noreferrer" target="_blank">
                      <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-4.png" alt="project name" />
                      </a>
                      <div className="desc col-md-8 col-12">
                        <h3 className="title"><a href="#!" rel="noreferrer" target="_blank">Nova Pro - Boootstrap Template for Mobile Startups</a></h3>
                        <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus.</p>
                        <p><a className="more-link" href="#!" rel="noreferrer" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                      </div>                      
                    </div>

                    <div className="item row">
                      <a className="col-md-4 col-12" rel="noreferrer" href="#!" target="_blank">
                      <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-5.png" alt="project name" />
                      </a>
                      <div className="desc col-md-8 col-12">
                        <h3 className="title"><a rel="noreferrer" href="#!" target="_blank">DevStudio - Boootstrap Template for WebDev Agencies and Freelance Developers</a></h3>
                        <p className="mb-2"> You can put one of your secondary projects here. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                        <p><a className="more-link" rel="noreferrer" href="#!" target="_blank"><i class="fas fa-external-link-alt"></i>Find out more</a></p>
                      </div>
                    </div>
                       
                  </div>
                </div>
              </section>
              <section className="experience section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Work Experience</h2>
                  <div className="content">
                    <div className="item">
                        <h3 className="title">Technical Assistant - <span className="place"><a href="https://www.linkedin.com/in/melaniestacel/recent-activity/" target="_blank" rel="noreferrer">Sun Realty Home Pros</a></span> <span className="year">(2020 - 2022)</span></h3>
                        <p>Tasked with handling software installations/updates, managing/updating Mircom Tx3 Secure Entry Systems, managing/updating XML spreadsheets, as well as or various related tasks as need by owner Melanie Stacel.</p>
                    </div>
                    <div className="item">
                        <h3 className="title">Software Engineering Bootcamp - <span className="place"><a href="https://generalassemb.ly/" target="_blank" rel="noreferrer">General Assembly</a></span> <span className="year">(2018)</span></h3>
                        <p>3 Months / 80+ Hrs a week gaining hands-on experience with HTML, CSS, JavaScript, Python, and SQL/noSQL with advanced frameworks such as React, Redux, Vue, and Django using MongoDB, PostgreSQL Databases</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <aside className="skills aside section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Skills</h2>
                  <div className="content">
                    <p className="intro"> </p>
                    <div className="skillset">  

                      <div className="item">
                        <h3 className="level-title">Python <span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="Excels most with Python, it's become my second language."><i className="fas fa-info-circle"></i>Advanced</span></h3>
                        <div className="level-bar progress">
									        <div className="progress-bar level-bar-inner" role="progressbar" style={{width: "76%"}} aria-valuenow="96"  aria-valuemin="0" aria-valuemax="96"></div>
									      </div>
                      </div>

                      <div className="item">
                        <h3 className="level-title">Django & Django REST <span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="Most of my work is mixed between python/django and react"><i className="fas fa-info-circle"></i>Pro</span></h3>
                        <div className="level-bar progress">
									        <div className="progress-bar level-bar-inner" role="progressbar" style={{width: "86%"}} aria-valuenow="96"  aria-valuemin="0" aria-valuemax="96"></div>
									      </div>
                      </div>

                      <div className="item">
                        <h3 className="level-title">C# & ASP.NET <span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="Experience in C# and ASP.NET."><i className="fas fa-info-circle"></i>Intermediate</span></h3>
                        <div className="level-bar progress">
									        <div className="progress-bar level-bar-inner" role="progressbar" style={{width: "76%"}} aria-valuenow="96"  aria-valuemin="0" aria-valuemax="96"></div>
									      </div>
                      </div>
                                
                      <div className="item">
                        <h3 className="level-title">React &amp; Redux<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="I am adept at using React and comfortable with Redux."><i className="fas fa-info-circle"></i>Pro</span></h3>
                        <div className="level-bar progress">
									        <div className="progress-bar level-bar-inner" role="progressbar" style={{width: "84%"}} aria-valuenow="74"  aria-valuemin="0" aria-valuemax="94"></div>
									      </div>
                      </div>
                                
                      <div className="item">
                        <h3 className="level-title">HTML5, CSS, JavaScript &amp; Bootstrap<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="I am familiar with advance js frameworks and form validation with JS and HTML5 and flexbox and Grid on CSS."><i className="fas fa-info-circle"></i>Pro</span></h3>
                        <div className="level-bar progress">
									        <div className="progress-bar level-bar-inner" role="progressbar" style={{width: "93%"}} aria-valuenow="83"  aria-valuemin="0" aria-valuemax="96"></div>
									      </div>
                      </div>
                                
                      <div className="item">
                        <h3 className="level-title">SQL, PostgreSQL & SQLite<span class="level-label" data-bs-toggle="tooltip" data-placement="left" title="Most comfortable with SQLite and PostrgreSQL but and SQL I am confident in using."><i className="fas fa-info-circle"></i>Pro</span></h3>
                        <div className="level-bar progress">
									        <div className="progress-bar level-bar-inner" role="progressbar" style={{width: "86%"}} aria-valuenow="76"  aria-valuemin="0" aria-valuemax="96"></div>
									      </div>
                      </div>

                      <div className="item">
                        <h3 className="level-title">noSQL MongoDB<span class="level-label" data-bs-toggle="tooltip" data-placement="left" title="Experience creating full stack applications"><i class="fas fa-info-circle"></i>Intermediate</span></h3>
                        <div className="level-bar progress">
									        <div className="progress-bar level-bar-inner" role="progressbar" style={{width: "48%"}} aria-valuenow="76"  aria-valuemin="0" aria-valuemax="96"></div>
									      </div>
                      </div>
                                
                      <div className="item">
                        <h3 className="level-title">Linux &amp; Pentesting<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="PicoCTF and ethical pentesting learned by self on persoanl time."><i className="fas fa-info-circle"></i>Intermediate</span></h3>
                        <div className="level-bar progress">
									        <div className="progress-bar level-bar-inner" role="progressbar" style={{width: "56%"}} aria-valuenow="96"  aria-valuemin="0" aria-valuemax="96"></div>
									      </div>
                      </div>

                    </div>              
                  </div>
                </div>
              </aside>

              <aside className="education aside section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Education</h2>
                  <div className="content">
                    <div className="item">                      
                      <h3 className="title"><i class="fas fa-graduation-cap"></i> Software Engineering Immersive</h3>
                      <h4 className="university">General Assembly<span className="year">(2022)</span></h4>
                    </div>
                    <div className="item">                      
                      <h3 className="title"><i className="fas fa-graduation-cap"></i>Cyber Security Training / Penetration Testing</h3>
                      <h4 className="university">Pico CTF<span className="year">(2021-present)</span></h4>
                    </div>
                    <div className="item">                      
                      <h3 className="title"><i class="fas fa-graduation-cap"></i>AWS Bootcamp</h3>
                      <h4 className="university">Amazon Web Services<span className="year">(present)</span></h4>
                    </div>
                    <div className="item">                      
                      <h3 className="title"><i class="fas fa-graduation-cap"></i>Self Learning</h3>
                      <h4 className="university">Youtube, Books, Docs, etc.<span className="year">(always)</span></h4>
                    </div>
                  </div>
                </div>
              </aside>

              <aside className="languages aside section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Languages</h2>
                  <div className="content">
                    <ul className="list-unstyled">
                      <li className="item">
                        <span className="title"><strong>English:</strong></span>
                        <span className="level">&nbsp;Native Speaker &nbsp;&nbsp;&nbsp;&nbsp; <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>

              <aside class="list music aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Favorite coding music</h2>
                  <div class="content">
                    <ul class="list-unstyled">
                      <li><i class="fas fa-headphones"></i> <a href="https://www.youtube.com/watch?v=hgIDNtqAjN4&list=RDHRqSg2PrJpY&index=25" target="_blank" rel="noreferrer">Rise Against</a></li>
                      <li><i class="fas fa-headphones"></i> <a href="https://www.youtube.com/watch?v=yVm8PjWCvLg" target="_blank" rel="noreferrer">Avenged Sevenfold</a></li>
                      <li><i class="fas fa-headphones"></i> <a href="https://www.youtube.com/watch?v=47K_A88N-0s&list=RD47K_A88N-0s&start_radio=1" target="_blank" rel="noreferrer">Mike Love (Reggae - not the beach boys ... sry)</a></li>
                      <li><i class="fas fa-headphones"></i> <a href="https://www.youtube.com/watch?v=LzgiqLIRe30" target="_blank" rel="noreferrer">Cas Haley</a></li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>


      </body>
    </div>
  )
}

export default App