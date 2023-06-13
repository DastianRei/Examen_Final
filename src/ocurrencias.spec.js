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
  it("deberia devolver 3", ()=>{
    expect(ocurrencia("HOLA HOLA HOLA")).toEqual(3);
  });
  it("deberia devolver 2", ()=>{
    expect(ocurrencia("HOLA MUNDO HOLA")).toEqual(2);
  });
});