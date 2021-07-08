// import React, {useEffect, useState} from 'react';
//
// const SearchBar = () => {
//     const [query,setQuery] = useState();
//
//     useEffect(()=>{
//         if (!query){ //age query vojood nadasht
//             return;}
//         else{
//             console.log(query);}
//     },[query]); //dependancy, ba har bar taghire query, oon amaliato anjam bede, va re-render kon, age khali bezarim ino, faghat 1 bar re-render mikone
//                      //Mishe chand ta dependancy ham gozasht, ba "," joda mishan
//
//     return (
//         <div>
//             <input value={query} onChange={A=>setQuery(A.target.value)} placeholder={'جستجو...'} />
//         </div>
//     );
// };
//
// export default SearchBar;