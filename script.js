// //          ANIMATION NAVBAR        //
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});


//              ANIMATION CONTENT       //
function scrollAppear() {
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear);


//          CONTENT         //
// function read_more_less() {
//     var dots = document.getElementById
// }

// function read_more_less() {
//     var dots = document.getElementById('dots');
//     var moretext = document.getElementById('more');
//     var mybtn = document.getElementById('mybtn');

//     if (dots.style.display === 'none') {
//         dots.style.display = 'inline';
//         moretext.style.display = 'none';
//         mybtn.innerHTML = "Read more";
//     } else {
//         dots.style.display = "none";
//         moretext.style.display = "inline";
//         mybtn.innerHTML = "Read less";
//     }
// }

//              CREATE CONTACT FORM         //
$(document).ready(function () {
    $('.submit').click(function(event) {
        console.log('Clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusEmail = $('.status-email')
        statusEmail.empty()
        
        var statusFullName = $('.status-fullname')
        statusFullName.empty()
        
        var statusMessage = $('.status-message')
        statusMessage.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusEmail.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusEmail.append('<div style="color: red;">Email is not valid!</div>')
        }

        if(subject.length >= 7 ) {
            statusFullName.append('<div>Name is valid</div>')
        } else {
            event.preventDefault()
            statusFullName.append('<div style="color: red;">Please enter your full name!</div>')
        }

        if(message.length >= 40) {
            statusMessage.append('<div>message is valid</div>')
        } else {
            event.preventDefault()
            statusMessage.append('<div style="color: red;">Write your complaints clearly!</div>')
        }
    })
})