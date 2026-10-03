  $(document).ready(function () {

 $(".filterBtn").click(function () {


                $(".filterBtn").removeClass("active");
                $(this).addClass("active");

                let selectedCategory = $(this).data("filter");

                if (selectedCategory === "all") {

                    $(".product")
                        .hide()
                        .fadeIn(500);

                } else {

                    $(".product").hide();

                    $(".product").each(function () {

                        let category = $(this).data("category");

                        if (category === selectedCategory) {

                            $(this).fadeIn(500);

                        }

                    });

                }

            });

        });

/* ============================================================
   PRICE LIST  ->  Complete catalogue with line-up pricing
   ============================================================ */

(function ($) {
    "use strict";

    var priceData = [
        { brand: "Alberto",   model: "Heritage Chronograph",   lineup: "Luxury",  price: 4850  },
        { brand: "Alberto",   model: "Royal Skeleton",         lineup: "Luxury",  price: 12400 },
        { brand: "Alberto",   model: "Classic Rose Gold",      lineup: "Luxury",  price: 6150  },
        { brand: "Alberto",   model: "Legacy Perpetual",       lineup: "Luxury",  price: 18900 },
        { brand: "Alberto",   model: "New Automatic",          lineup: "Luxury",  price: 3290  },
        { brand: "Alberto",   model: "Diver Pro 300",          lineup: "Luxury",  price: 5720  },
        { brand: "Alberto",   model: "GMT Worldtimer",         lineup: "Luxury",  price: 7480  },
        { brand: "Rolex",     model: "Submariner",             lineup: "Luxury",  price: 18900 },
        { brand: "Cartier",   model: "Santos",                 lineup: "Luxury",  price: 15200 },
        { brand: "Seagull",   model: "1963 Chronograph",       lineup: "Vintage", price: 2850  },
        { brand: "Shanghai",  model: "Shanghai Classic",       lineup: "Vintage", price: 3450  },
        { brand: "Alberto",   model: "Heritage 1970",          lineup: "Vintage", price: 2100  },
        { brand: "Alberto",   model: "Manual Wind 1965",       lineup: "Vintage", price: 1650  },
        { brand: "Alberto",   model: "Smart Pulse Pro",        lineup: "Smart",   price: 1250  },
        { brand: "Alberto",   model: "Fit Tracker 2",          lineup: "Smart",   price: 990   },
        { brand: "Alberto",   model: "Aura Smart",             lineup: "Smart",   price: 1480  },
        { brand: "Alberto",   model: "Chrono Smart",           lineup: "Smart",   price: 1720  },
        { brand: "CIGA Design", model: "Blue Planet",          lineup: "Fashion", price: 890   },
        { brand: "FIYTA",     model: "Space Mission",          lineup: "Fashion", price: 760   },
        { brand: "Sugess & San Martin", model: "Pilot Field",  lineup: "Fashion", price: 1280  },
        { brand: "Alberto",   model: "Minimal Breeze",         lineup: "Fashion", price: 1950  }
    ];

    function formatPrice(amount) {
        return "$" + Number(amount).toLocaleString("en-US");
    }

    function getFilteredRows() {
        var selected = $("#priceFilter").val() || "All";
        if (selected === "All") {
            return priceData.slice();
        }
        return priceData.filter(function (item) {
            return item.lineup === selected;
        });
    }

    function getLineupOrder() {
        var order = [];
        priceData.forEach(function (item) {
            if (order.indexOf(item.lineup) === -1) {
                order.push(item.lineup);
            }
        });
        return order;
    }

    function renderPriceList() {
        var rows = getFilteredRows();
        var total = priceData.length;
        var lineupOrder = getLineupOrder();

        rows.sort(function (a, b) {
            return lineupOrder.indexOf(a.lineup) - lineupOrder.indexOf(b.lineup);
        });

        var markup = rows.map(function (item) {
            return (
                "<tr>" +
                    "<td class=\"p-brand\">" + item.brand + "</td>" +
                    "<td class=\"p-model\">" + item.model + "</td>" +
                    "<td class=\"p-lineup\"><span class=\"lineup-tag\">" + item.lineup + "</span></td>" +
                    "<td class=\"p-price\">" + formatPrice(item.price) + "</td>" +
                    "<td class=\"p-action\"><a href=\"./pages/product.html\" class=\"p-view\">View</a></td>" +
                "</tr>"
            );
        }).join("");

        $("#priceBody").html(markup);
        $(".price-count").text("Showing " + rows.length + " of " + total + " timepieces");
    }

    $(document).ready(function () {

        if (!$("#priceBody").length) {
            return;
        }

        if ($.data(document, "priceTableReady")) {
            return;
        }
        $.data(document, "priceTableReady", true);

        if (!$(".price-count").length) {
            $("<span>", { class: "price-count", text: "" }).appendTo(".price-filter");
        }

        $("#priceFilter").on("change", renderPriceList);

        renderPriceList();
    });

})(jQuery);






