document.querySelector('.close-cookie').focus();

if (document.cookie.match(/ps-cookie-venus=true/) !== null) {
    removeModal();
} else {
    window.addEventListener('keyup', function(e) {
        if (e.key == "Escape") {
            document.cookie = 'ps-cookie-venus=false';
            removeModal();
        }
    });
}

document.querySelector('.accept-cookie').addEventListener('click', function() {
    document.cookie = 'ps-cookie-venus=true';
    removeModal();
});

document.querySelector('.refuse-cookie').addEventListener('click', function() {
    document.cookie = 'ps-cookie-venus=false';
    removeModal();
});

document.querySelector('.close-cookie').addEventListener('click', function() {
    document.cookie = 'ps-cookie-venus=false';
    removeModal();
});

document.querySelector('.close-cookie').addEventListener('keydown', function(e) {
    if (e.shiftKey && e.key == "Tab") {
        setTimeout(() => {
            document.querySelector('.accept-cookie').focus();
        }, 0);

    }
});

document.querySelector('.accept-cookie').addEventListener('keydown', function(e) {
    if (e.key == "Tab") {
        setTimeout(() => {
            document.querySelector('.close-cookie').focus();
        }, 0);

    }

    if (e.shiftKey && e.key == "Tab") {
        setTimeout(() => {
            document.querySelector('.refuse-cookie').focus();
        }, 0);

    }
});

function removeModal() {
    document.querySelector('.cookiesContainer-lp').classList.add("remove-modal");
}
