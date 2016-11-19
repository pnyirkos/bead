'use strict'

const Schema = use('Schema')

class RefereesTableSchema extends Schema {

  up () {
    this.create('referees', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('referees')
  }

}

module.exports = RefereesTableSchema