/* =========================================================
   ALBERTO WATCH COMPANY
   SERVICES PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

$(window).on("scroll", function () {

    if ($(window).scrollTop() > 50) {

        $("#mainNavbar").addClass("scrolled");

    } else {

        $("#mainNavbar").removeClass("scrolled");

    }

});


/* =========================================================
   CLOSE MOBILE NAVBAR AFTER CLICK
========================================================= */

$(".navbar-nav .nav-link").on("click", function () {

    if ($(window).width() < 992) {

        $(".navbar-collapse").collapse("hide");

    }

});


/* =========================================================
   SERVICE DATA
========================================================= */

const serviceData = {

    repair: {

        title: "Watch Repair",

        icon: "bi-tools",

        description:
            "Our watch repair service is designed to diagnose and address mechanical, automatic and quartz timepiece issues with careful attention to precision and detail.",

        features: [
            "Movement inspection",
            "Mechanical component diagnosis",
            "Quartz watch repair",
            "Crown and winding mechanism inspection",
            "General functional testing"
        ]

    },


    maintenance: {

        title: "Watch Maintenance",

        icon: "bi-gear-wide-connected",

        description:
            "Regular maintenance helps preserve the accuracy and reliability of a timepiece. Our service includes careful inspection and maintenance of selected watch components.",

        features: [
            "Movement inspection",
            "Cleaning assessment",
            "Lubrication assessment",
            "Accuracy inspection",
            "Functional testing"
        ]

    },


    battery: {

        title: "Battery Replacement",

        icon: "bi-battery-half",

        description:
            "Our battery replacement service provides reliable replacement for compatible quartz watches while allowing the timepiece to be inspected for basic operating condition.",

        features: [
            "Battery replacement",
            "Battery compartment inspection",
            "Basic functionality check",
            "Timekeeping check",
            "Seal inspection where applicable"
        ]

    },


    polishing: {

        title: "Polishing & Restoration",

        icon: "bi-stars",

        description:
            "Careful polishing and restoration can refresh the appearance of selected watches while maintaining the character and design of the original timepiece.",

        features: [
            "Case appearance assessment",
            "Surface polishing",
            "Bracelet refinishing",
            "Surface scratch assessment",
            "Final visual inspection"
        ]

    },


    authentication: {

        title: "Appraisal & Authentication",

        icon: "bi-patch-check",

        description:
            "Our appraisal and authentication service involves examination of selected timepieces and their available documentation to provide an informed professional assessment.",

        features: [
            "Watch examination",
            "Reference and model inspection",
            "Condition assessment",
            "Documentation review",
            "Appraisal information"
        ]

    },


    strap: {

        title: "Strap & Bracelet Service",

        icon: "bi-watch",

        description:
            "Give your watch a fresh appearance and comfortable fit with professional strap replacement and bracelet adjustment.",

        features: [
            "Leather strap replacement",
            "Bracelet adjustment",
            "Spring-bar inspection",
            "Fitting service",
            "Final comfort check"
        ]

    }

};


/* =========================================================
   SERVICE MODAL
========================================================= */

