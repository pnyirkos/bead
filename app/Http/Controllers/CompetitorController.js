'use strict'

const Competitor = use('App/Model/Competitor')
const Match = use('App/Model/Match')
const Validator = use('Validator')

class CompetitorController {

    * main (req, res) {
        const competitors = yield Competitor.all()

        yield res.sendView('main', {
            competitors: competitors.toJSON()
        })
    }

    * create (req, res) {
        const competitors = yield Competitor.all()
        yield res.sendView('competitorCreate')
    }

    * doCreate (req, res) {
        // 1. input
        const competitorData = req.all()

        // 2. validáció
        const rules = {
            'firstname': 'required|min:3',
            'laststname': 'required|min:3',
            'wins': 'required',
        }

        const validation = yield Validator.validateAll(competitorData, rules)
        if (validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect('/competitorCreate')
            return
        }

        // TODO: check category

        const competitor = new Competitor()
        competitor.firstname = competitorData.firstname
        competitor.laststname = competitorData.laststname
        competitor.wins = competitorData.wins

        yield competitor.save()

        res.redirect(`/competitor/${competitor.id}`)
    } 

    * show (req, res) {
        const competitor = yield Competitor.find(req.param('id'));

        yield res.sendView('competitor', {
            competitor: competitor.toJSON()
        })
    }

    * edit (req, res) {
        const competitor = yield Competitor.find(req.param('id'))

        yield res.sendView('competitorEdit', {
            competitor: competitor.toJSON()
        })
    }

    * doEdit (req, res) {
        const competitor = yield Competitor.find(req.param('id'))

        if (competitor === null) {
            res.notFound('Sorry, competitor not found.')
            return
        }

        // 1. input
        const competitorData = req.all()

        // 2. validáció
        const rules = {
            'firstname': 'required|min:3',
            'laststname': 'required|min:3',
            'wins': 'required',
        }

        const validation = yield Validator.validateAll(competitorData, rules)
        if (validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect(`/competitor/${competitor.id}/edit`)
            return
        }

        // TODO: check category

        competitor.firstname = competitorData.firstname
        competitor.laststname = competitorData.laststname
        competitor.wins = competitorData.wins

        yield competitor.save()

        res.redirect(`/competitor/${competitor.id}`)
    }

    * doDelete (req, res) {
        const competitor = yield Competitor.find(req.param('id'))

        yield competitor.delete()

        res.redirect('/')
    }

}

module.exports = CompetitorController
