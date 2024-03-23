<template>
  <v-app dark
    :style="{ backgroundImage: 'url(@/assets/images/OIP.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: 0 }">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-carousel height="300" width="100%" :cycle="true">
            <v-carousel-item>
              <img src="@/assets/images/aaa.jpg" alt="Image 1" class="flex-shrink-0" width="100%" height="100%" object-fit="cover">
              <v-overlay>
                <v-container fluid>
                  <v-card-text class="text-center">
                    <div class="h1-container">
                        <span>DAMA</span>
                        <span>South Dakota</span>
                      </div>
                    <p :style="{ marginTop: '10px' }">The DAMA South Dakota Chapter is dedicated to providing education,
                      networking, and support to data management professionals in South Dakota.</p>
                  </v-card-text>
                </v-container>
              </v-overlay>
            </v-carousel-item>

            <v-carousel-item>
              <img src="@/assets/images/bhbh.jpg" alt="Image 1" class="flex-shrink-0" width="100%" height="100%" object-fit="cover">
              <v-overlay>
                <v-container fluid>
                  <v-card-text class="text-center">
                    <div class="h1-container">
                        <span>DAMA</span>
                        <span>South Dakota</span>
                      </div>
                    <p :style="{ marginTop: '10px' }">We are a welcoming and inclusive community. We welcome data management professionals of all levels of experience, from beginners to experts. We are also committed to diversity 
                      and inclusion, and we strive to create a community where everyone feels valued and respected.</p>
                  </v-card-text>
                </v-container>
              </v-overlay>
            </v-carousel-item>

            <v-carousel-item>
              <img src="@/assets/images/fish.jpg" alt="Image 1" class="flex-shrink-0" width="100%" height="100%" object-fit="cover">
              <v-overlay>
                <v-container fluid>
                  <v-card-text class="text-center">
                    <div class="h1-container">
                        <span>DAMA</span>
                        <span>South Dakota</span>
                      </div>
                    <p :style="{ marginTop: '10px' }">We are dedicated to helping each other succeed. 
                      We offer a variety of resources and events, including monthly meetings, educational workshops, and networking opportunities.</p>
                  </v-card-text>
                </v-container>
              </v-overlay>
            </v-carousel-item>
            <v-carousel-item>
              <img src="@/assets/images/sdsd.jpg" alt="Image 1" class="flex-shrink-0" width="100%" height="100%" object-fit="cover">
              <v-overlay>
                <v-container fluid>
                  <v-card-text class="text-center">
                    <div class="h1-container">
                        <span>DAMA</span>
                        <span>South Dakota</span>
                      </div>
                    <p :style="{ marginTop: '10px' }">A place where you can grow your career. We offer a variety of resources and support to help you achieve your professional goals. 
                      Whether you are just starting out in your career or you are looking to make a change, DAMA South Dakota can help you succeed.</p>
                  </v-card-text>
                </v-container>
              </v-overlay>
            </v-carousel-item>

          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card class="dama-wheel-card" :style="{ display: 'flex', flex: 1 }">
            <v-card-image width="100%">
              <img src="@/assets/images/dwheel.jpg" alt="DAMA wheel" width="100%" height="auto" object-fit="cover">
            </v-card-image>

            <v-card-text>
              <h1>DAMA Wheel</h1>
              <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management knowledge and
                skills required for data management professionals in 12 sections: Data Architecture, Data Governance &
                Quality, Data Security, Data Modeling & Design, Data Warehousing & Business Intelligence, Data Analytics,
                Data Integration, Data Stewardship, Data Engineering, Data Science,
                Data Ethics, Data Literacy, and Data Culture.</p>
              <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to assess
                one's current skills and knowledge, identify areas for improvement, and develop a plan for professional
                development.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

<v-row>
  <v-col cols="12">
    <v-card class="member-benefits">
      <v-card-title>Member Benefits</v-card-title>
      <v-card-text>If you are a data management professional in South Dakota, we encourage you to join DAMA South Dakota. 
        We are a community that is committed to helping each other succeed and to advancing the practice of data management. Sign up and lets have some fun.</v-card-text>
    </v-card>
  </v-col>
</v-row>

