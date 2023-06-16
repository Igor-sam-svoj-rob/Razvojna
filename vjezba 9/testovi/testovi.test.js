const rezultat = require("./testovi");

test("Zbroji 2 + 2", () => {
  expect(rezultat.add(2, 2)).toBe(4);
});

test("Zbroji 2 + 2 da nije 5", () => {
  expect(rezultat.add(2, 2)).not.toBe(5);
});

/* toBeNull */

test("Trebao bi biti Null", () => {
  expect(rezultat.isNull()).toBeNull();
});

/* toBeFalsy */

test("Trebalo bi biti falsy", () => {
  expect(rezultat.provjeri(undefined)).toBeFalsy();
});

/* toEqual */

test("Osoba bi trebala biti Igor objekt", () => {
  expect(rezultat.kreiraj(null)).toEqual({
    ime: "Igor",
    prezime: "Jevremović",
  });
});

/* Manje od, više od */

test("Treba biti manje od 10", () => {
  const a = 4;
  const b = 5;
  expect(a + b).toBeLessThan(10);
});

/* toContain - provjera imamo li vrijednost koju tražimo u nekoj listi */

test("Joža mora biti u listi", () => {
  listaImena = ["Joža", "Igor", "Marko"];
  expect(listaImena).toContain("Joža");
});

/* Asinkroni podaci */

test("Korisnik mora biti Leanne", () => {
  expect.assertions(1);
  return rezultat.fetchOsoba().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

/* Async/await */
test("Korisnik mora biti Leanne", async () => {
  expect.assertions(1);
  const data = await rezultat.fetchOsoba();
  expect(data.name).toEqual("Leanne Graham");
});
