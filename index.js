let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let changableImage = document.getElementById("changableImage");
let project1 = document.getElementById("project1");
let project2 = document.getElementById("project2");
let project3 = document.getElementById("project3");
let pheading1 = document.getElementById("pheading1");
let pdescriptiion1 = document.getElementById("pdescriptiion1");
let pheading2 = document.getElementById("pheading2");
let pdescriptiion2 = document.getElementById("pdescriptiion2");
let pheading3 = document.getElementById("pheading3");
let pdescriptiion3 = document.getElementById("pdescriptiion3");
let wcuCard1 = document.getElementById("wcuCard1");
let wcuCard2 = document.getElementById("wcuCard2");
let wcuCard3 = document.getElementById("wcuCard3");
let wcuCard4 = document.getElementById("wcuCard4");

wcuCard1.addEventListener("mouseover", function() {
    wcuCard1.classList.toggle("shadow-lg");
});
wcuCard1.addEventListener("mouseout", function() {
    wcuCard1.classList.toggle("shadow-lg");
});

wcuCard2.addEventListener("mouseover", function() {
    wcuCard2.classList.toggle("shadow-lg");
});
wcuCard2.addEventListener("mouseout", function() {
    wcuCard2.classList.toggle("shadow-lg");
});

wcuCard3.addEventListener("mouseover", function() {
    wcuCard3.classList.toggle("shadow-lg");
});
wcuCard3.addEventListener("mouseout", function() {
    wcuCard3.classList.toggle("shadow-lg");
});

wcuCard4.addEventListener("mouseover", function() {
    wcuCard4.classList.toggle("shadow-lg");
});
wcuCard4.addEventListener("mouseout", function() {
    wcuCard4.classList.toggle("shadow-lg");
});



project1.addEventListener("click", function() {
    changableImage.src = "https://img.freepik.com/free-photo/front-view-fresh-red-strawberries-mellow-fruits-berries-inside-plate-dark-blue-surface-berry-fruit-mellow-summer_140725-39919.jpg?t=st=1717362584~exp=1717366184~hmac=373e0d1981037e8c5211b48ec999ec0e659c40a5c91b417e6ac504606153150c&w=740";
});
project2.addEventListener("click", function() {
    changableImage.src = "https://res.cloudinary.com/detqp9dxl/image/upload/v1717316959/image_oe28ow.png";
});
project3.addEventListener("click", function() {
    changableImage.src = "https://img.freepik.com/premium-photo/group-vegetables-top-view-with-aesthetic-arrangement-generative-ai_175880-2868.jpg";
});

project1.addEventListener("mouseover", function() {
    project1.classList.add("OP-bg-card");
    pheading1.classList.add("clr");
    pdescriptiion1.classList.add("clr");
    project2.classList.remove("OP-bg-card");
    pheading2.classList.remove("clr");
    pdescriptiion2.classList.remove("clr");
});

project1.addEventListener("mouseout", function() {
    project1.classList.remove("OP-bg-card");
    pheading1.classList.remove("clr");
    pdescriptiion1.classList.remove("clr");
});
project2.addEventListener("mouseover", function() {
    project2.classList.add("OP-bg-card");
    pheading2.classList.add("clr");
    pdescriptiion2.classList.add("clr");
});

project2.addEventListener("mouseout", function() {
    project2.classList.remove("OP-bg-card");
    pheading2.classList.remove("clr");
    pdescriptiion2.classList.remove("clr");
});

project3.addEventListener("mouseover", function() {
    project3.classList.add("OP-bg-card");
    pheading3.classList.add("clr");
    pdescriptiion3.classList.add("clr");
    project2.classList.remove("OP-bg-card");
    pheading2.classList.remove("clr");
    pdescriptiion2.classList.remove("clr");
});
project3.addEventListener("mouseout", function() {
    project3.classList.remove("OP-bg-card");
    pheading3.classList.remove("clr");
    pdescriptiion3.classList.remove("clr");
});


card1.addEventListener("mouseover", function() {
    card1.classList.toggle("shadow");
});
card1.addEventListener("mouseout", function() {
    card1.classList.toggle("shadow");
});

