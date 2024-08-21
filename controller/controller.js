const defaultCon = (req, res) => {
    res.render('index', { title: "Arid - Travel & Toure" });
}
const galleryCon = (req, res) => {
    res.render('gallery', { title: "Arid - Gallery" });
}
const contactCon = (req, res) => {
    res.render('contact', { title: "Arid - Contact" });
}
const destinationCon = (req, res) => {
    res.render('destination', { title: "Arid - Destination" });
}
const aboutCon = (req, res) => {
    res.render('about', { title: "Arid - About" });
}
const errorCon = (req, res) => {
    res.render('error', { title: "Arid - Error" });
}

module.exports = { defaultCon, galleryCon, contactCon, destinationCon, aboutCon, errorCon };