// 1. Karte initialisieren
const map = L.map('map').setView([48.15, 11.5], 6);

// 2. Karten-Hintergrund (Tipp: Stadia Maps Alidade Smooth für minimalistischen Look)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// DEFINITION: Dunkelrotes Icon
const darkRedIcon = L.divIcon({
    html: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#8b0000" stroke="white" stroke-width="1.5"/>
            <circle cx="12" cy="9" r="3" fill="white"/>
           </svg>`,
    className: "",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

// 3. DATEN (Dein Array bleibt gleich)
const locations = [
    {
        name: "Kinky-München Fesseltreff",
        coords: [48.1351, 11.5820],
        desc: "Fesseltreff veranstaltet von Kinky-München.",
        contact: "kontakt@jungesmuenchen.org",
        social: { Fetlife: "#" }
    }
    ,
    {

        name: "Fesseltreff München II",

        coords: [48.1351, 11.6821],

        desc: "Fesseltreff II in München.",

        contact: "fesseltreff-muenchen@fesseltreff.de",

        social: { Fetlife: "#" }

            }

        ,

        {

        name: "Fesseltreff Augsburg",

        coords: [48.3705, 10.8982],

        desc: "Fesseltreff in Augsburg.",

        contact: "fesseltreff-augsburg@mail.de",

        social: { Fetlife: "#" }

        }

        ,

        {

        name: "Fesseltreff Ulm",

        coords: [48.4011, 9.9872],

        desc: "Fesseltreff in Ulm.",

        contact: "fesseltreff-ulm@mail.de",

        social: { Fetlife: "#" }

        }

        ,

        {

        name: "Fesseltreff Köln",

        coords: [50.9375, 6.9603],

        desc: "Fesseltreff in Köln.",

        contact: "fesseltreff-koeln@mail.de",

        social: { Fetlife: "#" }

        }

        ,

        {

        name: "Fesseltreff Hamburg",

        coords: [53.5511, 10.0066],

        desc: "Fesseltreff in Hamburg.",

        contact: "fesseltreff-hamburg@mail.de",

        social: { Fetlife: "#" }

        }

        ,

        {

        name: "Fesseltreff Wien",

        coords: [48.2082, 16.3738],

        desc: "Fesseltreff in Wien.",

        contact: "fesseltreff-wien@mail.de",

        social: { Fetlife: "#" }

        }

        ,

        {

        name: "Fesseltreff Zürich",

        coords: [47.3769, 8.5417],

        desc: "Fesseltreff in Zürich.",

        contact: "fesseltreff-zuerich@mail.de",

        social: { Fetlife: "#" }

        }
    // ... restliche locations hier einfügen
];

// 4. Marker generieren mit dem neuen Icon
locations.forEach(loc => {
    // Hier fügen wir {icon: darkRedIcon} hinzu
    const marker = L.marker(loc.coords, {icon: darkRedIcon}).addTo(map);
    
    let socialHTML = '';
    for (const [platform, url] of Object.entries(loc.social)) {
        socialHTML += `<a href="${url}" target="_blank">${platform}</a>`;
    }

    const content = `
        <div class="popup-content">
            <h3>${loc.name}</h3>
            <p>${loc.desc}</p>
            <p><strong>Kontakt:</strong><br>${loc.contact}</p>
            <div class="social-links">${socialHTML}</div>
        </div>
    `;

    marker.bindPopup(content);
});