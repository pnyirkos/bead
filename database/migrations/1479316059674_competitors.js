'use strict'

const Schema = use('Schema')

class CompetitorsTableSchema extends Schema {

  up () {
    this.create('competitors', (table) => {
      table.increments()
      table.string('firstname').notNullable()
      table.string('lastname').notNullable().unique()
      table.integer('wins')
      table.timestamps()
    })
  }

  down () {
    this.drop('competitors')
  }

}

module.exports = CompetitorsTableSchema