card2.addEventListener("mouseover", function() {
    card2.classList.toggle("shadow");
});
card2.addEventListener("mouseout", function() {
    card2.classList.toggle("shadow");
});

card3.addEventListener("mouseover", function() {
    card3.classList.toggle("shadow");
});
card3.addEventListener("mouseout", function() {
    card3.classList.toggle("shadow");
});

card4.addEventListener("mouseover", function() {
    card4.classList.toggle("shadow");
});
card4.addEventListener("mouseout", function() {
    card4.classList.toggle("shadow");
});

function clearPlaceholder() {
    let input = document.getElementById('emailEl');
    input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
    input.setAttribute('placeholder', '');

    let workMail = document.getElementById("workMail");
    workMail.classList.remove("d-none");
}

function restorePlaceholder() {
    let input = document.getElementById('emailEl');
    input.setAttribute('placeholder', input.getAttribute('data-placeholder'));

    let workMail = document.getElementById("workMail");
    if (input.value === "") {
        workMail.classList.add("d-none");
    } else {
        workMail.classList.remove("d-none");
    }
}


function placeholderNone() {
    let fnInput = document.getElementById('firstNamEl');
    fnInput.setAttribute('data-placeholder', fnInput.getAttribute('placeholder'));
    fnInput.setAttribute('placeholder', '');

    let firstName = document.getElementById("firstName");
    firstName.classList.remove("d-none");
}

function placeholderView() {
    let fnInput = document.getElementById('firstNamEl');
    fnInput.setAttribute('placeholder', fnInput.getAttribute('data-placeholder'));

    let firstName = document.getElementById("firstName");
    if (fnInput.value === "") {
        firstName.classList.add("d-none");
    } else {
        firstName.classList.remove("d-none");
    }
}

function nonePlaceholder() {
    let lnInput = document.getElementById('lastNameEl');
    lnInput.setAttribute('data-placeholder', lnInput.getAttribute('placeholder'));
    lnInput.setAttribute('placeholder', '');

    let lastName = document.getElementById("lastName");
    lastName.classList.remove("d-none");
}

function viewPlaceholder() {
    let lnInput = document.getElementById('lastNameEl');
    lnInput.setAttribute('placeholder', lnInput.getAttribute('data-placeholder'));

    let lastName = document.getElementById("lastName");
    if (lnInput.value === "") {
        lastName.classList.add("d-none");
    } else {
        lastNameName.classList.remove("d-none");
    }
}

// read-more button so that we can use it for onClick
let btnElement = document.createElement("button");
btnElement.classList.add("btn-style", "cursor-pointer", "flex-row");
let read_more = document.createElement("p");
read_more.classList.add("read-more");
read_more.textContent = " READ MORE";
btnElement.appendChild(read_more);

document.querySelectorAll(".wwdCard").forEach(wwdCard => {
    let originalChild = wwdCard.innerHTML; 


    function hovering() {
        // Clear the existing content
        wwdCard.innerHTML = '';

        // Add hover-specific classes
        wwdCard.classList.add('hover-bg-container', 'd-flex', 'flex-column', 'justify-content-center');

        // Create and append new elements
        let hoverContainer = document.createElement("div");
        hoverContainer.classList.add("hover-container");
        wwdCard.appendChild(hoverContainer);

        let innerContainer = document.createElement("div");
        innerContainer.classList.add("d-flex", "flex-row", "justify-content-center", "inner-container");
        hoverContainer.appendChild(innerContainer);

        let imageEl = document.createElement("img");
        imageEl.src = "https://res.cloudinary.com/daaspgfhm/image/upload/v1720861123/icon_pdfych_f0egnq.png";
        imageEl.classList.add("icon-style");
        innerContainer.appendChild(imageEl);

        let headingEl = document.createElement("p");
        headingEl.classList.add("web-develop-para");
        headingEl.textContent = "WEB DEVELOPMENT";
        hoverContainer.appendChild(headingEl);

        let paragraphEl = document.createElement("p");
        paragraphEl.classList.add("web-develop-description");
        paragraphEl.textContent = "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque";
        hoverContainer.appendChild(paragraphEl);

        let btnContainer = document.createElement("div");
        btnContainer.classList.add("d-flex", "flex-row", "justify-content-center");
        hoverContainer.appendChild(btnContainer);

        let btnImg = document.createElement("img");
        btnImg.src = "https://res.cloudinary.com/daaspgfhm/image/upload/v1720867371/urn_aaid_sc_US_62beadb2-fac2-491b-90d9-5bc90d77ae70_x9uq9e.png";
        btnImg.classList.add("arrow");
        btnElement.appendChild(btnImg);

        btnContainer.appendChild(btnElement);
    }

    function removeHovering() {
        // Clear the hover-specific content
        wwdCard.innerHTML = '';

        // Restore the original child content
        wwdCard.innerHTML = originalChild;

        // Remove hover-specific classes
        wwdCard.classList.remove('hover-bg-container', 'p-5', 'd-flex', 'flex-column', 'justify-content-center');
    }

    wwdCard.addEventListener("mouseover", hovering);
    wwdCard.addEventListener("mouseout", removeHovering);
    wwdCard.addEventListener("mouseleave", removeHovering);
    wwdCard.addEventListener("touchend", removeHovering);
});

