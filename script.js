

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("enquiryName").value.trim();
        const email = document.getElementById("enquiryEmail").value.trim();
        const enquiryType = document.getElementById("enquiryType").value;
        const message = document.getElementById("enquiryMessage").value.trim();
        const feedback = document.getElementById("enquiryFeedback");
        
        if (name.length < 2) {
            feedback.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            feedback.textContent = "Please enter a valid email address.";
            return;
        }

        if (enquiryType === "") {
            feedback.textContent = "Please select an enquiry type.";
            return;
        }

        if (message.length < 10) {
            feedback.textContent = "Your enquiry must contain at least 10 characters.";
            return;
        }
        feedback.textContent = "Thank you! Your enquiry has been submitted successfully.";
        enquiryForm.reset();
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();
        const feedback = document.getElementById("contactFeedback");

        if (name.length < 2) {
            feedback.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            feedback.textContent = "Please enter a valid email address.";
            return;
        }

        if (message.length < 10) {
            feedback.textContent = "Your message must contain at least 10 characters.";
            return;
        }
        feedback.textContent = "Thank you! Your message has been submitted successfully.";
    contactForm.reset();
    });
}
//Home page football fact generator

const factButton = document.getElementById("factButton");
const footballFact = document.getElementById("footballFact");



        if(factButton && footballFact) { 
            const footballFacts = [
                "Brazil has won the FIFA World cup five times",
                "The first FIFA World Cup took place in 1930",
                "Lionel Messi won the Ballon d'Or a record eight times",
                "The FIFA World Cup is held evrery four years",
                "Neymar Jr is brazil all time top scorer with 77 goals",
                "Manchester City won thier first champions league title in 2023",
                "suarez won the golden boot in the 2015-16 season with 40 goals",
                "MSN was one of the most famous attacking trios in football history",
                "The fastest goal in football history was scored in 2.4 seconds",
                "Luis Suarez is the only player to score a hat-trick against Real Madrid in the UEFA Champions League",
                "Neymar Jr. is the most expensive football player in history, with a transfer fee of €222 million",
                "Messi's 91 goals in 2012 is the most goals scored by a player in a calendar year",

               

            ];  

            let currentFact = 0;

            factButton.addEventListener("click", function() {
                document.getElementById("footballFact").textContent = footballFacts[currentFact];
                currentFact = (currentFact + 1) % footballFacts.length;
            });
        }
        // Adding the gallery image Lightbox 
        const galleryImages = document.querySelectorAll(".gallery img");
        const lightbox =document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightboxImage");
        const closeLightboxButton = document.getElementById("closeLightbox");

        if (galleryImages.length > 0 && lightbox && lightboxImage && closeLightboxButton) {

            galleryImages.forEach(function(image) {
                image.addEventListener("click", function() {
                    lightboxImage.src = image.src;
                    lightboxImage.alt = image.alt;
                    lightbox.style.display = "flex";
                });
            });
            
            closeLightboxButton.addEventListener("click", function() {
                lightbox.style.display = "none";
            });

            lightbox.addEventListener("click", function(event) {
                if (event.target === lightbox) {
                    lightbox.style.display = "none";
                }
            });

            document.addEventListener("keydown", function(event) {
                if (event.key === "Escape") {
                    lightbox.style.display = "none";
                }
            });
        }
            // adding the fnb stadium map
            const stadiumMapElement = document.getElementById("stadiumMap");
            if(stadiumMapElement && typeof maplibregl !== "undefined") {
                const stadiumMap = new maplibregl.Map({
                    container: "stadiumMap",
                    style: "https://tiles.openfreemap.org/styles/liberty",
                    center: [27.9820, -26.2340],
                    zoom: 15
                });
                // adding the zoom and nagivation controls
                stadiumMap.addControl(new maplibregl.NavigationControl()
            );
                "top-right"
                // adding a marker at the stadium location
                const stadiumMarker = new maplibregl.Marker({color: "#1683ff"})
                .setLngLat([27.9820, -26.2340])
                .setPopup( new maplibregl.Popup().setHTML("<b>FNB Stadium</b><br>Nasrec, Johannesburg, South Africa")
            )
               stadiumMarker.addTo(stadiumMap);
               // this opens the stadium information popup
               stadiumMarker.togglePopup();
            }
        

    
        

    