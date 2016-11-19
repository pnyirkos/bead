'use strict'

const Schema = use('Schema')

class MatchesTableSchema extends Schema {

  up () {
    this.create('matches', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.integer('firstcomp_id').unsigned().references('id').inTable('competitors')
      table.integer('secondcomp_id').unsigned().references('id').inTable('competitors')
      table.integer('winner_id').unsigned().references('id').inTable('competitors')
      table.integer('ref_id').unsigned().references('id').inTable('referees')
      table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }

}

module.exports = MatchesTableSchema
