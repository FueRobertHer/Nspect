import React, { useEffect } from 'react';
import ObservationIndexItem from '../observations/observations_index_item';

const Home = ({userId, user, observations, fetchObservations, fetchUser}) => {

  useEffect(() => {
    fetchObservations({userId});
    fetchUser(userId);
  }, [])

  // render fragments until all data has been fetched
  if (!user) return <></>
  const obs = user.observations.map(id => observations[id]).sort((a, b) => b.id - a.id);
  if (obs.some(ob => ob == null)) return <></>
  console.log(obs)
  const currentUserObs = obs.map(ob => (
    <ObservationIndexItem key={ob.id} observation={ob} />
  ))
  
  return (
    <div className="home-main main-margins">
      <section className="home-feed-container">
        <ul>
          {currentUserObs}
        </ul>
      </section>
    </div>
  )
}

export default Home;