import ocurrencia from "./ocurrencias";


describe("", () => {
  it("deberia ser verdad", () => {
    expect(true).toEqual(true);
  });
  it("deberia devolver 1", ()=>{
    expect(ocurrencia("TU")).toEqual(1);
  });
});