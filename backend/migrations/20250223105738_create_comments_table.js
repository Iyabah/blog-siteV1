/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("comments", (table) => {
      table.increments("id").primary();
      table.integer("post_id").unsigned().references("id").inTable("posts").onDelete("CASCADE");
      table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
      table.text("comment").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("comments");
  };
  