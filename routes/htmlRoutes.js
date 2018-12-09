// ==========================================================================
// ROUTING NPM PACKAGE DEPENDENCIES BELOW
// ==========================================================================

var path = require("path");

// ==========================================================================
// ROUTING CONFIGURATIONS BELOW
// ==========================================================================

module.exports = function (app) {
    //GET the Home Splash Page at the Root Directory
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/splash.html"));
    });

    //GET the About Me Page
    app.get("/aboutme", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/about.html"));
    });

    //GET the Contact Page
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/contact.html"));
    });

    //GET the Portfolio Page
    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/portfolio.html"));
    });

    //GET the Skills Page
    app.get("/skills", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/skills.html"));
    });
};