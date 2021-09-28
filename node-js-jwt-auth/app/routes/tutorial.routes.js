const { verifySignUp } = require("../middleware");
const controller = require("../controllers/tutorial.controller.js");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    // Create a new Tutorial
    app.post("/tutorial", controller.create);

    // Retrieve all Tutorials
    app.get("/tutorials", controller.findAll);

    // Retrieve all published Tutorials
    app.get("/tutorial/published", controller.findAllPublished);

    // Retrieve a single Tutorial with id
    app.get("/tutorial/:id", controller.findOne);

    // Update a Tutorial with id
    app.put("/tutorial/:id", controller.update);

    // Delete a Tutorial with id
    app.delete("/tutorial/:id", controller.delete);

    // Delete all Tutorials
    app.delete("/tutorials", controller.deleteAll);

};