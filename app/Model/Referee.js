'use strict'

const Lucid = use('Lucid')

class Referee extends Lucid {

    matches () {
        this.belongsToMany('App/Model/Match')
    }

}

module.exports = Referee
