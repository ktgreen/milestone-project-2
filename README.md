# Citizen Eyewear

I am creating a website for a fashion-forward opticians in the town of Maltwell, called Citizen Eyewear. The company are looking to update their image so need a new website that shows what facilities they offer, in addition to offering all the information that a customer would need in order to make an appointment.

The website acts as a front page for the physical store in the town, and will be able to offer patients and potential future patients insights into the business, services, pricing, and location.

## UX

This website is for anyone looking to book an eye test or buy eyewear in the area local to Maltwell. It is a 'front page' for the shop in the town. It will provide information about the shop and will include a form for people to fill to contact reception. It will also include some tips for patients on how often they should be seeing an optometrist and why.

With this in mind, it has to be easy to navigate - the target audiences should be able to use the website to access the information they need. That means that the UX will be straightfoward and should follow normal conventions.

To acheive this in this project, I am using a framework, [Bootstrap 5.0](https://getbootstrap.com/), a toolkit that provides developers with a grid-based system, which is extremely adaptive with mobile-first design, as well as aiding with navigation and familiarity to the user using the basic components that can then be styled using CSS.

### Wireframes

To aid with UX, I created wireframes to plan where the content would go in the finished website.

Using wireframes helps when thinking about user stories and how a user might instinctually navigate through the website.

Using [Balsamiq](https://balsamiq.com/), I created mock images of what my website would look like, as below:

* Homepage:
![HomeWireframe](README-images/homepage-balsamiq.png)

* Team:
![TeamWireframe](README-images/team-balsamiq.png)

* Services:
![ServicesWireframe](README-images/services-balsamiq.png)

## User stories

The target audience for this webpage is an adult looking for information about a local eyewear shop.

These are some scenarios that a user may take when accessing the website:

#### A parent booking an eye test for their child
* I am a parent looking to book a first eye test for my child
* I want to find out who will be providing my child with the eye test
* I want information on where the premises is
* I want contact details to call reception to book an eye test

#### A patient prior going to their eye test
* I am a patient looking for further information on the company before going for my eye test
* I want to find out more about the professionals that work there and who to contact in case I can't make my appointment
* I want to feel reassured about my appointment with the information I find on the webpage

#### A patient looking for a specific service (contact lenses)
* I am a patient looking for a service, i.e. contact lenses
* I want to find out if the company offers contact lens appointments
* I want options to contact the company

## Features

### Existing Features (across all pages)
* Header - this is uniform across the site and houses the title/logo and the navbar
* Navbar - this allows users to navigate through the website easily
* Footer - this includes contact information that people would want access to (address/phone number) as well as some additional links to social media

### Features Within Pages

#### Colours - background, text, borders

I have chosen the colours for the webpage with the help of an online tool, [Coolors](https://coolors.co/) - I chose a main/base colour and generated a palette of complementary colours. I have made the palette simple, with only four colours, as I want to make sure the website looks sleek and not too busy with bright colours.

The colours I chose were: #2D3F62, #924F55, #FFA987 and #EFD8D2 (pictured below on the Coolors website:)

![Coolors](README-images/coolors.png)

#### Fonts

I am using the font catalogue from [Google Fonts](https://fonts.google.com/) and, to choose fonts that work well together, [Font Pair](https://fontpair.co/), a typography website.

The fonts I have chosen are [Raleway](https://fonts.google.com/specimen/Raleway) and [Montserrat](https://fonts.google.com/specimen/Montserrat).

#### Images
Images help to aid the user visually, so they are able to immediately identify the brand image, in this case, images on the Home page will be of glasses displays, and also images on the Team page of team members.

I chose to add borders to my images to bring together the colour scheme.

Media sources are listed at the end of this README in the Credits section

## Technologies Used 

* [Bootstrap 5.0](https://getbootstrap.com/)
    * The project uses Bootstrap as a framework on which to build the webpage - the grid-based system, using columns and rows, is optimised for use on mobile and desktops so is ideal for continuity across different pages of the same website
* [CSS](https://www.w3.org/TR/CSS/)
    * CSS is used to provide styling for both original HTML features and additional styling to Bootstrap
* [Google Fonts](https://fonts.google.com/)
    * An API that imports fonts that are more visually appealing than a browser's built-in fonts
* [Hover.css](https://ianlunn.github.io/Hover/#)
    * For the navbar, Hover.css is used to provide CSS3-powered responsive animation
* [Font Awesome](https://fontawesome.com/)
    * Font Awesome provides a library of fonts and icons, i.e. social media icons

## Testing

After general spellcheck and housekeeping within GitPod, my initial tests for the webpage were using [Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/new/), a common browser with facilities to also view the webpage in mobile resolutions using the developer tools

#### Testing Browsers and Resolutions

I also tested my webpage in [Google Chrome](https://www.google.com/intl/en_uk/chrome/), the most popular web browser, and [Safari](https://www.apple.com/uk/safari/)

This is how the homepage looked in

* Firefox (version 85.0):
![FirefoxHome](README-images/homepage-fs.png)
* Google Chrome (version 88.0.4324.150):
![ChromeHome](README-images/gc-home.png)
* Safari (version 14.0.1):
![Safari](README-images/safari-home.png)

Using developer tools, I also looked at how the website would look on different devices:

* iPhone X ('Home' page):
![iPhoneHome](README-images/home-iphone.png)
    * As you can see in this image, the logo image is no longer visible. I removed the logo image as on a mobile resolution, it occupied too much space in the header, often distorting the header padding, even when scaled down - unfortunately this was a bug I was unable to fix so I made the decision to remove it in the final design. This reiterates the importance of testing and ensuring that the website still looks good on smaller screens.
    * As well as the logo image, I also chose to remove one of the main images from the homepage, in order to ensure the site was eye-catching.
* iPad ('Services' page):
![iPadServices](README-images/services-ipad.png)
    * On an iPad, we can see that the site looks very similar to the full-sized desktop site, the padding at the edges has been reduced, this is thanks to Bootstrap and the responsive stylings that come with the framework.

#### Decision to Utilise Hover.css

After testing the site for a while, I noticed that the navbar could be difficult to use as the only indication that you were hovering over a link was the text colour changing - I decided to implement the use of Hover.css to improve UX by creating a box around the link when hovered over:

* Navbar with Hover.css; mousing over the 'Home' link creates a background to the text and changes the text colour:

![HovercssNavbar](README-images/navbar-hover.png)

#### User Stories

I tested all of my user stories as above within each browser.

In each case, I was able to find out the information I was looking for either from the homepage or by clicking the links in the navbar or the links within the introduction paragraphs on the homepage.

I have highlighted the links included on the Homepage in the screenshot below - each colour represents a page, links in the navbar are uniform across all three website pages.

* Yellow - links to Home page
* Green - links to Team page
* Purple - links to Services page

![HomepageLinks](README-images/home-links.png)

In the footer I also included a "tel:" link to the phone number, which will open the number in the native app for the device when clicked on, i.e. if clicked on using a phone, it will create a popup asking the user if they want to call the number. This is good UX as it is incredibly useful, as well as being intuitive. I tested this across devices and it worked as expected. It is shown on an iPhone below:

![TelLink](README-images/tel-phone.png)

#### Testing The Form 

I followed the guide on the Bootstrap library in order to create a form, which, in future implementations of the site, would notify the company that someone has contacted them for more information.

The required fields in the form are name and phone number. I chose to make the phone number the required field for contact option, as the company needs a way to get back in touch with the user. I also gave the user the option to provide an email address and a text box in case they want to provide more information about what they are querying.

In the example screenshot below, I have not completed the email address so it does not meet the standard and would result in a failure to send. I also haven't completed the required phone number. The box is surrounded by a red outline when it does not meet the requirements.

![ReqForm](README-images/form-req.png)

## Deployment

#### GitHub Pages

I followed the instructions on how to deploy to [GitHub Pages](https://pages.github.com/) from my GitHub account, which is where my website is currently deployed: [https://ktgreen.github.io/citizen-eyewear/](https://ktgreen.github.io/citizen-eyewear/)

After navigating to my repository, I clicked 'Settings' and then scrolled down until I found the settings for GitHub Pages. After choosing a source (I chose 'master') within this setting, it then deploys the page with the changes that have been pushed in Git to it's own page.

## Credits

#### Content 

All of the content on the site is written by me, however I did use some reference websites as the site is not based on an industry I am particularly familiar with. The websites I used for reference are:
 * [Specsavers](https://www.specsavers.co.uk/)
 * [Hammond Opticians](https://www.hammondopticians.co.uk/)

 #### Media

* I sourced my homepage images from [Pixabay](https://pixabay.com/photos/) which is an image-hosting site providing free images for personal and commercial use
* My logo image was obtained from [Free Logo Design](https://www.freelogodesign.org/) - an online tool that can be used to create logos for personal and commercial use
* For the team page, I used [Generated Photos](https://generated.photos/), which uses AI generation to create a range of faces which are free to use for personal use

#### Acknowledgements

 * [Code Institute](https://codeinstitute.net/)
 * [Bootstrap](https://getbootstrap.com/) - the Bootstrap grid and boilerplate code - grid system and pre-coded elements
 * [Google Fonts](https://fonts.google.com) - providing fonts
 * [Coolors](https://coolors.co/) - aiding in the creation of the palette for my website
 * [Hover.css](https://ianlunn.github.io/Hover/) - for navbar animation
 * [W3Schools](https://www.w3schools.com/) - easy-to-follow guidance on HTML and CSS
 * [Balsamiq](https://balsamiq.com/) - wireframe creation
 * [Font Awesome](https://fontawesome.com/) - social media icons
 * [Codepen - Sosuke](https://codepen.io/sosuke/pen/Pjoqqp) - provided CSS filters to change colour of logo image when hovering
 * [GitPod](https://gitpod.io/) - IDE providing development environment
 * [GitHub](https://github.com/) - internet hosting for software development