$(".service-link").on("click", function () {

    const serviceName = $(this).data("service");

    const service = serviceData[serviceName];

    if (!service) {
        return;
    }


    /* Update title */

    $("#modalTitle").text(service.title);


    /* Update icon */

    $("#modalIcon")
        .removeClass()
        .addClass("bi " + service.icon);


    /* Update description */

    $("#modalDescription").text(service.description);


    /* Clear old features */

    $("#modalFeatures").empty();


    /* Add features */

    service.features.forEach(function (feature) {

        $("#modalFeatures").append(
            $("<li>").text(feature)
        );

    });


    /* Open Bootstrap Modal */

    const modalElement =
        document.getElementById("serviceModal");

    const serviceModal =
        bootstrap.Modal.getOrCreateInstance(modalElement);

    serviceModal.show();

});


/* =========================================================
   STATISTICS COUNTER
========================================================= */

function animateCounter(element) {

    const target =
        parseInt($(element).attr("data-target"));

    let current = 0;

    const duration = 1800;

    const increment =
        target / (duration / 20);


    const timer = setInterval(function () {

        current += increment;


        if (current >= target) {

            current = target;

            clearInterval(timer);

        }


        $(element).text(
            Math.floor(current).toLocaleString()
        );

    }, 20);

}


/* =========================================================
   INTERSECTION OBSERVER
========================================================= */

let counterStarted = false;

const statsSection =
    document.querySelector(".stats-wrapper");


if (statsSection) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                if (
                    entries[0].isIntersecting &&
                    !counterStarted
                ) {

                    counterStarted = true;


                    $(".stat-number").each(function () {

                        animateCounter(this);

                    });

                }

            },

            {
                threshold: 0.4
            }

        );


    observer.observe(statsSection);

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function revealOnScroll() {

    $(".service-card, .process-step").each(function () {

        const elementTop =
            $(this).offset().top;

        const windowBottom =
            $(window).scrollTop() +
            $(window).height();

        if (windowBottom > elementTop + 80) {

            $(this).addClass("visible");

        }

    });

}


$(window).on("scroll", revealOnScroll);

$(document).ready(function () {

    revealOnScroll();

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

$('a[href^="#"]').on("click", function (event) {

    const target =
        $(this.getAttribute("href"));

    if (target.length) {

        event.preventDefault();

        $("html, body").animate({

            scrollTop:
                target.offset().top - 80

        }, 800);

    }

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function currentPageName() {

    const path = window.location.pathname;

    return (path.substring(path.lastIndexOf("/") + 1) || "index.html").toLowerCase();

}

function setActivePageLink() {

    const page = currentPageName();

    $(".alberto-navbar .nav-link").each(function () {

        const href = ($(this).attr("href") || "").split("#")[0].split("?")[0];

        const target = (href.substring(href.lastIndexOf("/") + 1) || "index.html").toLowerCase();

        if (target === page) {

            $(this).addClass("active");

        } else if (href.charAt(0) !== "#") {

            $(this).removeClass("active");

        }

    });

}

$(document).ready(function () {
    setActivePageLink();
});

$(window).on("scroll", function () {

    const anchorLinks = $('.alberto-navbar .nav-link[href^="#"]');

    if (!anchorLinks.length) {
        return;
    }

    const scrollPosition =
        $(window).scrollTop() + 150;


    $("section[id], header[id]").each(function () {

        const sectionTop =
            $(this).offset().top;

        const sectionBottom =
            sectionTop + $(this).outerHeight();

        const sectionId =
            $(this).attr("id");

        const anchorLink = anchorLinks.filter('[href="#' + sectionId + '"]');

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <= sectionBottom &&
            anchorLink.length
        ) {

            anchorLinks.removeClass("active");

            anchorLink.addClass("active");

        }

    });

});

// ==============contact page ====================




(function () {

    const form = document.querySelector('.form-card form');

    if (!form) {
        return;
    }

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    if (nameInput) {
        nameInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^A-Za-z ]/g, '');
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 11);
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!this.checkValidity()) {
            this.reportValidity();
            return;
        }

        alert('Your appointment has been successfully booked!');
    });

})();


/* =========================================================
   HOME HERO
   Keeps the left-hand copy, the slide counter and the live
   clock in step with the carousel on the right.
   Plain DOM API so it still works if jQuery is absent.
   ========================================================= */

