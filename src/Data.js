const animals = [
  { name: "Cat", sound: "meow", feeding: { food: 2, water: 3 } },
  { name: "Dog", sound: "bawu" },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}
export default animals;
export { useAnimals };
