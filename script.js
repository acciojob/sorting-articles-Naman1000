//your JS code here. If required.

const bands = [
    "The Plot in You", "The Devil Wears Prada", "Pierce the Veil", "Norma Jean",
    "The Bled", "Say Anything", "The Midway State", "We Came as Romans",
    "Counterparts", "Oh, Sleeper", "A Skylit Drive", "Anywhere But Here", "An Old Dog"
];

// Function to remove "A", "An", "The" for sorting
function stripPrefix(name) {
    return name.replace(/^(a |an |the )/i, "").trim();
}

// Sort the bands ignoring "A", "An", "The"
const sortedBands = bands.sort((a, b) => stripPrefix(a).localeCompare(stripPrefix(b)));

// Display the sorted bands
document.getElementById("bands").innerHTML = sortedBands .map(band => `<li>${band}</li>`) .join("");
  //  .map(band => `<li>${band}</li>`)
   // .join("");