<v-row class="member-cards">
  <v-col cols="dynamicCol">
    <v-card>
      <v-card-title>Student</v-card-title>
      <v-card-text>
        <ul>
          <li>Discounted membership fees</li>
          <li>Access to student-only events and resources</li>
          <li>Mentorship opportunities from experienced professionals</li>
        </ul>
      </v-card-text>
      <v-card__actions>
        <div class="flex align-self-center">
          <v-btn color="red" type="submit" class="mx-auto">Sign Up</v-btn>
        </div>
      </v-card__actions>
    </v-card>
  </v-col>
  <v-col cols="dynamicCol">
    <v-card>
      <v-card-title>Personal</v-card-title>
      <v-card-text>
        <ul>
          <li>Access to all member benefits</li>
          <li>Networking opportunities with other data professionals</li>
          <li>Discounts on training and certification programs</li>
        </ul>
      </v-card-text>
      <v-card__actions>
        <div class="flex align-self-center">
          <v-btn color="red" type="submit" class="mx-auto">Sign Up</v-btn>
        </div>
      </v-card__actions>
    </v-card>
  </v-col>
  <v-col cols="dynamicCol">
    <v-card>
      <v-card-title>Business</v-card-title>
      <v-card-text>
        <ul>
          <li>All the benefits of a personal membership</li>
          <li>Group discounts for your team</li>
          <li>Access to exclusive business resources</li>
        </ul>
      </v-card-text>
      <v-card__actions>
        <div class="flex align-self-center">
          <v-btn color="red" type="submit" class="mx-auto">Sign Up</v-btn>
        </div>
      </v-card__actions>
    </v-card>
  </v-col>
  
