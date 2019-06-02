import hello from "../src/main";

describe("hello", () => {
  it("should return return a greeting including name", () => {
    const name: string = "Kerim";
    expect(hello(name)).toBe(`Hello ${name}!`);
  });
});
