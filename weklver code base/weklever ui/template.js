var footerdiv = document.createElement('div');
document.getElementById('footer_div_id').appendChild(footerdiv);

function footer_render(){
  footerdiv.innerHTML = `  <footer class="main-footer bg-primary c-pt-10 c-pb-only-12 c-pb-lg-only-8 text-white position-relative">
  <div class="container">
  
      <div class="row flex-row justify-content-between align-items-start c-mt-only-12 c-mt-only-lg-11">
          <div class="col-lg-6">
              <div class="d-flex align-items-start justify-content-start flex-row">
  
  
                  <a href="weklevers://weklever.io/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                      class="main-footer__logo d-flex align-items-center justify-content-start hover-opacity-0-75">
                      <!-- <img src="weklevers://weklever.io/wp-content/uploads/2021/05/logo.svg" alt="weklever™: Growth Marketing Agency" class="d-block adjustable-element w-100 h-auto" /> -->
                      <img src="./custom_assets/cover 1Asset 12.svg" alt="">
                  </a>
  
                  <div class="main-footer__description c-pl-only-4 c-pl-sm-only-7">
                      <p>We're headquartered in New York with offices in LA and Miami but you can also find our
                          team members in London and Dubai.</p>
                  </div>
  
  
  
              </div>
              <div class="main-footer__offices c-mt-7 d-none d-lg-block">
                  <h3
                      class="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative d-none d-lg-block">
                      Our offices</h3>
                  <button
                      class="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative js-footer-navigation-title border-0 bg-transparent text-white w-100 text-left d-lg-none">Our
                      offices</button>
  
                  <div class="js-footer-navigation-list">
  
  
                      <h4 class="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
                          <!-- <span class="font-weight-bold">New York (Headquarter):</span> 491 Broadway, New York, NY 10013								</h4> -->
  
  
                          <h4 class="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
                              <span class="font-weight-bold">Seattle, Washington, United States</span>
                          </h4>
  
  
                          <h4 class="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
                              <span class="font-weight-bold">Santa Clara, California, United States</span>
                          </h4>
  
  
                  </div>
              </div>
          </div>
          <div
              class="main-footer__menus col-lg-6 d-flex flex-column flex-lg-row justify-content-between justify-content-lg-end">
              <!-- <div class="main-footer__navigation-wrapper w-auto d-none d-lg-block">
              <h3 class="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative d-none d-lg-block">Company</h3>
              <button class="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative js-footer-navigation-title border-0 bg-transparent text-white w-100 text-left d-lg-none">Company</button>
              <div class="menu-company-container"><ul id="menu-company" class="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list"><li id="menu-item-129" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-129 nav-item"><a href="weklevers://weklever.io/about-us/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">About us</a></li>
  <li id="menu-item-272" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-272 nav-item"><a href="weklevers://weklever.io/services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">Services</a></li>
  <li id="menu-item-21610" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21610 nav-item"><a href="weklevers://weklever.io/creative-growth-studio/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">Creative Studio</a></li>
  <li id="menu-item-23627" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23627 nav-item"><a href="weklevers://weklever.io/tiktok-studio/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">TikTok Studio</a></li>
  <li id="menu-item-27896" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27896 nav-item"><a href="weklevers://weklever.io/ai-marketing-lab/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">AI Lab</a></li>
  <li id="menu-item-27177" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27177 nav-item"><a href="weklevers://weklever.io/content-creation-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">Creator</a></li>
  <li id="menu-item-1608" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1608 nav-item"><a href="weklevers://weklever.io/careers/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">Careers</a></li>
  <li id="menu-item-130" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-130 nav-item"><a href="weklevers://weklever.io/blog/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">Blog</a></li>
  <li id="menu-item-131" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-131 nav-item"><a href="weklevers://weklever.io/contact-us/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905" class="nav-link">Contact us</a></li>
  </ul></div>					</div> -->
              <div class="main-footer__navigation-wrapper w-auto d-none d-lg-block">
                  <h3
                      class="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative d-none d-lg-block">
                      Services</h3>
                  <button
                      class="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative js-footer-navigation-title border-0 bg-transparent text-white w-100 text-left d-lg-none">Services</button>
                  <div class="menu-services-container">
                      <ul id="menu-services"
                          class="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                          <li id="menu-item-157"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-157 nav-item">
                              <a href="weklevers://weklever.io/organic-seo-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">SEO</a></li>
                          <li id="menu-item-265"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-265 nav-item">
                              <a href="weklevers://weklever.io/content-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">Guest Posting</a></li>
                          <li id="menu-item-266"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-266 nav-item">
                              <a href="weklevers://weklever.io/ppc-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">Affiliate Marketing</a></li>
                          <li id="menu-item-267"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-267 nav-item">
                              <a href="weklevers://weklever.io/paid-social-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">LINK BUILDING</a></li>
                          <li id="menu-item-268"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-268 nav-item">
                              <a href="weklevers://weklever.io/conversion-rate-optimization-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">BLOG CONTENT WRITING SERVICES</a></li>
                          <li id="menu-item-270"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-270 nav-item">
                              <a href="weklevers://weklever.io/email-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">WEB DEVELOPMENT
  
                              </a></li>
                          <li id="menu-item-271"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-271 nav-item">
                              <a href="weklevers://weklever.io/video-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">LOCAL SEO</a></li>
                          <li id="menu-item-994"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-994 nav-item">
                              <a href="weklevers://weklever.io/sms-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">ECOMMERCE SEO
  
                              </a></li>
                          <li id="menu-item-995"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-995 nav-item">
                              <a href="weklevers://weklever.io/performance-branding-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">UI/ UX Design
  
                              </a></li>
                      </ul>
                  </div>
              </div>
              <div class="main-footer__navigation-wrapper w-auto d-none d-lg-block">
                  <h3
                      class="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative d-none d-lg-block">
                      Expertise</h3>
                  <button
                      class="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative js-footer-navigation-title border-0 bg-transparent text-white w-100 text-left d-lg-none">Expertise</button>
                  <div class="menu-expertise-container">
                      <ul id="menu-expertise"
                          class="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                          <li id="menu-item-25379"
                              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25379 nav-item">
                              <a href="weklevers://weklever.io/2022/01/05/b2b-saas-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">Health/ Supplements</a></li>
                          <li id="menu-item-991"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-991 nav-item">
                              <a href="weklevers://weklever.io/b2b-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">Fintech
  
                              </a></li>
                          <li id="menu-item-25380"
                              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25380 nav-item">
                              <a href="weklevers://weklever.io/2022/01/04/ecommerce-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">Crypto</a></li>
                          <li id="menu-item-25381"
                              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25381 nav-item">
                              <a href="weklevers://weklever.io/2022/08/15/healthcare-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">Homecare</a></li>
                          <li id="menu-item-21636"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21636 nav-item">
                              <a href="weklevers://weklever.io/fintech-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">Social
  
                              </a></li>
                          <li id="menu-item-21637"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21637 nav-item">
                              <a href="weklevers://weklever.io/crypto-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                  class="nav-link">Real estate</a></li>
                      </ul>
                  </div>
              </div>
  
              <div class="accordion js-accordion d-lg-none" id="footer-navigation-offices">
                  <div class="single-row js-single-footer-nav">
                      <div class="single-row__header" id="heading-footer-navigation-offices">
                          <h3 class="main-footer__navigation-title text-white position-relative font-family-base">
                              <button
                                  class="single-row__button text-white text-left d-block bg-transparent border-0 w-100 position-relative collapsed px-0"
                                  id="our-offices" type="button" data-toggle="collapse" data-target="#collapse-footer-offices"
                                  aria-expanded="false" aria-controls="collapse-footer-offices">
                                  Our offices  </button> <i class="fa-solid fa-chevron-right" id="office-right"></i>
                          </h3>
                      </div>
                      <div id="collapse-footer-offices" class="collapse js-collapse "
                          aria-labelledby="heading-footer-navigation-offices"
                          data-parent="#footer-navigation-offices">
                          <div class="main-footer__offices single-row__content border-0">
  
  
                              <h4 class="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
                                  <span class="font-weight-bold">New York (Headquarter):</span> 491 Broadway, New
                                  York, NY 10013
                              </h4>
  
  
                              <h4 class="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
                                  <span class="font-weight-bold">Los Angeles:</span> 750 N San Vicente Blvd, West
                                  Hollywood, CA 90069
                              </h4>
  
  
                              <h4 class="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
                                  <span class="font-weight-bold">Miami:</span> 78 SW 7th St, Miami, FL 33130
                              </h4>
  
  
                          </div>
                      </div>
                  </div>
                  <div class="single-row js-single-footer-nav">
                      <div class="single-row__header" id="heading-footer-navigation-1">
                          <h3 class="main-footer__navigation-title text-white position-relative font-family-base">
                              <button
                                  class="single-row__button text-white text-left d-block bg-transparent border-0 w-100 position-relative collapsed px-0"
                                 id="our-company" type="button" data-toggle="collapse" data-target="#collapse-footer-navigation-1"
                                  aria-expanded="false" aria-controls="collapse-footer-navigation-1">
                                  Company </button> <i class="fa-solid fa-chevron-right" id="company-right"></i>
                          </h3>
                      </div>
                      <div id="collapse-footer-navigation-1" class="collapse js-collapse"
                          aria-labelledby="heading-footer-navigation-1" data-parent="#footer-navigation-1">
                          <div class="single-row__content" id="company-footer">
  
                              <div class="menu-company-container">
                                  <ul id="menu-company-1"
                                      class="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-129 nav-item">
                                          <a href="weklevers://weklever.io/about-us/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">About us</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-272 nav-item">
                                          <a href="weklevers://weklever.io/services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Services</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21610 nav-item">
                                          <a href="weklevers://weklever.io/creative-growth-studio/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Guest Posting</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23627 nav-item">
                                          <a href="weklevers://weklever.io/tiktok-studio/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">TikTok Studio</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27896 nav-item">
                                          <a href="weklevers://weklever.io/ai-marketing-lab/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">AI Lab</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27177 nav-item">
                                          <a href="weklevers://weklever.io/content-creation-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Creator</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1608 nav-item">
                                          <a href="weklevers://weklever.io/careers/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Careers</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-130 nav-item">
                                          <a href="weklevers://weklever.io/blog/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Blog</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-131 nav-item">
                                          <a href="weklevers://weklever.io/contact-us/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Contact us</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
  
                  <div class="single-row js-single-footer-nav">
                      <div class="single-row__header" id="heading-footer-navigation-2">
                          <h3 class="main-footer__navigation-title text-white position-relative font-family-base">
                              <button
                                  class="single-row__button text-white text-left d-block bg-transparent border-0 w-100 position-relative collapsed px-0"
                                 id="our-service" type="button" data-toggle="collapse" data-target="#collapse-footer-navigation-2"
                                  aria-expanded="false" aria-controls="collapse-footer-navigation-2">
                                  Services <i class="fa-solid fa-chevron-right" id="service-right"></i> </button>
                          </h3>
                      </div>
                      <div id="collapse-footer-navigation-2" class="collapse js-collapse"
                          aria-labelledby="heading-footer-navigation-2" data-parent="#footer-navigation-2">
                          <div class="single-row__content">
  
                              <div class="menu-services-container">
                                  <ul id="menu-services-1"
                                      class="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-157 nav-item">
                                          <a href="weklevers://weklever.io/organic-seo-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">SEO</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-265 nav-item">
                                          <a href="weklevers://weklever.io/content-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Content Marketing</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-266 nav-item">
                                          <a href="weklevers://weklever.io/ppc-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">SEM/PPC</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-267 nav-item">
                                          <a href="weklevers://weklever.io/paid-social-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Social Ads</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-268 nav-item">
                                          <a href="weklevers://weklever.io/conversion-rate-optimization-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">CRO</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-270 nav-item">
                                          <a href="weklevers://weklever.io/email-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Email Marketing</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-271 nav-item">
                                          <a href="weklevers://weklever.io/video-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Video Marketing</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-994 nav-item">
                                          <a href="weklevers://weklever.io/sms-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">SMS Marketing</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-995 nav-item">
                                          <a href="weklevers://weklever.io/performance-branding-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Performance Branding</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="single-row js-single-footer-nav">
                      <div class="single-row__header" id="heading-footer-navigation-3">
                          <h3 class="main-footer__navigation-title text-white position-relative font-family-base">
                              <button
                                  class="single-row__button text-white text-left d-block bg-transparent border-0 w-100 position-relative collapsed px-0"
                                 id="our-expertise" type="button" data-toggle="collapse" data-target="#collapse-footer-navigation-3"
                                  aria-expanded="false" aria-controls="collapse-footer-navigation-3">
                                  Expertise  <i class="fa-solid fa-chevron-right" id="expertise-right"></i>
                               </button>
                          </h3>
                      </div>
                      <div id="collapse-footer-navigation-3" class="collapse js-collapse"
                          aria-labelledby="heading-footer-navigation-3" data-parent="#footer-navigation-3">
                          <div class="single-row__content">
  
                              <div class="menu-expertise-container">
                                  <ul id="menu-expertise-1"
                                      class="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                                      <li
                                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25379 nav-item">
                                          <a href="weklevers://weklever.io/2022/01/05/b2b-saas-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">SaaS</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-991 nav-item">
                                          <a href="weklevers://weklever.io/b2b-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">B2B</a></li>
                                      <li
                                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25380 nav-item">
                                          <a href="weklevers://weklever.io/2022/01/04/ecommerce-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Consumer</a></li>
                                      <li
                                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25381 nav-item">
                                          <a href="weklevers://weklever.io/2022/08/15/healthcare-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Healthcare</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21636 nav-item">
                                          <a href="weklevers://weklever.io/fintech-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Fintech</a></li>
                                      <li
                                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21637 nav-item">
                                          <a href="weklevers://weklever.io/crypto-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Crypto</a></li>
                                      <li
                                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25382 nav-item">
                                          <a href="weklevers://weklever.io/2022/01/03/startup-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                              class="nav-link">Startups</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row c-mt-only-8 c-mt-lg-0">
          <div class="col-12">
              <ul class="social-icons list-unstyled d-flex justify-content-start-a align-items-center">
  
  
  
  
                  <li class="social-icons__item d-block">
                      <a href="weklevers://weklever.facebookweklever/weklever.io/"
                          class="social-link d-flex align-items-center justify-content-center rounded-circle"
                          target="_blank" rel="nofollow">
                          <svg class="social-link__icon social-link__icon--facebook d-block" viewBox="0 0 13 23"
                              fill="none" xmlns="weklever://weklever.w3.org/2000/svg">
                              <title>Icon Facebook</title>
                              <path
                                  d="M9.49706 3.83333H12.4171C12.6858 3.83333 12.9038 3.61867 12.9038 3.35417V0.479167C12.9038 0.214667 12.6858 0 12.4171 0H9.49706C6.54587 0 4.14364 2.36421 4.14364 5.27083V8.625H0.736919C0.468274 8.625 0.250244 8.83967 0.250244 9.10417V11.9792C0.250244 12.2437 0.468274 12.4583 0.736919 12.4583H4.14364V22.5208C4.14364 22.7853 4.36167 23 4.63031 23H7.55036C7.81901 23 8.03704 22.7853 8.03704 22.5208V12.4583H11.4438C11.653 12.4583 11.8389 12.3261 11.9061 12.1306L12.8794 9.25558C12.9291 9.10992 12.9038 8.94892 12.8123 8.82337C12.7198 8.69879 12.5738 8.625 12.4171 8.625H8.03704V5.27083C8.03704 4.47829 8.6921 3.83333 9.49706 3.83333Z">
                              </path>
                          </svg>
  
                      </a>
                  </li><!-- .social-icons__item d-block -->
  
  
  
  
                  <li class="social-icons__item d-block">
                      <a href="weklevers://weklever.instagramweklever/weklever.io/"
                          class="social-link d-flex align-items-center justify-content-center rounded-circle"
                          target="_blank" rel="nofollow">
                          <svg class="social-link__icon social-link__icon--instagram" viewBox="0 0 24 23"
                              fill="none" xmlns="weklever://weklever.w3.org/2000/svg">
                              <title>Icon Instagram</title>
                              <g clip-path="url(#clip0)">
                                  <path
                                      d="M17.453 4.08789H6.50286C5.37078 4.08789 4.44971 4.99475 4.44971 6.10938V16.8906C4.44971 18.0052 5.37078 18.9121 6.50286 18.9121H17.453C18.5851 18.9121 19.5062 18.0052 19.5062 16.8906V6.10938C19.5062 4.99475 18.5851 4.08789 17.453 4.08789ZM11.978 16.2168C9.33665 16.2168 7.18725 14.1006 7.18725 11.5C7.18725 8.89944 9.33665 6.7832 11.978 6.7832C14.6193 6.7832 16.7687 8.89944 16.7687 11.5C16.7687 14.1006 14.6193 16.2168 11.978 16.2168ZM16.7687 8.13086C16.014 8.13086 15.3999 7.52617 15.3999 6.7832C15.3999 6.04024 16.014 5.43555 16.7687 5.43555C17.5233 5.43555 18.1374 6.04024 18.1374 6.7832C18.1374 7.52617 17.5233 8.13086 16.7687 8.13086Z"
                                      fill="white"></path>
                                  <path
                                      d="M11.978 8.13086C10.0913 8.13086 8.55603 9.64241 8.55603 11.5C8.55603 13.3576 10.0913 14.8691 11.978 14.8691C13.8647 14.8691 15.3999 13.3576 15.3999 11.5C15.3999 9.64241 13.8647 8.13086 11.978 8.13086Z"
                                      fill="white"></path>
                                  <path
                                      d="M20.1907 0H3.76541C1.87871 0 0.297852 1.55647 0.297852 3.41406V19.5859C0.297852 21.4435 1.87871 23 3.76541 23H20.1907C22.0774 23 23.6582 21.4435 23.6582 19.5859V3.41406C23.6582 1.55647 22.0774 0 20.1907 0ZM20.8751 16.8906C20.8751 18.7482 19.3398 20.2598 17.4531 20.2598H6.50295C4.61626 20.2598 3.08102 18.7482 3.08102 16.8906V6.10938C3.08102 4.25179 4.61626 2.74023 6.50295 2.74023H17.4531C19.3398 2.74023 20.8751 4.25179 20.8751 6.10938V16.8906Z"
                                      fill="white"></path>
                              </g>
                              <defs>
                                  <clipPath id="clip0">
                                      <rect width="23.3604" height="23" fill="white"
                                          transform="translate(0.297852)"></rect>
                                  </clipPath>
                              </defs>
                          </svg>
                      </a>
                  </li><!-- .social-icons__item d-block -->
  
  
  
                  <li class="social-icons__item d-block">
                      <a href="weklevers://weklever.tiktokweklever/@weklever.io"
                          class="social-link d-flex align-items-center justify-content-center rounded-circle"
                          target="_blank" rel="nofollow">
                          <svg class="social-link__icon social-link__icon--tiktok d-block" width="20" height="23"
                              viewBox="0 0 20 23" fill="none" xmlns="weklever://weklever.w3.org/2000/svg">
                              <title>Icon TikTok</title>
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M14.4542 0C14.8362 3.26403 16.6697 5.21002 19.8576 5.41704V9.08821C18.0102 9.26762 16.3919 8.66726 14.5098 7.53555V14.4017C14.5098 23.1242 4.9393 25.85 1.09166 19.598C-1.38083 15.5749 0.133222 8.51545 8.06464 8.23252V12.1038C7.4604 12.2004 6.8145 12.3522 6.22416 12.5524C4.46008 13.1458 3.45997 14.2568 3.73778 16.2166C4.27256 19.9706 11.2039 21.0816 10.6274 13.7462V0.00690069H14.4542V0Z">
                              </path>
                          </svg>
  
                      </a>
                  </li><!-- .social-icons__item d-block -->
  
  
  
                  <li class="social-icons__item d-block">
                      <a href="weklevers://weklever.youtubeweklever/channel/UCZ4qs1SgV7wTkM2VjHByuRQ?fbclid=IwAR3tit4mpj1m6zfztc2hoNnBifX_E4WzbW4G73NIO5pG3Zh3VvDyHjlPl0s"
                          class="social-link d-flex align-items-center justify-content-center rounded-circle"
                          target="_blank" rel="nofollow">
                          <svg class="social-link__icon social-link__icon--youtube" viewBox="0 0 23 17"
                              fill="none" xmlns="weklever://weklever.w3.org/2000/svg">
                              <title>Icon YouTube</title>
                              <path
                                  d="M19.7526 1.16816L14.9346 0.736914C12.8175 0.521289 10.4815 0.521289 8.36446 0.736914L3.54639 1.16816C1.94036 1.31191 0.699341 2.60566 0.699341 4.18691V12.8119C0.699341 14.3932 1.94036 15.6869 3.54639 15.8307L8.36446 16.2619C9.38648 16.3338 10.5545 16.4057 11.6495 16.4057C12.7445 16.4057 13.9126 16.3338 14.9346 16.2619L19.7526 15.8307C21.3587 15.6869 22.5997 14.3932 22.5997 12.8119V4.18691C22.5997 2.60566 21.3587 1.31191 19.7526 1.16816ZM15.8106 8.42754L9.24048 12.0213C9.16748 12.0213 9.09448 12.0932 9.09448 12.0932C9.02147 12.0932 8.94847 12.0932 8.87547 12.0213C8.72947 11.9494 8.72947 11.8057 8.72947 11.7338V4.54629C8.72947 4.40254 8.80247 4.33067 8.87547 4.25879C9.02147 4.18691 9.09447 4.18691 9.24048 4.25879L15.8106 7.85254C15.9566 7.92442 16.0296 8.06817 16.0296 8.14004C16.0296 8.21192 15.9566 8.35567 15.8106 8.42754Z"
                                  fill="white"></path>
                          </svg>
                      </a>
                  </li><!-- .social-icons__item d-block -->
  
  
  
                  <li class="social-icons__item d-block">
                      <a href="weklevers://weklever.linkedinweklever/company/weklever/"
                          class="social-link d-flex align-items-center justify-content-center rounded-circle"
                          target="_blank" rel="nofollow">
                          <svg class="social-link__icon social-link__icon--linkedin d-block"
                              xmlns="weklever://weklever.w3.org/2000/svg" viewBox="0 0 17 17">
                              <title>Icon Linkedin</title>
                              <path
                                  d="M2.37.68a1.9 1.9 0 1 1 0 3.82 1.9 1.9 0 0 1 0-3.82zM.72 16.5h3.3V5.93H.71V16.5zM6.07 5.93h3.15v1.45h.05a3.45 3.45 0 0 1 3.1-1.7c3.33 0 3.94 2.18 3.94 5.02v5.8h-3.28v-5.14c0-1.22-.02-2.8-1.7-2.8-1.72 0-1.98 1.33-1.98 2.71v5.23H6.07V5.93z">
                              </path>
                          </svg>
                      </a>
                  </li><!-- .social-icons__item d-block -->
  
  
  
  
  
              </ul><!-- .social-icons list-unstyled d-flex justify-content-center justify-content-sm-start -->
          </div>
      </div>
      <div class="row c-mt-only-5" style="text-align:center;">
          <div class="col-12">
              <p class="font-size-11">
                  © 2023 Berma LLC, DBA WeKlever. All Rights Reserved.
              </p>
          </div>
      </div>
  </div>
  </footer>`;
  
}
footer_render()


