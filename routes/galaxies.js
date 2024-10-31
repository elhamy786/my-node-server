const express = require("express");
const router = express.Router();

let galaxies = [
    { id: 1, name: "Andromeda", type: "Spiral Galaxy", distance: "2.5M LY", image: "/images/andromeda.jpg", description: "The nearest large galaxy to the Milky Way, part of the Local Group." },
    { id: 2, name: "Milky Way", type: "Barred Spiral Galaxy", distance: "0 LY", image: "/images/milkyway.jpg", description: "Our home galaxy, known for its spiral arms and a central bulge." },
    { id: 3, name: "Sombrero Galaxy", type: "Spiral Galaxy", distance: "29M LY", image: "/images/sombrero.jpg", description: "Famous for its bright halo and central bulge, resembling a sombrero hat." },
    { id: 4, name: "Whirlpool Galaxy", type: "Spiral Galaxy", distance: "23M LY", image: "/images/whirlpool.jpg", description: "Interacting with a smaller galaxy, known for its prominent spiral structure." },
    { id: 5, name: "Triangulum Galaxy", type: "Spiral Galaxy", distance: "3M LY", image: "/images/triangulum.jpg", description: "One of the largest members of the Local Group, with a beautiful spiral shape." },
    { id: 6, name: "Pinwheel Galaxy", type: "Spiral Galaxy", distance: "21M LY", image: "/images/pinwheel.jpg", description: "A grand design galaxy with well-defined spiral arms." },
    { id: 7, name: "Cartwheel Galaxy", type: "Lenticular Galaxy", distance: "500M LY", image: "/images/cartwheel.jpg", description: "Known for its unique ring shape, possibly formed by a collision." },
    { id: 8, name: "Messier 87", type: "Elliptical Galaxy", distance: "53M LY", image: "/images/messier87.jpg", description: "A massive galaxy with a supermassive black hole at its core." },
    { id: 9, name: "Black Eye Galaxy", type: "Spiral Galaxy", distance: "17M LY", image: "/images/blackeye.jpg", description: "Named for its dark dust band that obscures part of its nucleus." },
    { id: 10, name: "NGC 1300", type: "Barred Spiral Galaxy", distance: "61M LY", image: "/images/ngc1300.jpg", description: "An impressive barred spiral galaxy with a defined central bar structure." },
    { id: 11, name: "Sunflower Galaxy", type: "Spiral Galaxy", distance: "27M LY", image: "/images/sunflower.jpg", description: "Known for its bright yellow core and spiral arms, resembling a sunflower." },
    { id: 12, name: "Whale Galaxy", type: "Barred Spiral Galaxy", distance: "25M LY", image: "/images/whale.jpg", description: "A barred spiral galaxy that appears like a whale in shape." },
    { id: 13, name: "NGC 4565", type: "Edge-on Spiral Galaxy", distance: "30M LY", image: "/images/ngc4565.jpg", description: "An edge-on spiral galaxy often referred to as the Needle Galaxy." },
    { id: 14, name: "Cigar Galaxy", type: "Edge-on Spiral Galaxy", distance: "12M LY", image: "/images/cigar.jpg", description: "Notable for its elongated shape, resembling a cigar." },
    { id: 15, name: "Tarantula Galaxy", type: "Irregular Galaxy", distance: "161,000 LY", image: "/images/tarantula.jpg", description: "A large and bright irregular galaxy located in the Large Magellanic Cloud." }

];

router.get('/', (req, res) => {
    console.log("Fetching all galaxies");
    res.json(galaxies);
});

// GET single galaxy by ID
router.get("/:id", (req, res) => {
    const galaxy = galaxies.find(g => g.id === parseInt(req.params.id));
    galaxy ? res.json(galaxy) : res.status(404).json({ message: "Galaxy not found" });
});

// Export the router
module.exports = router;
