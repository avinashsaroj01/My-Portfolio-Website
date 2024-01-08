/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//Email js
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Replace the following placeholders with your actual values
        const emailJsUserId = "k8gDO4DcnhhOxgoyL";
        const emailServiceId = "service_gms0bfe";
        const templateId = "template_bfdn4q3";

        // Prepare the data to be sent to EmailJS
        const formData = new FormData(contactForm);
        const data = {};

        formData.forEach((value, key) => {
            data[`user_${key}`] = value; // Prefix keys with 'user_' to match placeholders
        });

        // Additional data (if needed)
        data["user_id"] = emailJsUserId; // Add user ID to the data

        // Send the email using EmailJS
        emailjs.send(emailServiceId, templateId, data)
            .then(function (response) {
                console.log("Email sent successfully:", response);

                // Show the success popup message
                showPopupMessage("Your Message is sent Successfully ✅");

                // Reset the form
                contactForm.reset();
            })
            .catch(function (error) {
                console.log("Email failed to send:", error);
            });
    });

   function showPopupMessage(message) {
    // Display the popup message
    var popupMessage = document.getElementById("popupMessage");
    popupMessage.innerHTML = message;

    // Add the 'show' class to trigger the transition
    popupMessage.classList.add('show');

    // Hide the popup after 2 seconds
    setTimeout(function () {
        // Remove the 'show' class to hide the popup
        popupMessage.classList.remove('show');
    }, 2000);
}

    

  
});
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 
