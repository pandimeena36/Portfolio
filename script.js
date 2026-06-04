// Typing Effect

const text =
"Data Analyst | Power BI Developer | SQL Analyst";

let i = 0;

function typing(){

    if(i < text.length){

        document.querySelector(".typing-text")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);
    }
}

document.querySelector(".typing-text").innerHTML="";
typing();

// Counter Animation

const counters =
document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

let start=0;

const target=
parseInt(counter.innerText);

const update=()=>{

if(start < target){

start++;

counter.innerText=start+"+";

requestAnimationFrame(update);

}
};

update();

});

// Scroll Reveal

const reveals =
document.querySelectorAll(
".glass,.project-card,.skill-card"
);

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top=
item.getBoundingClientRect().top;

if(top < window.innerHeight-100){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

});

// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Thank you! Your message has been sent."
);

this.reset();

});
/* ==========================
   TYPING EFFECT
========================== */

const roles = [
    "Data Analyst",
    "Power BI Developer",
    "Python Analyst",
    "Dashboard Designer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.querySelector(".typing-text");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
        currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
        currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

if (typingText) {
    typeEffect();
}

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

/* ==========================
   REVEAL ANIMATION
========================== */

const revealElements =
document.querySelectorAll(
".glass, .project-card, .skill-box"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

/* ==========================
   STATS COUNTER
========================== */

const counters =
document.querySelectorAll(".counter");

const speed = 150;

counters.forEach(counter => {

    const updateCount = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / speed;

        if (count < target) {

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCount, 20);

        } else {

            counter.innerText = target;
        }
    };

    updateCount();

});

/* ==========================
   CONTACT FORM
========================== */

const form =
document.querySelector("form");

if(form){

form.addEventListener(
"submit",
function(e){

    e.preventDefault();

    alert(
    "✅ Thank you! Your message has been sent."
    );

    form.reset();

});
}

/* ==========================
   FOOTER YEAR
========================== */

const year =
document.getElementById("year");

if(year){

year.textContent =
new Date().getFullYear();

}

<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

<script>
(function(){
    emailjs.init("s0yPx41ZGO7OTPQEC"); // replace here
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        "Meena_1707",
        "template_q6kq6jk",
        this
    ).then(function(){
        alert("Message sent successfully!");
    }, function(error){
        alert("Failed to send message!");
        console.log(error);
    });

    this.reset();
});
</script>
