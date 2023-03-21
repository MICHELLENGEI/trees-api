export interface Tree {
  id: number;
  name: string;
  rainfall: number;
  maturity:  number;
  uses: string[];
}

export function validateChild(_data: Tree): _data is Tree {
  // check if all the required fields are present and of the correct type
  return (
    typeof _data.id === "number" &&
    typeof _data.name === "string" &&
    typeof _data.rainfall === "number" &&
    typeof _data.maturity === "number" &&
    typeof _data.uses === "object"
  );
}
