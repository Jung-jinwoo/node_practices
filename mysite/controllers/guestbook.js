const moment = require('moment');
const models = require('../models');


module.exports = function(){
    index: function(req, res, next){
        try {
            
            const results = models.Guestbook.findAll({
                attributes: [], // 화면에 출력할 데이터
                order: [
                    ['no', 'DESC']
                ]
            });

            res.render('guestbook.index', {results, moment});
            // moment(vo.regDate).format('YYYY-MM-DD hh:mm:ss)
        } catch (e) {
            next(e)
        }
    },
    
    _delete: function(req, res, next){
        try {
            
        } catch (e) {
            next(e);
        }
    }
}