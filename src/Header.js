import React from 'react'

function Header() {
    return (
        <>
       <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="index.html">Medium</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" >Home</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="Login.js">Login</a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="signup.html">Signup</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="masthead" style={{ backgroundImage: `url("assets/img/home-bg.jpg")` }}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>MEDIUM</h1>
                            <span class="subheading">is a place to write,read</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                   
                    <div class="post-preview">
                        <img src="https://miro.medium.com/max/612/1*CMjjATWHwbbR94DdFlsRXQ.jpeg" width="80%" height="100%"></img>
                        <a href="header.js">
                            
                            <h2 class="post-title">If You’re an Ace Wordsmith, See How Many of These Ten Words You Know</h2>
                            <h3 class="post-subtitle">I thought I had a good vocabulary until these words stumped me</h3>  
                        </a>
                       
                      
                        <p class="post-meta">
                            Posted by
                            <a href="#!">เสถียรสุดหล่อ</a>
                            on September 24, 2021
                        </p>
                     
                    </div>
                 
                    <hr class="my-4" />
                
                    <div class="post-preview">
                        <img src="https://miro.medium.com/max/700/1*tMPWGo9G5RPYr6yrSJrRUQ.jpeg" width="80%" height="10%"></img>
                        <a href="header.js">
                            
                        <h2 class="post-title">You are Not Lazy or Undisciplined. You Have Internal Resistance.</h2>
                        <h3 class="post-subtitle">Why you can’t just do it, and what to do instead</h3>  
                        </a>
                        <p class="post-meta">

                            Posted by
                            <a href="#!">เสถียรหล่อเท่</a>
                            on September 18, 2021
                        </p>
                    </div>
              
                    <hr class="my-4" />
            
                    <div class="post-preview">
                        <img src="https://miro.medium.com/max/1280/0*whixlN2Cg3GBHN-R.jpg" width="80%" height="100%"></img>
                        <a href="header.js">
                            
                      
                            <h2 class="post-title">Why Is Christianity Collapsing in the US?</h2>
                            <h3 class="post-subtitle">James Haugh, author and journalist, has written a posting titled “ Christianity is Collapsing “. Within it he cites various credible…</h3>
                     </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">เสถียรสุดเจ๋ง</a>
                            on August 24, 2021
                        </p>
                    </div>
                    <hr class="my-4" />
          
                    <div class="post-preview">
                        <img src="https://miro.medium.com/max/700/1*-6T8wMBdzmW8a7Va2-9H8A.jpeg" width="80%" height="100%"></img>
                        <a href="header.js">
                            <h2 class="post-title">Racist White Gamers Came For This Black Woman Writer. Here’s What Happened.</h2>
                            <h3 class="post-subtitle">I spoke with Ash Parrish, a former Kotaku employee, about what it’s like to be a Black woman at one of the world’s most popular.</h3>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">เสถียรคนดี</a>
                            on July 8, 2021
                        </p>
                    </div>
                    <hr class="my-4" />
            
                    <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
        </>

    )
}

export default Header