(function () {

    "use strict";

    var carousel = document.getElementById("albertoCarousel");

    if (!carousel) {
        return;
    }

    var copies = carousel.ownerDocument.querySelectorAll("[data-hero-copy]");
    var countEl = carousel.ownerDocument.querySelector("[data-hero-count]");
    var totalEl = carousel.ownerDocument.querySelector("[data-hero-total]");

    function pad(value) {
        return value < 10 ? "0" + value : String(value);
    }

    if (copies.length) {

        var slides = carousel.querySelectorAll(".carousel-item");
        var total = slides.length || copies.length;

        if (totalEl) {
            totalEl.textContent = pad(total);
        }

        function showCopy(index) {

            var target = ((index % total) + total) % total;

            for (var i = 0; i < copies.length; i++) {
                copies[i].classList.toggle("is-active", i === target);
            }

            if (countEl) {
                countEl.textContent = pad(target + 1);
            }

        }

        carousel.addEventListener("slid.bs.carousel", function (event) {

            var next = event.to;

            if (typeof next !== "number") {
                next = 0;
            }

            showCopy(next);

        });

        showCopy(0);

    }

    /* live local time - small detail, right for a watch company */

    var clockEl = carousel.ownerDocument.querySelector("[data-hero-clock]");

    if (clockEl) {

        function paintClock() {

            clockEl.textContent = new Date().toLocaleTimeString("en-GB", {
                hour12: false
            });

        }

        paintClock();
        window.setInterval(paintClock, 1000);

    }

})();




/* =========================================================
   LOGIN PAGE
   Client side validation for #loginForm.

   Plain DOM API inside a self guarding IIFE, so nothing runs
   on pages that have no login form. Fields are checked on
   blur, re-checked while typing once they are already in an
   error state, and every field is checked on submit. Errors
   are written into the elements referenced by
   aria-describedby and mirrored onto aria-invalid.
   ========================================================= */

