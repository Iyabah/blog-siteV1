/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  await knex("users").del(); // Clear existing data

  await knex("users").insert([
    { id: 1, name: "Admin User", email: "admin@example.com", password: "hashedpassword123", role: "admin" },
    { id: 2, name: "John Doe", email: "john@example.com", password: "hashedpassword123", role: "user" },
    { id: 3, name: "Jane Smith", email: "jane@example.com", password: "hashedpassword123", role: "user" },
  ]);
};
