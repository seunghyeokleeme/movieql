export const people = [
  {
    id: "1",
    name: "Devinan",
    age: 19,
    gender: "male"
  },
  {
    id: "2",
    name: "a",
    age: 1,
    gender: "female"
  },
  {
    id: "3",
    name: "b",
    age: 2,
    gender: "male"
  },
  {
    id: "4",
    name: "c",
    age: 3,
    gender: "female"
  },
  {
    id: "5",
    name: "d",
    age: 4,
    gender: "male"
  },
  {
    id: "6",
    name: "e",
    age: 5,
    gender: "female"
  },
  {
    id: "7",
    name: "f",
    age: 6,
    gender: "male"
  }
];

export const getById = id => {
  const fillteredPeople = people.filter(person => person.id === String(id));
  return fillteredPeople[0];
};