(function () {

    "use strict";

    var form = document.getElementById("loginForm");

    if (!form) {
        return;
    }

    /* demo account - swap for a real endpoint when there is a server */
    var DEMO_EMAIL = "collector@albertowatches.com";
    var DEMO_PASSWORD = "Watch@1954";

    var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

    var emailInput = document.getElementById("loginEmail");
    var passwordInput = document.getElementById("loginPassword");
    var rememberInput = document.getElementById("rememberMe");

    if (!emailInput || !passwordInput) {
        return;
    }

    var alertBox = document.getElementById("loginAlert");
    var alertText = alertBox ? alertBox.querySelector("[data-alert-text]") : null;

    var submitButton = document.getElementById("loginSubmit");
    var submitLabel = submitButton
        ? submitButton.querySelector("[data-submit-text]")
        : null;

    var toggleButton = document.getElementById("togglePassword");

    var strengthWrap = form.querySelector("[data-strength]");
    var strengthBars = form.querySelector("[data-level]");
    var strengthText = form.querySelector("[data-strength-text]");

    var defaultSubmitLabel = submitLabel ? submitLabel.textContent : "Sign In";


    /* ---------- field helpers ---------- */

    function fieldOf(input) {
        return input ? input.closest(".auth-field") : null;
    }

    function errorOf(input) {
        return input ? document.getElementById(input.id + "Error") : null;
    }

    function showError(input, message) {

        var field = fieldOf(input);
        var box = errorOf(input);

        if (field) {
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
        }

        input.setAttribute("aria-invalid", "true");

        if (box) {
            box.textContent = message;
            box.hidden = false;
        }

    }

    function clearError(input) {

        var field = fieldOf(input);

        if (field) {
            field.classList.remove("is-invalid");
        }

        input.removeAttribute("aria-invalid");

        var box = errorOf(input);

        if (box) {
            box.textContent = "";
            box.hidden = true;
        }

    }

    function markValid(input) {

        var field = fieldOf(input);

        if (field) {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
        }

        input.removeAttribute("aria-invalid");

        var box = errorOf(input);

        if (box) {
            box.textContent = "";
            box.hidden = true;
        }

    }


    /* ---------- rules ---------- */

    function validateEmail() {

        var value = emailInput.value.trim();

        if (!value) {
            showError(emailInput, "Email address is required.");
            return false;
        }

        if (value.length < 5) {
            showError(emailInput, "Email address is too short.");
            return false;
        }

        if (!EMAIL_PATTERN.test(value)) {
            showError(
                emailInput,
                "Enter a valid email address, for example name@example.com."
            );
            return false;
        }

        markValid(emailInput);
        return true;

    }

    function validatePassword() {

        var value = passwordInput.value;

        if (!value) {
            showError(passwordInput, "Password is required.");
            return false;
        }

        if (value.length < 8) {
            showError(
                passwordInput,
                "Password must be at least 8 characters long."
            );
            return false;
        }

        if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) {
            showError(
                passwordInput,
                "Password must contain at least one letter and one number."
            );
            return false;
        }

        markValid(passwordInput);
        return true;

    }

    var rules = [
        { input: emailInput, check: validateEmail },
        { input: passwordInput, check: validatePassword }
    ];


    /* ---------- password strength meter ---------- */

    function scorePassword(value) {

        var score = 0;

        if (value.length >= 8) { score += 1; }
        if (/[A-Za-z]/.test(value) && /[0-9]/.test(value)) { score += 1; }
        if (value.length >= 12 || /[^A-Za-z0-9]/.test(value)) { score += 1; }

        return score;

    }

    function paintStrength() {

        if (!strengthWrap || !strengthBars || !strengthText) {
            return;
        }

        var value = passwordInput.value;

        if (!value) {
            strengthWrap.hidden = true;
            strengthBars.setAttribute("data-level", "0");
            return;
        }

        var level = scorePassword(value);
        var labels = ["Too weak", "Fair", "Strong"];

        strengthWrap.hidden = false;
        strengthBars.setAttribute("data-level", String(level));
        strengthText.textContent = labels[level] || "Too weak";

    }


    /* ---------- show / hide password ---------- */

    if (toggleButton) {

        toggleButton.addEventListener("click", function () {

            var isVisible = passwordInput.type === "text";

            passwordInput.type = isVisible ? "password" : "text";
            toggleButton.setAttribute("aria-pressed", isVisible ? "false" : "true");
            toggleButton.setAttribute(
                "aria-label",
                isVisible ? "Show password" : "Hide password"
            );

            toggleButton
                .querySelector("i")
                .className = isVisible
                    ? "bi bi-eye"
                    : "bi bi-eye-slash";

            passwordInput.focus();

        });

    }


    /* ---------- blur / input handling ---------- */

    rules.forEach(function (rule) {

        var input = rule.input;
        var touched = false;

        input.addEventListener("blur", function () {

            touched = true;
            rule.check();

        });

        input.addEventListener("input", function () {

            /* the strength meter belongs to the password field only */
            if (input === passwordInput) {
                paintStrength();
            }

            /* keep typing silent until the field has been flagged once */
            if (touched || input.getAttribute("aria-invalid") === "true") {
                rule.check();
            }

        });

        /* an email address can never contain a space */
        if (input === emailInput) {

            input.addEventListener("keydown", function (event) {
                if (event.key === " ") {
                    event.preventDefault();
                }
            });

        }

    });


    /* ---------- remember me ---------- */

    if (rememberInput) {

        rememberInput.addEventListener("change", function () {

            var label = rememberInput.closest(".auth-check");

            if (label) {
                label.classList.remove("is-invalid");
            }

            rememberInput.removeAttribute("aria-invalid");

        });

    }


    /* ---------- form level alert ---------- */

    function showAlert(message, ok) {

        if (!alertBox || !alertText) {
            return;
        }

        alertText.textContent = message;
        alertBox.classList.toggle("is-ok", Boolean(ok));
        alertBox.hidden = false;

        var icon = alertBox.querySelector("i");

        if (icon) {
            icon.className = ok ? "bi bi-check-circle" : "bi bi-exclamation-triangle";
        }

    }

    function clearAlert() {

        if (alertBox) {
            alertBox.hidden = true;
            alertBox.classList.remove("is-ok");
        }

    }


    /* ---------- submit ---------- */

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        clearAlert();

        var firstInvalid = null;

        var valid = rules.every(function (rule) {

            var passed = rule.check();

            if (!passed && !firstInvalid) {
                firstInvalid = rule.input;
            }

            return passed;

        });

        if (!valid) {

            if (firstInvalid) {
                firstInvalid.focus();
            }

            showAlert(
                "Please correct the highlighted fields before signing in.",
                false
            );

            var cardBody = form.closest(".auth-card__body");

            if (cardBody) {
                cardBody.classList.add("is-shaking");
            }

            window.setTimeout(function () {

                if (cardBody) {
                    cardBody.classList.remove("is-shaking");
                }

            }, 420);

            return;

        }

        /* stand-in for the network call */

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.classList.add("is-loading");
        }

        if (submitLabel) {
            submitLabel.textContent = "Signing in";
        }

        window.setTimeout(function () {

            if (submitButton) {
                submitButton.disabled = false;
                submitButton.classList.remove("is-loading");
            }

            if (submitLabel) {
                submitLabel.textContent = defaultSubmitLabel;
            }

            var email = emailInput.value.trim();
            var password = passwordInput.value;

            if (
                email.toLowerCase() === DEMO_EMAIL &&
                password === DEMO_PASSWORD
            ) {

                showAlert(
                    "Welcome back. Taking you to your account…",
                    true
                );

                return;
            }

            showAlert(
                "We could not match that email and password. Check your details or reset your password.",
                false
            );

            passwordInput.value = "";
            paintStrength();
            passwordInput.focus();

        }, 1200);

    });

})();


