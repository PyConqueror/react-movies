import ActorCard from "./ActorCard"

function ActorListPage({movies}) {
  const cast = [];
  movies.forEach(movie => {
    cast.push(...movie.cast); 
  });
  const allCast = cast.join(',');//join all the arrays
  const actors = allCast.split(','); //split the string back into array
  const actorSet = new Set(actors); //set the actors to remove copy
  const actorArray = [...actorSet]; //turn back set to array of actor list
    console.log(actorArray)
    return (
        <>
        {actorArray.map((actor, index) => (
            <ActorCard key={index} actor={actor}/>
          ))}
        </>
    )
}

export default ActorListPage