btnElement.addEventListener("click", function() {
    window.open("https://www.fylehq.com/", "_blank");
});


let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let autoplayInterval;

function showSlides(index) {
    if (index >= slides.length / 4) {
        slideIndex = 0;
        stopAutoplay();
    } else if (index < 0) {
        slideIndex = slides.length / 4 - 1;
        stopAutoplay();
    } else {
        slideIndex = index;
        
    }

    const offset = -slideIndex * 80;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[slideIndex].classList.add('active-dot');
}

function nextSlide() {
    if (slideIndex < slides.length / 4 - 1) {
        showSlides(slideIndex + 1);
    } else {
        showSlides(0);
        stopAutoplay();
    }
}

function currentSlide(index) {
    showSlides(index);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index);
        stopAutoplay();
    });
});

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 2000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

showSlides(slideIndex);
startAutoplay();


let checkBox = document.getElementById("checkBoxInput");
let formElement = document.getElementById("myForm");

checkBox.addEventListener('change', function() {
    let hiddenInput = document.getElementById('checkBoxInputHidden');
    if (this.checked) {
        hiddenInput.value = 'Agreed';
    } else {
        hiddenInput.value = 'Disagreed';
    }
});

formElement.addEventListener('submit', function(event) {
    let checkBox = document.getElementById('checkBoxInput');
    let hiddenInput = document.getElementById('checkBoxInputHidden');
    if (checkBox.checked) {
        hiddenInput.value = 'Agreed';
    } else {
        hiddenInput.value = 'Disagreed';
    }
});

let contactUsBtnEl = document.getElementById("contactUsBtnEl");

contactUsBtnEl.addEventListener('click', function() {
    let eMail = document.getElementById("emailEl");
    let firstName = document.getElementById("firstNamEl");
    let lastName = document.getElementById("lastNameEl");
    let checkBoxInput = document.getElementById('checkBoxInput');

    eMail.value = "";
    firstName.value = "";
    lastName.value = "";
    checkBoxInput.checked = false;

    let input = document.getElementById('emailEl');
    let workMail = document.getElementById("workMail");

    if (input.value === "") {
        workMail.classList.add("d-none");
    } else {
        workMail.classList.remove("d-none");
    }
});

contactUsBtnEl.addEventListener('click', function() {
    let fnInput = document.getElementById('firstNamEl');

    let firstName = document.getElementById("firstName");
    if (fnInput.value === "") {
        firstName.classList.add("d-none");
    } else {
        firstName.classList.remove("d-none");
    }
});

contactUsBtnEl.addEventListener('click', function() {
    let lnInput = document.getElementById('lastNameEl');

    let lastName = document.getElementById("lastName");
    if (lnInput.value === "") {
        lastName.classList.add("d-none");
    } else {
        lastNameName.classList.remove("d-none");
    }
});