/* =========================================================
   WATCH DETAIL POPUP
   Pressing "Add to Cart" on a product card no longer adds
   straight away. It opens a popup carrying the details of that
   watch, and the popup owns the real add.

   The name, category, price and image are read straight off
   the card, so the popup always matches the grid. Only the
   description and the spec chips are extra copy, looked up by
   name; a card with no entry simply shows no description.

   Plain DOM API inside a self guarding IIFE, so nothing runs
   on pages that have no product cards.
   ========================================================= */

(function () {

    "use strict";

    var modal = document.getElementById("watchModal");

    if (!modal || typeof bootstrap === "undefined") {
        return;
    }

    var EXTRA_COPY = {
        "Heritage Chronograph": {
            description:
                "41mm stainless steel case, sapphire crystal and an automatic chronograph movement with 42-hour power reserve.",
            specs: [
                ["bi-gear-wide-connected", "Automatic"],
                ["bi-droplet", "100m"],
                ["bi-gem", "Sapphire crystal"]
            ]
        },
        "Royal Skeleton": {
            description:
                "Open-worked dial revealing the bridges of a hand-wound movement, framed by a polished rose gold case.",
            specs: [
                ["bi-gear-wide-connected", "Manual wind"],
                ["bi-droplet", "50m"],
                ["bi-gem", "Sapphire crystal"]
            ]
        },
        "Classic Rose Gold": {
            description:
                "Slim dress profile in rose gold with a sunray dial, applied indices and a leather strap that ages beautifully.",
            specs: [
                ["bi-alarm", "Quartz"],
                ["bi-droplet", "30m"],
                ["bi-shield-check", "Stainless steel"]
            ]
        },
        "Legacy Perpetual": {
            description:
                "A perpetual calendar movement keeping date, day, month and leap years without correction until 2100.",
            specs: [
                ["bi-gear-wide-connected", "Automatic"],
                ["bi-droplet", "100m"],
                ["bi-calendar3", "Perpetual calendar"]
            ]
        },
        "Smart Pulse Pro": {
            description:
                "Always-on AMOLED display with continuous heart rate, SpO2 and a battery that lasts a full week.",
            specs: [
                ["bi-phone", "Always-on AMOLED"],
                ["bi-droplet", "50m"],
                ["bi-battery-full", "7-day battery"]
            ]
        },
        "Fit Tracker 2": {
            description:
                "A lighter, slimmer tracker built for the gym and the trail, with continuous heart rate and sleep staging.",
            specs: [
                ["bi-activity", "Fitness tracking"],
                ["bi-droplet", "5 ATM"],
                ["bi-heart-pulse", "Heart rate"]
            ]
        },
        "Aura Smart": {
            description:
                "Brushed steel case, touchscreen dial and discreet call notifications that lift only when you raise your wrist.",
            specs: [
                ["bi-hand-index", "Touchscreen"],
                ["bi-droplet", "30m"],
                ["bi-bell", "Smart notifications"]
            ]
        },
        "Chrono Smart": {
            description:
                "A chronograph face that measures real intervals, with a ten-day battery and offline maps on the wrist.",
            specs: [
                ["bi-stopwatch", "Chronograph"],
                ["bi-droplet", "50m"],
                ["bi-battery-full", "10-day battery"]
            ]
        },
        "Rolex Submariner": {
            description:
                "The reference dive watch: unidirectional ceramic bezel, 300m water resistance and a movement built for decades.",
            specs: [
                ["bi-gear-wide-connected", "Automatic"],
                ["bi-droplet", "300m"],
                ["bi-circle", "Ceramic bezel"]
            ]
        },
        "Cartier Santos": {
            description:
                "Geometric lines and a scratch-resistant sapphire crystal on a case designed to shrug off daily knocks.",
            specs: [
                ["bi-gear-wide-connected", "Automatic"],
                ["bi-droplet", "100m"],
                ["bi-gem", "Scratch-proof crystal"]
            ]
        },
        "Seagull 1963": {
            description:
                "A faithful 1963 chronograph reissue, hand wound in-house, on a domed acrylic crystal with a display back.",
            specs: [
                ["bi-gear-wide-connected", "Manual wind"],
                ["bi-droplet", "50m"],
                ["bi-gem", "Sapphire crystal"]
            ]
        },
        "Shanghai Classic": {
            description:
                "A dress classic with a domed crystal and exhibition case back, letting the decorated movement do the talking.",
            specs: [
                ["bi-gear-wide-connected", "Automatic"],
                ["bi-droplet", "50m"],
                ["bi-eye", "Exhibition case back"]
            ]
        }
    };

    var MIN_QTY = 1;
    var MAX_QTY = 99;

    /* the bag, kept in memory for the life of the page */
    var bag = [];

    var imageEl = document.getElementById("wdModalImage");
    var categoryEl = document.getElementById("wdModalCategory");
    var titleEl = document.getElementById("watchModalTitle");
    var priceEl = document.getElementById("wdModalPrice");
    var descEl = document.getElementById("wdModalDesc");
    var specsEl = document.getElementById("wdModalSpecs");
    var qtyEl = document.getElementById("wdQty");
    var downEl = document.getElementById("wdQtyDown");
    var upEl = document.getElementById("wdQtyUp");
    var addEl = document.getElementById("wdModalAdd");
    var noteEl = document.getElementById("wdModalNote");

    var watchModal = bootstrap.Modal.getOrCreateInstance(modal);

    var current = null;


    /* ---------- helpers ---------- */

    function money(amount) {
        return "$" + Number(amount).toLocaleString("en-US");
    }

    function toPrice(text) {
        var value = parseInt(String(text || "").replace(/[^0-9]/g, ""), 10);
        return isNaN(value) ? 0 : value;
    }

    function findCard(node) {

        while (node && node !== document) {

            if (
                node.classList &&
                (node.classList.contains("product") || node.classList.contains("watch-card"))
            ) {
                return node;
            }

            node = node.parentNode;

        }

        return null;

    }

    function readSpecs(card) {

        var specs = [];
        var items = card.querySelectorAll(".watch-card-specs li");

        for (var i = 0; i < items.length; i++) {

            var icon = items[i].querySelector("i");

            var text = items[i].textContent.replace(/\s+/g, " ").trim();

            if (!text) {
                continue;
            }

            specs.push([
                icon ? icon.className.replace("bi ", "") : "bi-check2",
                text
            ]);

        }

        return specs;

    }

    function readCard(card) {

        var isWatchCard = card.classList.contains("watch-card");

        var image = card.querySelector("img");
        var name = card.querySelector(isWatchCard ? ".watch-card-name" : "h3");
        var category = card.querySelector(isWatchCard ? ".watch-card-badge" : ".product-cat");
        var price = card.querySelector(isWatchCard ? ".price-now" : ".price");
        var description = card.querySelector(".watch-card-desc");

        var title = name ? name.textContent.trim() : "";

        if (isWatchCard && !category) {
            category = card.querySelector(".watch-card-brand");
        }

        return {
            name: title,
            category: category ? category.textContent.trim() : "",
            priceText: price ? price.textContent.trim() : "",
            price: toPrice(price ? price.textContent : ""),
            image: image ? image.getAttribute("src") : "",
            alt: image ? image.getAttribute("alt") : title,
            description: description
                ? description.textContent.replace(/\s+/g, " ").trim()
                : "",
            specs: isWatchCard ? readSpecs(card) : []
        };

    }

    function readQty() {

        var value = parseInt(qtyEl.value, 10);

        if (isNaN(value) || value < MIN_QTY) {
            return MIN_QTY;
        }

        return value > MAX_QTY ? MAX_QTY : value;

    }

    function writeQty(value) {

        var safe = value < MIN_QTY ? MIN_QTY : (value > MAX_QTY ? MAX_QTY : value);

        qtyEl.value = String(safe);

    }

    function paintNote(added) {

        if (!bag.length) {
            noteEl.textContent = "";
            return;
        }

        var count = 0;
        var total = 0;

        bag.forEach(function (line) {
            count += line.qty;
            total += line.qty * line.price;
        });

        var summary =
            count + (count === 1 ? " item" : " items") + " · " + money(total);

        noteEl.textContent = added
            ? "Added to your bag — " + summary
            : "Your bag: " + summary;

    }


    /* ---------- open the popup ---------- */

    document.addEventListener("click", function (event) {

        var target = event.target;

        if (!target || !target.closest) {
            return;
        }

        var button = target.closest(".product-btn") ||
            target.closest(".watch-card-btn--cart") ||
            target.closest(".watch-card-quick");

        if (!button) {
            return;
        }

        var card = findCard(button);

        if (!card) {
            return;
        }

        event.preventDefault();

        var watch = readCard(card);
        var extra = EXTRA_COPY[watch.name] || {};

        var description = watch.description || extra.description || "";
        var specs = watch.specs.length ? watch.specs : (extra.specs || []);

        current = watch;

        imageEl.setAttribute("src", watch.image);
        imageEl.setAttribute("alt", watch.alt);

        titleEl.textContent = watch.name;
        categoryEl.textContent = watch.category;
        priceEl.textContent = watch.priceText;

        descEl.textContent = description;
        descEl.hidden = !description;

        specsEl.innerHTML = "";

        specs.forEach(function (spec) {

            var item = document.createElement("li");

            var icon = document.createElement("i");
            icon.className = "bi " + spec[0];

            item.appendChild(icon);
            item.appendChild(document.createTextNode(" " + spec[1]));

            specsEl.appendChild(item);

        });

        writeQty(1);
        paintNote(false);

        watchModal.show();

    });


    /* ---------- quantity stepper ---------- */

    downEl.addEventListener("click", function () {
        writeQty(readQty() - 1);
    });

    upEl.addEventListener("click", function () {
        writeQty(readQty() + 1);
    });

    qtyEl.addEventListener("input", function () {
        qtyEl.value = qtyEl.value.replace(/[^0-9]/g, "");
    });

    qtyEl.addEventListener("blur", function () {
        writeQty(readQty());
    });


    /* ---------- the real add ---------- */

    addEl.addEventListener("click", function () {

        if (!current) {
            return;
        }

        var qty = readQty();
        var line = null;

        for (var i = 0; i < bag.length; i++) {
            if (bag[i].name === current.name) {
                line = bag[i];
                break;
            }
        }

        if (line) {
            line.qty = Math.min(MAX_QTY, line.qty + qty);
        } else {
            bag.push({
                name: current.name,
                price: current.price,
                qty: qty
            });
        }

        writeQty(1);
        paintNote(true);

    });

})();


