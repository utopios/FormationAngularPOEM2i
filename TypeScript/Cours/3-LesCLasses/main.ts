import Personne from './modules/Personne'
import Cadre from './modules/Cadre'

 let p1 = new Personne("George","Clinton",65);
 console.log(p1.firstname);
 console.log(p1.AffichageInfos()); 

 let cadre1 = new Cadre("Emmanuel","Macron","CEO",175);
 console.log(cadre1.display());


 