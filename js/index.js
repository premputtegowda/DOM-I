const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// Update nav menu items
const menu_Items = document.querySelectorAll('nav a')
menu_Items[0].textContent = siteContent["nav"]["nav-item-1"]
menu_Items[1].textContent = siteContent["nav"]["nav-item-2"]
menu_Items[2].textContent = siteContent["nav"]["nav-item-3"]
menu_Items[3].textContent = siteContent["nav"]["nav-item-4"]
menu_Items[4].textContent = siteContent["nav"]["nav-item-5"]
menu_Items[5].textContent = siteContent["nav"]["nav-item-6"]

// update cta h1

const heading = document.querySelector('.cta h1')
heading.innerHTML = siteContent["cta"]["h1"];

const startButton = document.querySelector('.cta button')

startButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src',siteContent["cta"]["img-src"]);

const mainContentheadings = document.querySelectorAll('.top-content h4')

mainContentheadings[0].innerHTML = siteContent["main-content"]["features-h4"]
mainContentheadings[1].innerHTML = siteContent["main-content"]["about-h4"]

const mainContentParagraphs = document.querySelectorAll('.top-content p')

mainContentParagraphs[0].innerHTML = siteContent["main-content"]["features-content"]
mainContentParagraphs[1].innerHTML = siteContent["main-content"]["about-content"]

const middleImage = document.getElementById('middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];
//bottom content
//heading
const btmContentheadings = document.querySelectorAll('.bottom-content h4');

btmContentheadings[0].innerHTML = siteContent["main-content"]["services-h4"];
btmContentheadings[1].innerHTML = siteContent["main-content"]["product-h4"];

btmContentheadings[2].innerHTML = siteContent["main-content"]["vision-h4"];

//paragraph content

const btmContentParagraphs = document.querySelectorAll('.bottom-content p')

btmContentParagraphs[0].innerHTML = siteContent["main-content"]["services-content"];
btmContentParagraphs[1].innerHTML = siteContent["main-content"]["product-content"];
btmContentParagraphs[2].innerHTML = siteContent["main-content"]["vision-content"];

//contact section

const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent["contact"]["contact-h4"];

const contactDetails = document.querySelectorAll('.contact p');

contactDetails[0].textContent = siteContent["contact"]["address"]
contactDetails[1].textContent = siteContent["contact"]["phone"]
contactDetails[2].textContent = siteContent["contact"]["email"]

//footer

const footerContent = document.querySelector('footer p');

footerContent.textContent = siteContent["footer"]["copyright"]



// Add new content to nav
const navElement = document.querySelector('nav ');
const before = document.createElement('a');
const after = document.createElement('a');
after.href = '#';
before.href = '#';
before.textContent = 'Before';
after.textContent = 'After'
navElement.prepend(before);
navElement.append(after);

//update nav color
const menu_ItemsNew = document.querySelectorAll('nav a');
menu_ItemsNew.forEach(item => item.style.color = 'green');


//stretch goal 1

const header = document.querySelector('header');
header.style.backgroundColor = 'grey';

const textContentDiv = document.querySelectorAll('div.text-content');
textContentDiv.forEach(item => {
  item.style.border = '1px solid black';
  item.style.borderRadius = '5px';
  item.style.margin = '2px';
  item.style.padding= '5px'
})
