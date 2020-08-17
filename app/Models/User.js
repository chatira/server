"use strict";

const BaseModel = use("MongooseModel");

/**
 * @class User
 */
class User extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * User's schema
   */
  static get schema() {
    return {
      username: { type: String, unique: true, require: true },
      email: { type: String, unique: true, require: true },
      password: { type: String, required: true },
    };
  }
}

module.exports = User.buildModel("User");
