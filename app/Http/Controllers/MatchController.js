'use strict'

const Competitor = use('App/Model/Competitor')
const Referee = use('App/Model/Referee')
const Match = use('App/Model/Match')
const Validator = use('Validator')

class MatchController {

    * main (req, res) {
        const competitors = yield Competitor.all()
        const referees = yield Referee.all()
        const matches = yield Match.all()

        yield res.sendView('matchAll', {
            matches: matches.toJSON(),
            competitors: competitors.toJSON(),
            referees: referees.toJSON()
        })
    }

    * create (req, res) {
        const competitors = yield Competitor.all()
        const referees = yield Referee.all()

        yield res.sendView('matchCreate', {
            competitors: competitors.toJSON(),
            referees: referees.toJSON()
        })
    }

    * doCreate (req, res) {
        // 1. input
        const matchData = req.all()

        // 2. validáció
        const rules = {
            'name': 'required|min:3',
        }

        const validation = yield Validator.validateAll(matchData, rules)
        if (validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect('/matchCreate')
            return
        }

        const match = new Match()
        match.name = matchData.name
        match.firstComp_id = matchData.firstComp
        match.secondComp_id = matchData.secondComp
        match.winner_id = matchData.winner
        match.ref_id = matchData.ref

        yield match.save()

        res.redirect(`/match/${match.id}`)
    } 

    * show (req, res) {

        function fid(nid, myArray){
             for (var i=0; i < myArray.length; i++) {
                if (myArray[i].id === nid) {
                    return myArray[i];
                }
            }
         }

        const match = yield Match.find(req.param('id'))
        const competitors = yield Competitor.all()
        const referees = yield Referee.all()
        const firstcomp = competitors.find(x => x.id === match.firstcomp_id)
        const secondcomp = competitors.find(x => x.id === match.secondcomp_id)
        const winner = competitors.find(x => x.id === match.winner_id)
        const ref = referees.find(x => x.id === match.ref_id)

        yield res.sendView('match', {
            match: match.toJSON(),
            firstcomp: firstcomp.toJSON(),
            secondcomp: secondcomp.toJSON(),
            winner: winner.toJSON(),
            ref: ref.toJSON()
        })
    }

    * edit (req, res) {
        const match = yield Match.find(req.param('id'))
        const referees = yield Referee.all()
        const competitors = yield Competitor.all()

        yield res.sendView('matchEdit', {
            match: match.toJSON(),
            referees: referees.toJSON(),
            competitors: competitors.toJSON()
        })
    }

    * doEdit (req, res) {
        const match = yield Match.find(req.param('id'))

        if (match === null) {
            res.notFound('Sorry, match not found.')
            return
        }

        // 1. input
        const matchData = req.all()

        // 2. validáció
        const rules = {
            'name': 'required|min:3',
        }

        const validation = yield Validator.validateAll(matchData, rules)
        if (validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect(`/match/${match.id}/edit`)
            return
        }

        // TODO: check category

        match.name = matchData.name
        match.firstComp_id = matchData.firstComp
        match.secondComp_id = matchData.secondComp
        match.winner_id = matchData.winner
        match.ref_id = matchData.ref

        yield match.save()

        res.redirect(`/match/${match.id}`)
    }

    * doDelete (req, res) {
        const match = yield Match.find(req.param('id'))

        yield match.delete()

        res.redirect('/matchAll')
    }

    * ajaxDelete (req, res) {
        const match = yield Match.find(req.param('id'))

        yield match.delete()

        res.ok({
            success: true
        })
    }

}

module.exports = MatchController
