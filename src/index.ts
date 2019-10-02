import { keys } from 'ts-transformer-keys';

interface Entity {
  id: string;
}

interface Props extends Entity {
  name: string;
  age: number;
}
const keysOfProps = keys<Props>();

console.log(keysOfProps); // ['id', 'name', 'age']