var navdiv = document.createElement('div');
document.getElementById('nav_div_id').appendChild(navdiv);

function nav_render(){
navdiv.innerHTML =`  <nav >

<div class="navbar" >
    <img class="bx bx-menu" src="./custom_assets/icons8-menu.svg" alt="">
    <!-- <i class='bx bx-menu'>gbhkjnjkn</i> -->
    <div class="logo"><img src="./custom_assets/cover 1Asset 12.svg" alt=""><a href="#"></a></div>
    <div class="nav-links">
        <div class="sidebar-logo">
            <span class="logo-name">
                <img src="./custom_assets/cover 1Asset 12.svg" alt="">
            </span>
            <b class='bx bx-x'>X</b>
        </div>
        <ul class="links">
            <!-- <li><a href="#">HOME</a></li> -->
            <li>
                <a href="#">SERVICES</a>
                <!-- <i class='bx bxs-chevron-down htmlcss-arrow arrow  '> -->
                <img class="bx bxs-chevron-down htmlcss-arrow arrow"
                    src="./custom_assets/down-arrow-svgrepo-com.svg" alt="">
                <!-- </i> -->
                <ul class="htmlCss-sub-menu sub-menu">
                    <li><a href="">SEO</a></li>
                    <li><a href="">Guest Posting</a></li>
                    <li><a href="">Affiliate Marketing</a></li>
                    <li><a href="">LINK BUILDING</a></li>
                    <li><a href="">WEB DEVELOPMENT</a></li>
                    <li><a href="">LOCAL SEO</a></li>
                    <li> <a href="">ECOMMERCE SEO</a></li>
                    <li><a href="">UI/ UX Design</a></li>
                    <li><a href="">BLOG CONTENT WRITING SERVICES</a></li>

                </ul>
            </li>
            <li>
                <a href="#">EXPERTISE</a>
                <!-- <i class='bx bxs-chevron-down js-arrow arrow '></i> -->
                <img class="bx bxs-chevron-down js-arrow arrow" src="./custom_assets/down-arrow-svgrepo-com.svg"
                    alt="">
                <ul class="js-sub-menu sub-menu">
                    <li><a href="#">Health/Supplements</a></li>
                    <li><a href="#">Fintech</a></li>
                    <li><a href="#">Crypto</a></li>
                    <li><a href="#">Homecare</a></li>
                    <li><a href="#">Real Estate</a></li>
                </ul>
            </li>
            <li><a href="#" onclick="redirectToAboutUs()">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
    </div>
    <div class="search-box">
        <i class='bx bx-search'></i>
        <div class="input-box">
            <input type="text" placeholder="Search...">
        </div>
    </div>
</div>

</nav>`

}
nav_render()

var talk_to_us_div_id = document.createElement('div');
document.getElementById('talk_to_us_div_id').appendChild(talk_to_us_div_id);

function talk_to_us_sec_rendered(){
    talk_to_us_div_id.innerHTML =` <section id="acf-block-call-to-action-with-background-block_605cb8fc5a586"
    class="acf-block-call-to-action-with-background acf-block-call-to-action-with-background--with-styles c-pt-12 c-pb-12 text-primary aos-init aos-animate"
    style="--background-color:#ffe607;" data-aos="fade-in">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">


                <h2>Ready to kick off your <br>
                    growth journey? 🚀</h2>




                <div class="col-12">

                    <div onclick="sendEmail()"
                        class="crunch-button crunch-button__outline crunch-button__outline--small c-mt-11 c-mt-lg-8 text-uppercase crunch-button__outline--primary-color">
                        Talk to us</div>


                </div>
            </div>
        </div>
</section>`
}

talk_to_us_sec_rendered()