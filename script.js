// 1. Karte initialisieren (Fokus auf DACH-Region)
const map = L.map('map').setView([48.15, 11.5], 6);

// 2. Karten-Hintergrund (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. DATEN-BEREICH: Hier fügst du als Programmierer Punkte hinzu
const locations = [
    {
        name: "Kinky-München Fesseltreff",
        coords: [48.1351, 11.5820],
        desc: "Fesseltreff veranstaltet von Kinky-München.",
        contact: "kontakt@kinky-muenchen.de",
        social: { Fetlife: "#",  }
    },
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
];

// 4. Marker generieren
locations.forEach(loc => {
    const marker = L.marker(loc.coords).addTo(map);
    
    // Dynamischer Social-Media-HTML String
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