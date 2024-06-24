type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// const topO = { name: "top", color: "red" };
// const bottomO = { position: 1, weight: 20 };

// const result = compare(topO, bottomO);
// console.log(result);