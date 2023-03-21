export interface TTree {
  name: string;
  rainfall: {
    start: number,
    end: number
  };
  maturity:  number;
  uses: string[];

}
export interface Tree extends TTree {
  id: number;
}

export function validateChild(_data: Tree): _data is Tree {
  // check if all the required fields are present and of the correct type
  return (
    typeof _data.id === "number" &&
    typeof _data.name === "string" &&
    typeof _data.rainfall === "object" &&
    typeof _data.maturity === "number" &&
    typeof _data.uses === "object"
  );
}
