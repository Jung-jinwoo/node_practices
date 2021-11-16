const model = require('../models/guestbook');

module.exports= {
    index : async function(req, res){
        const results = await model.findAll(function(){});
        res.render('index', {
            list: results || []
        });
    },
    form: function(req, res){
        res.render('deleteForm', req.params);
    },
    insert: async function(req, res){
        const results = await model.insert(req.body);
        res.redirect("/");
    },
    delete: async function(req, res){
        const results = await model.delete(req.params, req.body);
        res.redirect("/");
    }
}