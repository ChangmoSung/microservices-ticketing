import request from "supertest";
import { app } from "../../app";

it("fails when an email that does not exist is supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({ email: "test@gmail.com", password: "123" })
    .expect(400);
});

it("fails when an incorrect password is supplied", async () => {
  await global.signup();

  await request(app)
    .post("/api/users/signin")
    .send({ email: "test@gmail.com", password: "1" })
    .expect(400);
});

it("responses with a cookie with given valid credentials", async () => {
  await global.signup();

  const response = await request(app)
    .post("/api/users/signin")
    .send({ email: "test@gmail.com", password: "123" })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
