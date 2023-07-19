export default (router) => {
    router.get('', (req, res) => {
        const locals = {
            title: "NodeJs Blog",
            description: "Simple Blog created with NodeJS, Express & MongoDb."
        }

        res.render("index", { locals });
    });

    router.get('/about', (req, res) => {
        res.render("about");
    });
}