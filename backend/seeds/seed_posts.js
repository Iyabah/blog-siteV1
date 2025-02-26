/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex("posts").del();

  await knex("posts").insert([
    { id: 1, user_id: 2, title: "My First Blog", content: "This is my first post!", image: null },
    { id: 2, user_id: 3, title: "React vs Vue", content: "A comparison of two frontend frameworks.", image: null },
  ]);
};
