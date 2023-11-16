// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll('nav a');
//     const mobileMenuToggle = document.getElementById('mobile-menu');
//     const nav = document.querySelector('nav');

//     mobileMenuToggle.addEventListener('click', function () {
//         nav.classList.toggle('show');
//     });

//     navLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             window.scrollTo({
//                 top: targetElement.offsetTop - 50,
//                 behavior: 'smooth'
//             });

//             if (nav.classList.contains('show')) {
//                 nav.classList.remove('show');
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll('nav a');
//     const mobileMenuToggle = document.getElementById('mobile-menu');
//     const nav = document.querySelector('nav');

//     console.log("upper")

//     mobileMenuToggle.addEventListener('click', function () {
//         nav.classList.toggle('show');
//     });

//     navLinks.forEach(link => {
//         console.log("clicking")
//         link.addEventListener('click', function (e) {

//             e.preventDefault();

//             console.log("click")

//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             // Calculate the offset based on the header height
//             const offset = 50; // Adjust this value as needed

//             // Use window.scrollTo for smooth scrolling
//             window.scrollTo({
//                 top: targetElement.offsetTop - offset,
//                 behavior: 'smooth'
//             });

//             if (nav.classList.contains('show')) {
//                 nav.classList.remove('show');
//             }
//         });
//     });
// })


// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll('nav a');
//     const mobileMenuToggle = document.getElementById('mobile-menu');
//     const nav = document.querySelector('nav');

//     console.log("DOMContentLoaded");

//     mobileMenuToggle.addEventListener('click', function () {
//         nav.classList.toggle('show');
//     });

//     navLinks.forEach(link => {
//         console.log("Adding click listener");
//         link.addEventListener('click', function (e) {
//             console.log("click");

//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             // Check if the target element exists
//             if (targetElement) {
//                 // Calculate the offset based on the header height
//                 const offset = 50; // Adjust this value as needed

//                 // Use window.scrollTo for smooth scrolling
//                 window.scrollTo({
//                     top: targetElement.offsetTop - offset,
//                     behavior: 'smooth'
//                 });

//                 if (nav.classList.contains('show')) {
//                     nav.classList.remove('show');
//                 }
//             } else {
//                 console.error(`Target element with ID ${targetId} not found`);
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    console.log("DOMContentLoaded");

    mobileMenuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
console.log(navLinks)
    navLinks.forEach(link => {
        console.log(link)
        link.onclick = function (e) {
            console.log("click");

            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Check if the target element exists
            if (targetElement) {
                // Calculate the offset based on the header height
                const offset = 50; // Adjust this value as needed

                // Use window.scrollTo for smooth scrolling
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });

                if (nav.classList.contains('show')) {
                    nav.classList.remove('show');
                }
            } else {
                console.error(`Target element with ID ${targetId} not found`);
            }
        };
    });
});