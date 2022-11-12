import { useEffect, useState } from "react";

export interface IPerson {
 birth_year: string;
 eye_color: string;
 films: string[];
 gender: string;
 hair_color: string;
 height: string;
 homeworld: string;
 mass: string;
 name: string;
 skin_color: string;
 created: Date;
 edited: Date;
 species: string[];
 starships: string[];
 url: string;
 vehicles: string[];
}

export interface Response<T> {
 count: number;
 next: null | string;
 previous: null | string;
 results: T[];
}

export function usePeople(page: number) {
 const [people, setPeople] = useState<IPerson[]>([]);

 useEffect(() => {
   fetch(`https://swapi.dev/api/people/?page=${page}`).then((r) =>
   r.json().then(data => data.results)
 ).then(data => {
     setPeople(data);
   });
 }, []);

 return people;
}
