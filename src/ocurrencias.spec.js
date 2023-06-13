import ocurrencia from "./ocurrencias";


describe("", () => {
  it("deberia ser verdad", () => {
    expect(true).toEqual(true);
  });
  it("deberia devolver 1", ()=>{
    expect(ocurrencia("TU")).toEqual(1);
  });
  it("deberia devolver 1", ()=>{
    expect(ocurrencia("HOLA ")).toEqual(1);
  });
  it("deberia devolver 2", ()=>{
    expect(ocurrencia("HOLA HOLA ")).toEqual(2);
  });
});