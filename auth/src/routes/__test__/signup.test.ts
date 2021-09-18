import request from "supertest";
import { app } from "../../app";

it("returns 201 on successful signup", async () => {
  await global.signup();
});

it("returns 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "testEmail", password: "123" })
    .expect(400);
});

it("returns 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@gmail.com", password: "" })
    .expect(400);
});

it("returns 400 with missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@gmail.com" })
    .expect(400);

  return request(app)
    .post("/api/users/signup")
    .send({ password: "123" })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  await global.signup();

  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@gmail.com", password: "123" })
    .expect(400);
});

it("sets a cookie after successful signup", async () => {
  const cookie = await global.signup();

  expect(cookie).toBeDefined();
});
