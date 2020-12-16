<template lang="pug">
  div.fill-height.overflow-x-hidden
    .bg-wrapper
      .bg-container
        .shape-animation(v-for="i in 100" :class="`shape-container--${i}`" :key="`shapesss-${i}`")
          .random-shape
    v-container.entrance-page.pa-0(fluid fill-height)
      v-overlay.solid-background(v-if="loading" id="page-overlay")
        .typing-text-container(id="typing")
          p.typing-text__inner.anim-typewriter(id='p-typing') { nl }
      v-container.home-page-container.px-4.px-sm-6.px-md-10.px-lg-16.py-0
        transition(name='fade')
          .mx-lg-12.mx-md-12.mx-sm-4.mx-1(v-if="!loading")
            .home-page(id="home" :style="`--app-bar-height: ${$vuetify.application.top}px`")
              .home-page-inner
                h1.hello.animate__animated.animate__fadeInDown.animate__faster.animate__delay-2s Hello, my name is
                .typing-text-container-name.animate__animated.animate__fadeInDown.animate__faster.mb-1.animate__delay-3s
                  h3.typing-text__inner.anim-typewriter-name(style="--d: .25s; --s: steps(14); --t: 2s; --b: 7; --dd: 0s") Noah Lozevski.
                template(v-if='$vuetify.breakpoint.lgAndUp')
                  .typing-text-container-name.animate__animated.animate__fadeInDown.animate__faster.animate__delay-4s.mt-2
                    h6.typing-text__inner.anim-typewriter-name(style="--d: .55s; --s: steps(32); --t: 2.5s; --b: 9; --dd: 0s") I build things for the internet.
                template(v-else)
                  .typing-text-container-name.animate__animated.animate__fadeInDown.animate__faster.animate__delay-4s.mt-3
                    h6.typing-text__inner.anim-typewriter-name(style="--d: .75s; --s: steps(22); --t: 2s; --b: 8; --dd: 0s") I build things for the
                  .typing-text-container-name.animate__animated.animate__fadeInDown.animate__faster.animate__delay-4s.mt-1
                    h6.typing-text__inner.anim-typewriter-name(style="--d: 2.75s; --s: steps(9); --t: 1s; --b: 4; --dd: 2.75s") internet.
                p.intro.mt-6.animate__animated.animate__fadeInDown.animate__faster.animate__delay-5s I am an experienced software engineer based in Raleigh, NC specializing in planning, building, and designing exceptional websites, applications, and everything in between.
                .resume-button.mt-6.animate__animated.animate__fadeInDown.animate__faster.animate__delay-5s
                  a.my-auto(href="#contact" ) Message me
                  //- a.my-auto(href="mailto:noah@lozev.ski?subject=Lets Chat! 🤟&body=Hi Noah,") Message me

            .page.about-page(id="about")
              v-lazy(:options="{ threshold: .5 }" transition="fade-transition")
                .page-inner
                  h2.numbered-header(:style="`--content: '01.'`") About me
                  v-container.pa-0.ma-0(fluid)
                    v-row
                      v-col.col-sm-8(cols="12")
                        .bio
                          .animate__animated.animate__fadeInDown.animate__faster.animate__delay-2s
                            p Hello! I'm Noah, a software engineer based in Raleigh, NC.
                            //- p I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                            p I am a full stack software engineer, with over 100+ satisfied customers/clients in the past 5 years. I am always striving to become a more innovative and creative developer in every job that I take on. Although most of my recent software work has been done in an individual setting (freelance hiring), I have always enjoyed and excelled when working in larger groups.
                            p My formal education is centered around statistical pattern recognition, probability theory, and machine learning / AI. I graduated summa cum laude from NC State University with a B.S. in Biomedical Engineering and a M.S. in Electrical Engineering.
                            p Here are the technologies I've worked with in the recent past:
                          .skills-list-container
                            .animate__animated.animate__fadeInDown.animate__faster.animate__delay-3s
                              .list-title Frontend
                              ul.skills-list
                                li Vue.js
                                li React / React Native
                                li Angular
                                li WordPress
                                li Pug / Jade
                                li SASS / SCSS

                            .animate__animated.animate__fadeInDown.animate__faster.animate__delay-3s
                              .list-title.mt-4 Backend
                              ul.skills-list
                                li Node.js / Express.js
                                li Ruby / Rails
                                li Nuxt.js / Next.js
                                li Java
                                li Python / Django
                                li PHP
                            
                            .animate__animated.animate__fadeInDown.animate__faster.animate__delay-3s
                              .list-title.mt-4 Libraries / Services
                              ul.skills-list
                                li AWS
                                li Google Cloud
                                li Heroku
                                li Netlify
                                li Bootstrap / Material
                                li Laravel
                      v-col.col-sm-4(cols="12")
                        .picture-container.mx-auto.animate__animated.animate__fadeInRight.animate__faster.animate__delay-3s(@mousemove="mouseOver" id="picture-container-fun")
                          .eye-container
                            .eyes(:style="`--eyes-top: ${top}%; --eyes-left: ${left}%;`")
                              .eye
                              .eye
                          img.profile-pic(src="/profile.jpg")

            .page.experience-page(id="experience")
              v-lazy(:options="{ threshold: .5 }" transition="fade-transition")
                .page-inner
                  h2.numbered-header.animate__animated.animate__fadeInDown.animate__faster.animate__delay-2s(:style="`--content: '02.'`") Some Places I've Worked
                  v-container.pa-0.ma-0(fluid)
                    .d-block
                      .table-bigger
                        .labels.animate__animated.animate__fadeInDown.animate__faster.animate__delay-2s(:style="`--top-position: ${barPosition}px`")
                          .label(v-for="(data, i) in companies" @click="selectedCompanyIndex = i" :class="i === selectedCompanyIndex ? 'selected' : ''" :key="`company-label-${i}`") {{ data.company_name }}
                        .item.animate__animated.animate__fadeInDown.animate__faster.animate__delay-2s
                          .top
                            span.position {{ selectedCompany.position }} 
                            span.green-text @ 
                              a(:class='selectedCompany.company_url !== "#" ? "hvr-underline-from-center" : ""' :href="selectedCompany.company_url") {{ selectedCompany.company_name }}
                          .dates
                            | {{ selectedCompany.date_string }}
                          ul.action-list
                            li(v-for="(bullet, j) in selectedCompany.bullets" :key="`action-list-${j}`") {{ bullet }}
            
            .page.projects(id="projects")
              v-lazy(:options="{ threshold: .2 }" transition="fade-transition")
                .page-inner
                  h2.numbered-header(:style="`--content: '03.'`") Things I've Built
                  v-container.pa-0.ma-0(fluid)
                    .project-item(v-for="(project, i) in projects.filter(p => p.featured)" :key="`project-item-${i}`")
                      .p-container
                        .title.animate__animated.animate__fadeInDown.animate__faster.animate__delay-2s {{ project.name }}
                        .description.animate__animated.animate__fadeInDown.animate__faster.animate__delay-3s {{ project.description }}
                          .extra-link(v-if="!!project.extraLink")
                            a.hvr-underline-from-center(:href='project.extraLink.src') {{ project.extraLink.label }}
                        .services.animate__animated.animate__fadeInDown.animate__faster.animate__delay-3s
                          .service(v-for="(service,j) in project.services" :key="`services-${j}-${i}`") {{ service }}
                        .items.animate__animated.animate__fadeInDown.animate__faster.animate__delay-2s
                          .item.github-link(v-if="!!project.github")
                            a(:href="project.github" target="_blank")
                              svg.icon(xmlns="http://www.w3.org/2000/svg", role="img", viewBox="0 0 438.549 438.549")
                                title GitHub
                                path(d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z")
                          .item.external-link(v-if="!!project.link")
                            a(:href="project.link" target="_blank")
                              svg(xmlns="http://www.w3.org/2000/svg", role="img", viewBox="0 0 194.818 194.818")
                                title External Link
                                g
                                  path(d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z")
                                  path(d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z")
                      .img-container(v-if="!!project.photo")
                        img.featured-project-image(:src="project.photo")

            .page.contact-page(id="contact")
              v-lazy(:options="{ threshold: .5 }" transition="fade-transition")
                .page-inner
                  h2.numbered-header(:style="`--content: '04.'`") Contact Me
                  
                  //- h1.numbered-header Contact Me
                  v-container.pa-0.ma-0(fluid)
                    .body
                      p My inbox is always open! I love hearing about new opportunities, big or small. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                      p
                        | Feel free to send a message with the form below or click 
                        span.email-me
                          a.hvr-underline-from-center(href="mailto:noah@lozev.ski?subject=Lets Chat! 🤟&body=Hi Noah,") here
                        |  to directly email me.
                      .form
                        v-text-field(placeholder="Email" clearable v-model="email" color="#64ffda")
                        v-textarea(placeholder="Message" full-width v-model="email_message" color="#64ffda")
                        .send-message
                          a(@click="sendMessage") Send Message
                      v-overlay.overlay(v-model="sending_email" :absolute="true")
                        v-progress-circular(v-if="sending_email_progress" indeterminate color="#64ffda")
                        template(v-if="!sending_email_progress")
                          p.text-center.mb-4 Message sent!
                          .svg-container
                            svg#svg(viewBox="0 0 100 100")
                              path#checkmark.check(fill="none", stroke="green", stroke-width="3", d="M64.5,32.4L32.6,64.3L18.4,50")
                          .send-message.mt-4
                            a(@click="resetSendEmail") OK

                    
                  
                    
            .footer
              .links.d-md-none
                .item
                  a(href="https://github.com/noahlozevski" target="_blank" rel="noopener")
                    svg.icon(xmlns="http://www.w3.org/2000/svg", role="img", viewBox="0 0 438.549 438.549")
                      title GitHub
                      path(d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z")
                .item.linkedin
                  a(href="https://www.linkedin.com/in/nlozevski/" target="_blank" rel="noopener")
                    svg.icon(xmlns="http://www.w3.org/2000/svg", role="img", viewBox="0 0 430.117 430.117")
                      title LinkedIn
                      path(d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z")
                .item.indeed
                  a(href="https://my.indeed.com/p/noahl-im8w8tp" target="_blank" rel="noopener")
                    svg.icon(xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", version="1.1", x="0px", y="0px", viewBox="0 0 512 512", style="enable-background:new 0 0 512 512;", space="preserve")
                      title Indeed
                      g
                        path(d="M316.2,219.9c-51.1,26.2-108.4-22.7-90.6-77.3c17.9-54.7,93-60.3,118.8-8.8C360.4,165.3,347.9,204,316.2,219.9L316.2,219.9   z M247.5,12.2C300.2-7,360.4-6,405.5,33.2c9.5,7.8,17,17.8,21.8,29.2c4.5,14.7-16-1.5-18.8-3.6c-14.2-9.7-29.6-17.6-45.9-23.4   c-88.8-27.1-172.8,22.3-224.7,99.3c-21.2,33.9-37.3,70.8-48,109.3c-1,4.7-2.5,9.3-4.5,13.8c-2.3,4.3-1.1-11.8-1.1-12.2   c1.9-16.1,5-32.1,9.2-47.8C117.6,113.9,170.9,44.1,247.5,12.2L247.5,12.2z M248.3,460v-187c5.3,0.6,10.3,0.8,15.7,0.8   c24.3,0.1,48-6.6,68.8-19.1V460c0,17.6-3.3,30.5-11.2,39c-7.9,8.7-19.1,13.4-30.9,13c-11.6,0.4-22.7-4.3-30.5-13   C252.2,490.4,248.2,477.4,248.3,460L248.3,460z")
                .item.upwork
                  a(href="https://www.upwork.com/freelancers/~018b9263e67b5c6ad0" target="_blank" rel="noopener")
                    svg.icon(xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", style="enable-background:new 0 0 56.7 56.7;", version="1.1", viewBox="0 0 56.7 56.7", space="preserve")
                      path(d="M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z")
                .item.codepen
                  a(href="https://codepen.io/lozevski" target="_blank" rel="noopener")
                    svg.icon(xmlns="http://www.w3.org/2000/svg", role="img", viewBox="0 0 31.665 31.665")
                      title Codepen
                      path(d="M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z")
              //- .item.email
                a(href="mailto:noah@lozev.ski?subject=Lets Chat! 🤟&body=Hi Noah, I'd like to hire you!") noah@lozev.ski
              .item.github-link.email
                a(href="https://github.com/noahlozevski/lozev.ski" target="_blank" rel="noopener")
                  div Designed and Built by Noah Lozevski
                  .stats
                    svg(aria-label="stars", viewBox="0 0 14 16", version="1.1", width="14", height="16", role="img")
                      path(fill-rule="evenodd", d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z")
                    span 2,032
                    svg(aria-label="forks", viewBox="0 0 10 16", version="1.1", width="10", height="16", role="img")
                      path(fill-rule="evenodd", d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z")
                    span 1,535
            svg#svgfilters(aria-hidden="true", style="position: absolute; width: 0; height: 0; overflow: hidden;", version="1.1", xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink")
              defs
                filter#noise(x="0%", y="0%", width="100%", height="100%")
                  feTurbulence(baseFrequency="0.01 0.4", result="NOISE", numOctaves="2")
                  feDisplacementMap(in="SourceGraphic", in2="NOISE", scale="20", xChannelSelector="R", yChannelSelector="R")
</template>
<script>
export default {
  data() {
    return {
      state: 0,
      isMobile: false,
      tabs: ["home", "projects", "resume", "contact"],
      slideOff: 0.25,
      selectedTab: null,
      loading: true,
      loading2: true,
      left: 0,
      top: 0,
      email: "",
      email_message: "",
      sending_email: false,
      sending_email_progress: false,
      selectedCompanyIndex: 0,
      companies: [
        // {
        //   company_name: "Vaporware",
        //   position: "Software Engineer",
        //   company_url: "https://www.vaporware.net/",
        //   date_string: "Fall 2020 - Present",
        //   bullets: [
        //     "Worked on full stack financial forecasting team focused on automating P&L statements",
        //     "Developed a new Java backend API and serverless workflow automation service that decreased lead time of P&L statements by 80%",
        //     "Designed and implemented a frontend UI in Vue.js to trigger the new backend API calls",
        //   ],
        // },
        {
          company_name: "Upwork / Intellex",
          position: "Software Engineer",
          company_url: "https://upwork.com/",
          date_string: "2015 - Present",
          bullets: [
            "Developed personalized software solutions for over 100+ satisfied customers, ranging from attorney database management to full stack website design / hosting",
            "Maintain 8 regular client accounts for on-demand service",
            "Worked on projects independently as a freelancer or as a contract employee for smaller startups in agile / scrum based environments",
          ],
        },
        {
          company_name: "Amazon Web Services",
          position: "Software Development Engineer Intern",
          company_url: "https://aws.amazon.com/",
          date_string: "Summer 2020",
          bullets: [
            "Worked on full stack financial forecasting team focused on automating P&L statements",
            "Developed a new Java backend API and serverless workflow automation service that decreased lead time of P&L statements by 80%",
            "Designed and implemented a frontend UI in Vue.js to trigger the new backend API calls",
          ],
        },
        {
          company_name: "Luxury Concierge",
          // company_name: "Luxury Concierge / La Parlay / Supreme Rentals",
          position: "Import/Export Specialist",
          company_url: "#",
          date_string: "2019 - Present",
          bullets: [
            "Founded/Manage 3 companies used for international business transactions involving luxury cars",
            "Brokered 25+ deals between international clientele and domestic dealerships, arranging logistics and filing legal paperwork for escrow accounts",
            "Credited with $1+ million in revenue in first year",
          ],
        },
        {
          company_name: "LaLush Laboratory",
          position: "Lab Assistant",
          company_url: "#",
          date_string: "2018 - 2019",
          bullets: [
            "Assisted in the development of AI-optimized image scanning for cancer and radioactive tracer quantification / identification",
            "Machine learning implementation of multimodal quantitative imaging analysis from PET-MRI scans to lower radiotracer dosage to patients by 50%",
          ],
        },
      ],
      projects: [
        {
          featured: true,
          name: "Simply Video",
          description:
            "Cross-platform video/audio meeting application for small-to-medium businesses. Allows customers to customize the company banner and other UI through a simple web interface. Users can login and join meetings through any web browser/phone or even Skype.",
          link: "https://www.simplydemo.me/",
          services: ["Vue.js", "WebRTC", "Bootstrap", "jQuery"],
          photo: "/simplyvideo.png",
          year: 2018,
        },
        {
          featured: true,
          name: "KidNet",
          description:
            "Site made for a local school and allows teachers to communicate, save, and share lesson plans with their students. It also organizes their schedule and has additional functionality for other administrative personnel.",
          link: "http://gokidnet.com/",
          services: ["Vue.js", "Nuxt.js", "Node.js", "Laravel"],
          year: 2018,
          photo: "/gokidnet.png",
        },
        {
          featured: true,
          name: "Autonomous Electric Scooter",
          description:
            "iPhone application that interfaces with Xiaomi m365 electric scooters via Bluetooth to send automatic braking commands. Utilizes a custom trained YOLOv3 CoreML model to classify objects in phones nearby vicinity automatically.",
          github: "https://github.com/noahlozevski/YOLO-v3-COCO-CoreML",
          services: ["Swift", "Python", "PyTorch", "CoreML"],
          year: 2019,
          photo: "/yolo.jpeg",
        },
        {
          featured: true,
          name: "Ral.ai",
          extraLink: { src: "https://jonaharts.com", label: "Jonah Lozevski" },
          description: "Website designed for a local AI consulting company. Designed and built with my brother, ",
          github: "https://github.com/noahlozevski/ral.ai",
          link: "https://ral.ai",
          year: 2020,
          services: ["Vue.js", "Nuxt.js", "Vuetify", "SASS/SCSS"],
          photo: "/ralai.png",
        },
        {
          featured: false,
          name: "PAC Generator",
          link: "https://paceg.herokuapp.com/",
          services: ["Vue.js", "Vuetify", "Heroku"],
          year: 2018,
        },
      ],
    }
  },
  computed: {
    selectedCompany() {
      return this.companies[this.selectedCompanyIndex]
    },
    barPosition() {
      return `${this.selectedCompanyIndex * 49}`
    },
    message() {
      return ["{ nl }"]
    },
    showPage() {
      return !!this.$route.query?.home
    },
    slideOffset() {
      return this.selectedTab !== null ? 0 : this.slideOff
    },
  },
  mounted() {
    this.isMobile = window.innerWidth <= 600
    this.selectedTab = this.$route.query?.tab || 0

    Promise.resolve()
      .delay(250)
      .then(() => {
        setTimeout(() => {
          const logo = document.getElementById("logo-app-bar")

          const logo_prev = document.getElementById("typing")
          const text = document.getElementById("p-typing")

          const rect = logo.getBoundingClientRect()

          if (this.$vuetify.breakpoint.mdAndUp) {
            logo_prev.classList.add("move-logo")
            logo_prev.style.transform = `translate(calc(-50vw + ${rect.left + 8}px),calc(-50vh + ${rect.top}px))`
            text.classList.add("move-move")
          } else {
            logo_prev.classList.add("animate__animated")
            logo_prev.classList.add("text-glow-faster")
          }
          setTimeout(() => {
            document.getElementById("page-overlay").classList.remove("solid-background")
            this.loading = false
            this.$emit("loaded")
          }, 1100)
        }, 2500)
      })
  },
  methods: {
    resetSendEmail() {
      this.sending_email_progress = false
      this.sending_email = false
    },
    sendMessage() {
      if (!this.email_message && !this.email) return
      this.sending_email = true
      this.sending_email_progress = true
      this.$api
        .post("/email", { message: this.email_message, email: this.email })
        .catch(err => err)
        .finally(() => {
          this.sending_email_progress = false
          this.email = ""
          this.email_message = ""
        })
    },
    mouseOver(e) {
      let picContainer = document.getElementById("picture-container-fun")
      let x = (e.offsetX / picContainer.clientWidth) * 50
      let y = (e.offsetY / picContainer.clientHeight) * 50

      this.left = x
      this.top = y
    },
  },
}
</script>
<style lang="sass" scoped>
$dark-blue: #0a192fd9
$lighter-blue: rgb(23, 42, 69)
$neon-green: rgb(100, 255, 218)
$navy: #0a192f
$light-navy: #172a45
$lightest-navy: #303C55
$slate: #8892b0
$light-slate: #a8b2d1
$lightest-slate: #ccd6f6
$white: #e6f1ff
$green: #64ffda
.hvr-underline-from-center
  /* display: inline-block;
  vertical-align: middle
  -webkit-transform: perspective(1px) translateZ(0)
  transform: perspective(1px) translateZ(0)
  box-shadow: 0 0 1px rgba(0, 0, 0, 0)
  position: relative
  overflow: hidden

  &:before
    content: ""
    position: absolute
    z-index: -1
    left: 51%
    right: 51%
    bottom: -6px
    background: rgb(100, 255, 218)
    height: 2px
    -webkit-transition-property: left, right
    transition-property: left, right
    -webkit-transition-duration: 0.1s
    transition-duration: 0.1s
    -webkit-transition-timing-function: ease-out
    transition-timing-function: ease-out
    border-radius: 1px

  &:hover:before, &:focus:before, &:active:before
    left: 0
    right: 0
.footer
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin-bottom: 30px
  .links
    display: flex
    flex-direction: row
    justify-content: space-evenly
    align-items: center
    width: max(300px, 60vw)
    .item
      // padding: 20px 10px
      height: 25px
      width: 25px
      color: $light-slate !important
      // transform: translateY(4px)
      transition: .25s transform ease-in-out

      &:hover
        // transform: translateY(0px)
      a
        color: $light-slate !important
        text-decoration: none
        // color: $lightest-slate !important
        svg
          path
            transition: fill .35s ease-in-out
            fill: currentcolor
      a:hover
        color: $green !important
        svg
          path
            transition: fill .35s ease-in-out
            fill: currentcolor
  .email
    margin-top: 25px
    color: $light-slate !important
    // transform: translateY(4px)
    // transition: .25s transform ease-in-out
    font-size: 14px
    font-family: "JetBrains Mono"
    line-height: 30px
    &.github-link
      margin-top: 25px
      .stats
        text-align: center
      span
        margin: 0 10px
    &:hover
      // transform: translateY(0px)
    a
      transition: .25s color ease-in-out
      color: $light-slate !important
      text-decoration: none
      svg
        transform: translateY(2px)
        path
          transition: fill .35s ease-in-out
          fill: currentcolor
    a:hover
      color: $green !important
      svg
        path
          transition: fill .35s ease-in-out
          fill: currentcolor

// @media only screen and (min-width: 600px)
//   .page
//     .page-inner
//       .project-item
//         .p-container
//         .img-container
//           width: 100px
//           height: 100px
//           .featured-project-image
//             height: 100px
//             width: 100px
.page
  display: flex
  justify-content: center
  flex-direction: column
  align-items: flex-start
  min-height: 100vh
  padding: 50px 0
  &.experience-page
    align-items: center
    min-height: 50vh
  &.contact-page
    align-items: center
    min-height: 50vh
    // min-width: min(80%, 500px)
    .page-inner
      font-family: 'gotham'
      font-size: 16px
      .body
        padding: 30px
        border-radius: 6px
        background-color: $light-navy
        transition: all .2s linear
        box-shadow: none
        max-width: 700px
        position: relative
        .email-me
          display: inline
          width: fit-content
          height: fit-content
          top: -1.5px !important
          position: relative  !important
          a
            color: $green
            text-decoration: none
        &:hover
          box-shadow: 20px 35px 43px -13px rgb(2, 12, 27)
        .send-message
          border-radius: 5px
          border: 1.5px solid $green
          width: 150px
          height: 50px
          padding: auto
          transition: all .25s ease-in-out
          text-align: center
          font-family: 'JetBrains Mono'
          a
            line-height: 45px
            display: block
            text-decoration: none
            color: $green
          &:hover
            background-color: rgb(100, 255, 218,0.2)
        .overlay
          .v-overlay__content
            display: flex
            justify-content: center
            align-items: center
            flex-direction: column
            .text-center
              font-size: 22px
            .send-message
              width: 80px
              margin: 0 auto
            .svg-container
              color: $green
              position: relative
              overflow: hidden
              height: 100px
              @keyframes svgstrokefill
                0%
                  stroke-dashoffset: 100
                100%
                  stroke-dashoffset: 0
              svg
                height: 150px
                width: 150px
                transform: translate(18px, -31px)
                path
                  stroke-dasharray: 100
                  stroke-dashoffset: 100
                  animation: svgstrokefill 1s ease forwards
                  stroke: currentcolor




  &.projects
    .v-lazy
      align-self: center
      width: min(100%, 800px)
      .page-inner
        .v-container
          display: flex



    // align-items: center
    // min-height: 100vh

    // min-height: 100vh
    // margin-top: 150px
  .page-inner
    .project-item
      position: relative
      max-width: 100%
      align-self: flex-end
      // width: 1000px
      // max-width: max(min(550px, 40vw), 500px)
      // &:hover
      //   .p-container
      //     .title
      //       color: $white
      //     .description
      //       color: $light-slate
      padding: 80px 0
      &:nth-child(even)
        justify-content: flex-end
        .p-container
          .title
            text-align: right
          .items
            align-self: flex-end
            align-items: flex-end


          .services
            justify-content: flex-end
            .service
              // &:last-child
              //   // padding-inline-end: revert
              //   padding-inline-end: 0

          .description
            text-align: right
        @media only screen and (max-width: 600px)
          .img-container
            transform: translateY(-80%) translateX(-5%)
            right: 0
            left: 5% !important
        .img-container
          right: revert
          left: 0
      font-family: 'gotham'
      display: flex
      flex-direction: row
      // .featured-title
      //   color: $green
      //   font-family: 'JetBrains Mono'
      //   font-size: 14px
      .p-container
        z-index: 1
        display: flex
        flex-direction: column
        .title
          // color: $light-slate
          color: $lightest-slate
          padding-bottom: 25px
          font-size: 24px !important
          font-family: 'gotham-bold' !important

          &:before
            content: "Featured Project"
            color: $green
            font-family: 'JetBrains Mono'
            font-size: 14px
            position: relative
            display: block
            margin-bottom: -3px
            // transform: translateY(-30px)
        @media only screen and (max-width: 600px)
          .description
            max-width: 80vw !important
        .description
          border-radius: 6px
          overflow: hidden
          padding: 20px
          width: max(min(550px, 40vw), 500px)
          text-align: left
          // color: $slate
          background: $light-navy
          color: $light-slate
          transition: box-shadow .2s linear
          box-shadow: none
          &:hover
            box-shadow: 20px 35px 43px -13px rgb(2, 12, 27)
            // box-shadow: 0 20px 30px -15px rgba(2,12,27,1)
        .extra-link
          display: inline
          width: fit-content
          height: fit-content
          top: -1.5px !important
          position: relative  !important
          a
            color: $green
            text-decoration: none
        .services
          display: flex
          flex-direction: row
          font-family: 'JetBrains Mono'
          font-size: 14px
          color: $slate
          .service
            padding: 25px 15px
            // padding-bottom: 0
            &:first-child
              padding-inline-start: 0
            &:last-child
              padding-inline-end: 0
            // display: inline
        .items
          // max-height: 25px
          display: flex
          flex-direction: row
          .item
            height: 20px
            width: 20px
            color: $light-slate !important
            transition: .25s transform ease-in-out
            margin: 0 8px
            &:first-child
              margin-inline-start: 0
            &:last-child
              margin-inline-end: 0
            // padding: 7px
            &:hover
              // transform: translateY(0px)
            a
              color: $light-slate !important
              text-decoration: none
              svg
                path
                  transition: fill .35s ease-in-out
                  fill: currentcolor
            a:hover
              color: $green !important
              svg
                path
                  transition: fill .35s ease-in-out
                  fill: currentcolor
      @media only screen and (min-width: 601px)
        .img-container
          position: absolute
          right: 0
          z-index: 0
          // width: px
          // height: fit-content

          // height: fit-content
          filter: url('#noise') grayscale(100%)
          // transition: 1s !important
          // animation: filter-anim 3s infinite
          top: 50%
          max-width: 50%
          transform: translateY(-60%)
          border-radius: 6px
          &:hover
            filter: none
          .featured-project-image
            border-radius: 6px
            position: relative
            height: 100%
            width: 100%
            // height: 100px
            // max-height: 300px
            // width: 100px
      @media only screen and (max-width: 600px)
        .img-container
          position: absolute
          right: 5%
          left: 0
          z-index: 0
          border-radius: 6px
          // top: 0
          // bottom: 0
          top: 50%
          // width: px
          // height: fit-content

          // height: fit-content
          // filter: grayscale(100%)
          opacity: .1
          // transition: 1s !important
          // animation: filter-anim 3s infinite
          // top: 50%
          // max-width: 50%
          transform: translateY(-80%) translateX(5%)
          &:hover
            filter: none
          .featured-project-image
            border-radius: 6px
            position: relative
            height: 100%
            width: 100%
            // height: 100px
            // max-height: 300px
            // width: 100px


    .numbered-header
      display: flex
      -webkit-box-align: center
      align-items: center
      position: relative
      margin: 10px 0px 40px
      width: 100%
      font-size: clamp(16px,5vw,28px)
      white-space: nowrap
      font-family: 'gotham'
      color: $lightest-slate
      &:before
        content: var(--content)
        color: $green
        font-family: 'JetBrains Mono'
        margin: calc(clamp(16px,5vw,28px) * .25) 15px 0 0
        font-size: calc(clamp(16px,5vw,28px) * .75)
      &:after
        display: block
        position: relative
        content: ""
        width: inherit
        height: 1px
        margin-left: 25px
        background-color: $slate
    .picture-container
      // height: 500px
      // width: min(50%, 200px)
      width: 100%
      max-width: 300px
      position: relative
      .profile-pic
        position: relative
        top: 0px
        left: 0px
        width: 100%
        height: 100%
        object-fit: fit
        object-position: center center
        opacity: 1
        transition: opacity 500ms ease 0s
        border-radius: 25px
        z-index: 1
      &:after
        content: ""
        // display: block
        position: absolute
        width: calc(100% - 2px)
        height: calc(100% - 2px)
        border-radius: 25px
        transition: all .2s ease-in-out
        border: 2px solid $green
        top: 20px
        left: 25px
        z-index: 0
      &:hover
        .eye-container
          opacity: 1
        &:after
          top: 10px
          left: 12.5px
    .table-bigger
      display: flex
      flex-direction: row
      font-family: 'gotham'
      align-items: flex-start
      min-height: 300px
      max-width: min(800px, 90vw)
      @media only screen and (max-width: 600px)
        &
          flex-direction: column
          .labels
            display: block
            overflow-x: scroll
            // padding-top: 10px
            // overflow-y: hidden
            max-width: 100%
            white-space: nowrap
            height: 80px
            scrollbar-width: none
            &::-webkit-scrollbar
              display: none
            .label
              overflow-x: revert
              max-width: 130px !important
              overflow-wrap: break-word
              word-wrap: break-word
              hyphens: auto
              // white-space: wrap
              // word-wrap: wrap
              white-space: break-spaces
              display: inline-block
              position: relative
              height: fit-content
              text-align: center
              // width: fit-content !important
              // width: 100px
              // width: 20px !important
              padding: 10px 20px !important
              // transition: all 1s linear !important
              &:hover
                // background-color: $light-navy
                // opacity: .2
                color: $green
                // background-position: -100% 0
                box-shadow: inset 0 -100px 0 0 $light-navy !important
            .selected
              box-shadow: inset 0 -100px 0 0 $light-navy !important
              color: $green

              border-bottom-color: $green !important
              border-bottom-width: 1.5px !important
              border-bottom-style: solid

              // transform: translateY(10px)
            // &:before
            //   content: none
              // width: 0 !important
              // height: 0 !important
              // background-color: transparent
              // position: absolute
              // content: ""
              // transition: all .25s ease-in-out
              // transform: translateY(var(--top-position))
              // background-color: red !important

      // background-color: red
      .labels
        // max-width: 300px
        min-width: 190px
        cursor: pointer
        @media only screen and (min-width: 601px)
          &::before
            width: 1px
            height: 49px
            background-color: $green
            position: absolute
            content: ""
            transition: all .25s ease-in-out
            transform: translateY(var(--top-position))
        .label
          font-family: 'JetBrains Mono'
          font-size: 13px
          padding: 15px 20px
          color: $slate
          transition: box-shadow .2s ease-in-out, color 0.2s ease-in-out
          box-shadow: inset 0px 0 0 0 $navy
          // background-size: 200% 100%
          // background-position: 0 0
          // background-image: linear-gradient(to right, $navy 50%, $light-navy 50%)
          &:hover
            // background-color: $light-navy
            // opacity: .2
            color: $green
            // background-position: -100% 0
            box-shadow: inset 0 -50px 0 0 $light-navy
        .selected
          box-shadow: inset 0 -50px 0 0 $light-navy
          color: $green


      .item
        padding: 0 25px
        font-family: 'gotham'
        padding: 10px 20px
        .top
          // margin-bottom: 5px
          .position
            color: $white
            font-size: 16px
          .green-text
            font-family: 'gotham-bold'
            color: $green
            a
              color: $green
              font-size: 16px

              text-decoration: none
              &.hvr-underline-from-center
                line-height: 17px
        .dates
          font-family: 'JetBrains Mono'
          font-size: 13px
          color: $slate
          padding: 8px 0 25px 0

        .action-list
          padding: 0px
          overflow: hidden
          list-style: none
          margin-top: 0
          li
            padding-left: 30px
            color: $light-slate
            font-size: 14px
            position: relative
            margin-bottom: 10px
            // &:nth-child(odd)
            &:before
              content: "▹"
              // margin-right: 10px
              left: 10px
              top: 2px
              // transform: translateY(50%)
              position: absolute
              color: $green
              font-size: 16px
              line-height: 12px
            // &:nth-child(even)
            //   margin-left: 30px
            //   padding: 0
            //   content: ""
            //   display: block
            //   width: var(--amt)
            //   height: 2px
            //   margin-top: 5px
            //   margin-bottom: 5px
            //   background-color: $green
            //   &:after
        // background: green
    .bio
      p
        font-family: 'gotham'
        font-size: 16px
        color: $light-slate
      .skills-list-container
        font-family: 'JetBrains Mono'
        margin: 20px 0px 0px
        .list-title
          font-size: 16px
          color: $green
          margin-bottom: 7px
          // &:after
          //   content: "test"
          //   text-align: right
          //   display: inline-block
        .skills-list
          display: grid
          grid-template-columns: repeat(2, minmax(140px, 300px))
          padding: 0px
          overflow: hidden
          list-style: none
          li
            padding-left: 30px
            color: $light-slate
            font-size: 14px
            position: relative
            // &:nth-child(odd)
            &:before
              content: "▹"
              // margin-right: 10px
              left: 10px
              top: 2px
              // transform: translateY(50%)
              position: absolute
              color: $green
              font-size: 16px
              line-height: 12px
            // &:nth-child(even)
            //   margin-left: 30px
            //   padding: 0
            //   content: ""
            //   display: block
            //   width: var(--amt)
            //   height: 2px
            //   margin-top: 5px
            //   margin-bottom: 5px
            //   background-color: $green
            //   &:after
@keyframes filter-anim
  0%
    filter: none
  100%
    filter: url('#noise')
.home-page
  display: flex
  justify-content: center
  flex-direction: column
  align-items: flex-start
  min-height: calc(100vh - var(--app-bar-height))
  // height: calc(100vh - var(--app-bar-height))
  .home-page-inner
    // max-width: 100%
    .hello
      color: $green
      padding-left: 4px
      margin-bottom: 25px
      // padding-left: 2px
      font-size: clamp(14px,5vw,16px)
    h3
      color: $lightest-slate
    h6
      color: $slate
    .intro
      color: $light-slate
      font-size: 16px
      max-width: min(100%, 500px)
      padding-right: 10px
      font-family: gotham
    .resume-button
      border-radius: 5px
      border: 1.5px solid $green
      width: 150px
      height: 50px
      padding: auto
      transition: all .25s ease-in-out
      text-align: center
      a
        line-height: 45px

        display: block
        text-decoration: none
        color: $green
      &:hover
        background-color: rgb(100, 255, 218,0.2)


.home-page-container
  max-width: 1200px !important

.entrance-page
  .v-overlay
    .v-overlay__content
      position: absolute !important

.solid-background
  // transition: all 1s ease-in-out !important
  background-color: #040b15 !important

$delay:.5s
$length: 2s

.slide-in-top
  -webkit-animation: slide-in-top 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) .5s both
  animation: slide-in-top 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) .5s both


@-webkit-keyframes slide-in-top
  0%
    -webkit-transform: translateY(-1000px)
    transform: translateY(-1000px)
    opacity: 0

  100%
    -webkit-transform: translateY(0)
    transform: translateY(0)
    opacity: 1

@keyframes slide-in-top
  0%
    -webkit-transform: translateY(-1000px)
    transform: translateY(-1000px)
    opacity: 0

  100%
    -webkit-transform: translateY(0)
    transform: translateY(0)
    opacity: 1

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0



.typing-text-container-name
  white-space: nowrap
  /** aligns the element in the center of the page at the start */
  /** the typing bar */
  text-align: left
  // height: auto
  width: fit-content
  max-width: calc(100% - 4px)
  font-size: clamp(10px, 8vw, 80px)
  transition: all 1s ease-in-out !important
  .typing-text__inner
    text-align: left
    margin: 0 !important
    height: 100%
    width: 100%
    overflow: hidden
    line-height: 105%
    border-right: 2px solid transparent

.typing-text-container
  white-space: nowrap
  position: fixed
  /** aligns the element in the center of the page at the start */
  // margin: 0 auto
  transform: translate(-50%,-50%)
  /** the typing bar */
  text-align: center
  height: 72px
  width: 260px
  margin: 0 !important
  transition: all 1s ease-in-out !important
  .typing-text__inner
    margin: 0 !important
    height: 100%
    width: 100%
    overflow: hidden
    font-size: 72px
    line-height: 100%
    border-right: 2px solid #e6f1ff
    // &p
      // position: fixed
.hide-text
  display: none

.move-move
  animation: 1s ease-in-out 0s 1 normal both running typing !important
  // animation

.move-logo
  height: 28px
  width: 126px
  transition: all 1s ease-in-out !important
  .typing-text__inner
    transition: all 1s ease-in-out !important
    border: none !important
    line-height: 28px
    overflow: visible

  // animation: 1s ease-in-out 0s 1 normal both running typing !important
  // transition: all 1s ease-in-out
  p
    // font-size: 35px !important
    // line-height: 35px !important

  // height: 35px

  // position: fixed !important
  // transform: translate(calc(-145px),-50px)
  // position: absolute
  // width: 150px

.anim-typewriter
  animation: typewriter $length steps(6) $delay 1 normal both, blinkTextCursor 350ms steps(6) infinite normal

.anim-typewriter-name
  // animation: typewriter 2s steps(14) var(--d) 1 normal both, blinkTextCursor 350ms steps(14) 20 normal
  animation: typewriter var(--t) var(--s) var(--d) 1 normal both, blinkTextCursor 350ms var(--s) var(--dd) var(--b) normal

@keyframes typewriter
  0%
    width: 0%
  100%
    width: 100%

@keyframes blinkTextCursor
  from
    border-right-color: #e6f1ff
  to
    border-right-color: transparent


@keyframes typing
  0%
    font-size: 72px
  100%
    font-size: 50px




.magictime.bombRightOut
    -webkit-animation-duration: 1s
    animation-duration: 1s
.card
  animation: opacityanim .5s ease-in-out var(--delay) both
@keyframes opacityanim
  0%
    opacity: 0
  100%
    opacity: 1

.roll-in-blurred-left
  -webkit-animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both
  animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both

/* ----------------------------------------------
 * Generated by Animista on 2020-11-24 23:15:20
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ----------------------------------------------

/**
 * ----------------------------------------
 * animation roll-in-blurred-left
 * ----------------------------------------
@-webkit-keyframes roll-in-blurred-left
  0%
    -webkit-transform: translateX(-1000px) rotate(-720deg)
    transform: translateX(-1000px) rotate(-720deg)
    -webkit-filter: blur(50px)
    filter: blur(50px)
    opacity: 0

  100%
    -webkit-transform: translateX(0) rotate(0deg)
    transform: translateX(0) rotate(0deg)
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1

@keyframes roll-in-blurred-left
  0%
    -webkit-transform: translateX(-1000px) rotate(-720deg)
    transform: translateX(-1000px) rotate(-720deg)
    -webkit-filter: blur(50px)
    filter: blur(50px)
    opacity: 0

  100%
    -webkit-transform: translateX(0) rotate(0deg)
    transform: translateX(0) rotate(0deg)
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1
.card-animation
  -webkit-animation: all 1s ease
  animation: all 1s ease

ul.pre-loader
  // position: absolute
  // top: 50%
  // left: 50%
  // transform: translate(-50%, -50%)
  // margin: 0
  // padding: 0
  -webkit-animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both


// .items
//   li
//     list-style: none

.list-complete-item
  transition: all 1s

.list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active below version 2.1.8 */
  opacity: 0
  transform: translateX(30px)

.list-complete-leave-active
  position: absolute

ul.pre-loader li
  list-style: none
  color: #484848
  display: inline
  // font-size: 5em
  font-size: 2.25em
  // letter-spacing: 15px

.animate-start
  -webkit-animation: pre-load 3s ease-in-out 2s infinite
  animation: pre-load 3s ease-in-out 2s infinite

  // animation: pre-load 3s ease-in-out infinite,
.flip-list-move
  transition: transform 1s

@keyframes pre-load
  0%
    color: #ddbf3b
    text-shadow: 0 0 3px #ddbf3b, 0 0 10px #ddbf3b

  20%
    color: white
    text-shadow: none

  40%
    color: #ddbf3b
    text-shadow: 0 0 3px #ddbf3b, 0 0 10px #ddbf3b

  60%
    color: white
    text-shadow: none

  80%
    color: #ddbf3b
    text-shadow: 0 0 3px #ddbf3b, 0 0 10px #ddbf3b

  100%
    color: white
    text-shadow: none

ul
  li:nth-child(1)
    animation-delay: .1s

  &.pre-loader li
    &:nth-child(2)
      animation-delay: .15s

    &:nth-child(3)
      animation-delay: .2s

    &:nth-child(4)
      animation-delay: .25s

    &:nth-child(5)
      animation-delay: .3s

    &:nth-child(6)
      animation-delay: .35s

    &:nth-child(7)
      animation-delay: .4s

    &:nth-child(8)
      animation-delay: .45s

    &:nth-child(9)
      animation-delay: .5s

    &:nth-child(10)
      animation-delay: .55s

    &:nth-child(11)
      animation-delay: .6s
    &:nth-child(12)
      animation-delay: .65s
    &:nth-child(13)
      animation-delay: .7s

.entrance-page
  // height: 50%
  padding: 2px
  border: solid
  // border-width: var(--border-thickness)
  border-color: white

.text-glow
  animation: textPulse 2s ease-in-out 0s infinite normal !important
.text-glow-faster
  animation: textPulse .5s ease-in-out 0s infinite normal !important

@keyframes textPulse
  0%
    -webkit-text-shadow: 0 0 5px rgba(255, 255, 255, 0.75)
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.75)

  50%
    -webkit-text-shadow: 0 0 7px rgba(255, 255, 255, 0.8), 0 0 11px rgba(255, 255, 255, 0.8)
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.8), 0 0 11px rgba(255, 255, 255, 0.8)

  100%
    -webkit-text-shadow: 0 0 5px rgba(255, 255, 255, 0.75)
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.75)


@media only screen and (max-width: 600px)
  .entrance-page
    border-width: 0px

@media only screen and (min-width: 601px)
  .entrance-page
    border-width: 0px


.slide-in-blurred-bl
  -webkit-animation: slide-in-blurred-bl 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both
  animation: slide-in-blurred-bl 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both

@-webkit-keyframes slide-in-blurred-bl
  0%
    -webkit-transform: translate(-1000px, 1000px) skew(-80deg, -10deg)
    transform: translate(-1000px, 1000px) skew(-80deg, -10deg)
    -webkit-transform-origin: 100% 100%
    transform-origin: 100% 100%
    -webkit-filter: blur(40px)
    filter: blur(40px)
    opacity: 0

  100%
    -webkit-transform: translate(0, 0) skew(0deg, 0deg)
    transform: translate(0, 0) skew(0deg, 0deg)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1

@keyframes slide-in-blurred-bl
  0%
    -webkit-transform: translate(-1000px, 1000px) skew(-80deg, -10deg)
    transform: translate(-1000px, 1000px) skew(-80deg, -10deg)
    -webkit-transform-origin: 100% 100%
    transform-origin: 100% 100%
    -webkit-filter: blur(40px)
    filter: blur(40px)
    opacity: 0

  100%
    -webkit-transform: translate(0, 0) skew(0deg, 0deg)
    transform: translate(0, 0) skew(0deg, 0deg)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1

.slide-in-blurred-bottom
  -webkit-animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both

@-webkit-keyframes slide-in-blurred-bottom
  0%
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2)
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2)
    -webkit-transform-origin: 50% 100%
    transform-origin: 50% 100%
    -webkit-filter: blur(40px)
    filter: blur(40px)
    opacity: 0

  100%
    -webkit-transform: translateY(0) scaleY(1) scaleX(1)
    transform: translateY(0) scaleY(1) scaleX(1)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1

@keyframes slide-in-blurred-bottom
  0%
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2)
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2)
    -webkit-transform-origin: 50% 100%
    transform-origin: 50% 100%
    -webkit-filter: blur(40px)
    filter: blur(40px)
    opacity: 0

  100%
    -webkit-transform: translateY(0) scaleY(1) scaleX(1)
    transform: translateY(0) scaleY(1) scaleX(1)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1
</style>
