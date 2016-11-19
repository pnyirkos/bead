'use strict'

const Referee = use('App/Model/Referee')

class RefereeController {

    * main (req, res) {
        yield res.sendView('main')
    }

    * show (req, res) {
        const referee = yield Referee.find(req.param('id'))
        //yield recipe.related('category').load()

        yield res.sendView('referee', {
            referee: referee.toJSON()
        })
    }

}

module.exports = RefereeController
