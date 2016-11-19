'use strict'

const Lucid = use('Lucid')

class Competitor extends Lucid {

  matches () {
    this.belongsToMany('App/Model/Match')
  }
}

module.exports = Competitor
