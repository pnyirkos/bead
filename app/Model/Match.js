'use strict'

const Lucid = use('Lucid')

class Match extends Lucid {

  competitor () {
    return this.hasMany('App/Model/Competitor')
  }

}

module.exports = Match
