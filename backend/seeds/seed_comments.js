/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex("comments").del();

  await knex("comments").insert([
    { id: 1, post_id: 1, user_id: 3, comment: "Great post!" },
    { id: 2, post_id: 2, user_id: 2, comment: "I prefer React!" },
  ]);
};
