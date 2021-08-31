import React from 'react'
import {Link} from 'react-router-dom';

function signup() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
                <Link to="/"><a class="navbar-brand" >Medium</a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/login">Login</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/signup">Signup</a></li>
                    </ul>
                </div>
        </div>
        </nav> 
        <header class="masthead" style={{ backgroundImage: `url("assets/img/contact-bg.jpg")` }}>
            <section class="vh-100 gradient-custom">
                            <div class="container py-5 h-100">
                              <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                  <div class="card bg-dark text-white" style={{borderradius: '1rem;'}}>
                                    <div class="card-body p-5 text-center">
                          
                                      <div class="mb-md-5 mt-md-4 pb-5">
                          
                                        <h2 class="fw-bold mb-2 text-uppercase">Signup</h2>
                                        <p class="text-white-50 mb-5">Please enter your signup and password!</p>

                                        <div class="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                                            <label class="form-label" for="typeEmailX">Username</label>
                                          </div>
                                        
                          
                                        <div class="form-outline form-white mb-4">
                                          <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                          <label class="form-label" for="typePasswordX">Password</label>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                            <label class="form-label" for="typePasswordX">Confirm Password</label>
                                        </div>
                          
                                        <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                          
                                        <button class="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>
                          

                                      </div>
                          
                                      <div>
                                        <p class="mb-0">You need Login ? <a href="login.html" class="text-white-50 fw-bold">Login</a></p>
                                      </div>
                          
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>    
            
        </header>
            
                    
        </>
    )
}

export default signup
