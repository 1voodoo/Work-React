export enum PlaceType {
  Basement = 'basement',
  Metro = 'metro',
  Bunker = 'bunker'
}


export interface IPlace {
  id: string;
  address: string;
  description: string;
  capacity: number;
  imageSrc: string;
  createdAt: number;
  type: PlaceType;
}

const FAKE_DATA: IPlace[] = [
  {
    id: 'id1',
    address: 'Street 1',
    description: '',
    capacity: 123,
    imageSrc: '',
    createdAt: Date.now(),
    type: PlaceType.Basement
  },
  {
    id: 'id2',
    address: 'Street 2',
    description: '',
    capacity: 123,
    imageSrc: '',
    createdAt: Date.now(),
    type: PlaceType.Basement
  },
  {
    id: 'id3',
    address: 'Street 3',
    description: '',
    capacity: 123,
    imageSrc: '',
    createdAt: Date.now(),
    type: PlaceType.Basement
  },
];
export default class PlacesApi {
  public getAll(): Promise<IPlace[]> {
    return new Promise ((resolve) => {
      setTimeout(() => resolve(FAKE_DATA), 1000)
    });
  } 
}
