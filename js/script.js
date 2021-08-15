const headingTwo = document.querySelector('h2');
headingTwo.style.color = '#FF4791';

const sectionTitle = document.getElementById('section-title');
sectionTitle.style.backgroundColor = 'lightgrey';


// card
// const pandaCard = document.getElementsByClassName('panda-card');
// for (const single of pandaCard) {
//     single.style.border = '1px solid #FF4791';
// }

const pandaCard = document.querySelectorAll('.panda-card');
for (const single of pandaCard) {
    single.style.border = '1px solid #FF4791';
}

// submit button --> type exactly email to enable button
const submitButton = document.getElementById('submit-btn');
document.getElementById('floatingInput').addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', true);
    }
});

// remove button
const button = document.getElementsByClassName('panda-buy-now-btn');
for (const single of button) {
    single.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// subscribe --> change background
document.getElementById('subscribe').addEventListener('dblclick', function () {
    document.getElementById('subscribe').style.backgroundColor = '#6495ED';
    // document.getElementById('subscribe').style.color = 'white';
})

// image change
document.getElementById('single-img').addEventListener('click', function () {
    document.getElementById('single-img').src = 'images/bags/bag-3.png';
})