const request = require("supertest");

const { server } = require("./server");

describe("server.js", () => {
  it("runs the tests", () => {
    expect(true).toBeTruthy();
  });
});

describe("/games", () => {
  it("should add a game and return the title", async () => {
    let title = "Pacman";
    let genre = "Arcade";
    let releaseYear = 1980;
    const response = await request(server)
      .post("/games")
      .send({ title, genre, releaseYear });
    expect(response.body).toEqual({ Added: "Pacman Arcade 1980" });
  });
  it(`should return json`, async () => {
    let title = "Pacman";
    let genre = "Arcade";
    let releaseYear = 1980;
    const response = await request(server)
      .post("/games")
      .send({ title, genre, releaseYear });
    expect(response.type).toEqual("application/json");
  });
  it("returns a 200 status code", async () => {
    let title = "Pacman";
    let genre = "Arcade";
    let releaseYear = 1980;
    const response = await request(server)
      .post("/games")
      .send({ title, genre, releaseYear });
    expect(response.status).toEqual(200);
  });
});

// describe("/", () => {
//   it("returns a 200 status code", async () => {
//     const response = await request(server).get("/");

//     expect(response.status).toEqual(200);
//   });
//   it(`should return {api: "running"}`, async () => {
//     const expectedBody = { api: "running" };

//     const response = await request(server).get("/");

//     expect(response.body).toEqual(expectedBody);
//   });
//   it(`should return json`, async () => {
//     const response = await request(server).get("/");

//     expect(response.type).toEqual("application/json");
//   });
// });