</v-row>

      <v-row>
        <v-col cols="12">
          <v-card class="flex flex-wrap">
            <v-card-title>DAMA South Dakota Events</v-card-title>
            <v-card-text>DAMA South Dakota events are a great way to learn from and 
              connect with other data management professionals. We offer a variety of events throughout the year, including:</v-card-text>
              <v-card-text>
              <ul>
              <li>Monthly meetings: Our monthly meetings feature guest speakers on a variety of data management topics, as well as networking opportunities.</li>
              <li>Educational workshops: We offer educational workshops on a variety of data management topics, such as data governance, data quality, and data security.</li>
              <li>Networking events: We offer networking events throughout the year, so you can connect with other data management professionals in your area.</li>
            </ul>
          </v-card-text>
            <v-subheader>Upcoming Events</v-subheader>
            <v-calendar :events="eventList">
              <v-for="event in eventList" :key="event.name" :name="event.name" :start="event.start" :end="event.end"
                :location="event.location" :description="event.description" />
              <!-- <v-link :href="event.registerLink">Register</v-link> -->
              <template v-if="eventList.length === 0">
                <p>There are no upcoming events.</p>
              </template>
            </v-calendar>

          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card >
            <v-card-title>Meet The Board Members</v-card-title>
            <v-carousel height= "auto" width="100%" :cycle="true">

              <v-carousel-item>
                <v-card class = "board-card" :style="{ display: 'flex', flex: 1 }">
                  <v-card-image width="100%">
                    <img src="@/assets/images/face.jpg" alt="pres">
                  </v-card-image>
                  <v-card-text>
                    <h1>Chris Mahan</h1>
                    <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management
                      knowledge and skills required for data management professionals in 12 sections: Data Architecture,
                      Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business
                      Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science,
                      Data Ethics, Data Literacy, and Data Culture.</p>
                    <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to
                      assess one's current skills and knowledge, identify areas for improvement, and develop a plan for
                      professional development.
                    </p>
                  </v-card-text>
                </v-card>
              </v-carousel-item>

              <v-carousel-item>
                <v-card class = "board-card" :style="{ display: 'flex', flex: 1 }">
                  <v-card-image width="100%">
                    <img src="@/assets/images/face.jpg" alt="pres">
                  </v-card-image>
                  <v-card-text>
                    <h1>Chris Mahan</h1>
                    <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management
                      knowledge and skills required for data management professionals in 12 sections: Data Architecture,
                      Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business
                      Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science,
                      Data Ethics, Data Literacy, and Data Culture.</p>
                    <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to
                      assess one's current skills and knowledge, identify areas for improvement, and develop a plan for
                      professional development.
                    </p>
                  </v-card-text>
                </v-card>
              </v-carousel-item>

              <v-carousel-item>
                <v-card class = "board-card" :style="{ display: 'flex', flex: 1 }">
                  <v-card-image width="100%">
                    <img src="@/assets/images/face.jpg" alt="pres">
                  </v-card-image>
                  <v-card-text>
                    <h1>Chris Mahan</h1>
                    <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management
                      knowledge and skills required for data management professionals in 12 sections: Data Architecture,
                      Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business
                      Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science,
                      Data Ethics, Data Literacy, and Data Culture.</p>
                    <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to
                      assess one's current skills and knowledge, identify areas for improvement, and develop a plan for
                      professional development.
                    </p>
                  </v-card-text>
                </v-card>
              </v-carousel-item>

              <v-carousel-item>
                <v-card class = "board-card" :style="{ display: 'flex', flex: 1 }">
                  <v-card-image width="100%">
                    <img src="@/assets/images/face.jpg" alt="pres">
                  </v-card-image>
                  <v-card-text>
                    <h1>Chris Mahan</h1>
                    <p :style="{ marginTop: '20px' }">The DAMA Wheel is a model that describes the data management
                      knowledge and skills required for data management professionals in 12 sections: Data Architecture,
                      Data Governance & Quality, Data Security, Data Modeling & Design, Data Warehousing & Business
                      Intelligence, Data Analytics, Data Integration, Data Stewardship, Data Engineering, Data Science,
                      Data Ethics, Data Literacy, and Data Culture.</p>
                    <p>The DAMA Wheel is a valuable resource for data professionals of all levels, and it can be used to
                      assess one's current skills and knowledge, identify areas for improvement, and develop a plan for
                      professional development.
                    </p>
                  </v-card-text>
                </v-card>
              </v-carousel-item>

            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Become a Sponser</v-card-title>
            <v-card-text>
              <p>
                Sponsoring DAMA South Dakota is a wise investment for any business that wants to stay ahead of the curve in the ever-evolving world of data management. By supporting DAMA South Dakota, businesses gain access to a network of data professionals who are experts in their field. 
                These professionals can provide valuable insights and advice on best practices for data management, data governance, and data quality. In addition, sponsoring DAMA South Dakota gives businesses the opportunity to showcase their commitment to data excellence and to position themselves as leaders in the data management community.
              </p>
              <p>
                As a result, sponsoring DAMA South Dakota can help businesses to attract and retain top talent, to improve their data management practices, and to gain a competitive advantage in the marketplace.
              </p>
              <p>
                In addition to the benefits listed above, sponsoring DAMA South Dakota also gives businesses access to a pool of talented students who are eager to learn about the field of data management. Through DAMA South Dakota's student outreach programs, businesses can connect with students from local universities and colleges. 
                These students can be a valuable source of fresh ideas and perspectives, and they can also be a pipeline for future talent.
              </p>
              <p>
                By sponsoring DAMA South Dakota, businesses can invest in the future of the data management profession and gain access to the next generation of data professionals.
              </p>
            </v-card-text>
            <v-card-title>Sponsors</v-card-title>
            <v-carousel height="auto" width="100%" :cycle="true">

              <v-carousel-item>
                <v-card class = "sponser-card" :style="{ display: 'flex', flex: 1 }">
                  <v-card-image width="100%">
                    <img src="@/assets/images/Boen.png" alt="pres">
                  </v-card-image>
                  <v-card-text>
                    <h1>Boen and Associates</h1>
                    <p :style="{ marginTop: '20px' }">When you partner with Boen & Associates, Inc., you are buying much more than insurance—you are gaining access to innovative insurance solutions. In business since 1969, today we have a staff of over 
                      30 employees, including over 20 employees with advanced designations. </p>
                    <p>We provide a wealth of risk management solutions, including loss control and cost containment programs, safety-related communications and OSHA compliance tools. These value-added services enhance our commitment to strategic planning, expertise and technology. 
                      We’re confident our innovative solutions can benefit you, too!
                    </p>
                  </v-card-text>
                </v-card>
              </v-carousel-item>

              <v-carousel-item>
                <v-card class = "sponser-card" :style="{ display: 'flex', flex: 1 }">
                  <v-card-image width="100%">
                    <img src="@/assets/images/Nuwec.png" alt="pres">
                  </v-card-image>
                  <v-card-text>
                    <h1>Nuwec</h1>
                    <p :style="{ marginTop: '20px' }">
NUWEC is a data-driven data management and IT solutions business that helps businesses of all sizes succeed in the digital age. We provide our clients with the tools and expertise they need to manage their data effectively and efficiently, and to use their data to drive business growth. </p>
      
                  </v-card-text>
                </v-card>
              </v-carousel-item>

            </v-carousel>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </v-app>
</template>

<style>@import '@/assets/style.css';</style>

<script>
export default {
  name: 'CarouselExample',
  data() {
    return {
      eventList: [
        {
          name: 'DAMA International Conference',
          start: '2023-10-16T09:00:00',
          end: '2023-10-18T17:00:00',
          location: 'Las Vegas, NV',
          description: 'The DAMA International Conference is the world\'s largest gathering of data management professionals.'
        },
        {
          name: 'DAMA SD Chapter Meeting',
          start: '2023-10-19T18:00:00',
          end: '2023-10-21T20:00:00',
          location: 'Houston, TX',
          description: 'The DAMA Houston Chapter Meeting is a monthly meeting for data management professionals in the Houston area.'
        }
      ]

    }
  }
}
</script>
