import { usePeople } from 'libs/dataaccess/src';
import './people.module.css';

export function People() {
 const people = usePeople(1);
  return (
   <div>
     <h1>Star Wars People</h1>

     <ul>
       {
         people.map(person => (
           <li key={person.name}>
             {person.name}
           </li>
         ))
       }
     </ul>
   </div>
 );
}
export default People;
