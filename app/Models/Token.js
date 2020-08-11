'use strict'

const TokenMongoose  = use('AdonisMongoose/Src/Token')

/**
 * @class Token
 */
class Token extends TokenMongoose {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'TokenHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Token's schema
   */
  static get schema () {
    return super.schema;
  }
}

module.exports = Token.buildModel('Token')
