import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import { updateSearchField } from '../components/searchSlice';
import { thunkFetchRobots } from '../components/robotSlice';


function App(props) {
  // --- Params ---
  const searchfield = useSelector(state => state.search.searchField)
  // const {
  //   isPending,
  //   robots,
  //   error,
  // } = useSelector(state => state.robot)

  const isPending = false
  const error = undefined
  const robots = props.robots

  const dispatch = useDispatch()

  // --- Functions ---
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  // --- Hooks ---
  // useEffect(() => {
  //   dispatch(thunkFetchRobots())
  // }, []);


  return (
    <>
      {
        isPending
        ?
          <h1>Loading</h1> 
        :
          (
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={e => dispatch(updateSearchField(e.target.value))}/>
              <Scroll>
                {        
                error
                ?
                <h1>{error}</h1> 
                :
                  <CardList robots={filteredRobots} />
                }
              </Scroll>
            </div>
          )
      }
    </>
  )
}

export default App;