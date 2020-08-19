import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GeoLocation = () => {
  const dispatch = useDispatch()
  const location = useSelector(state => state.location)
  console.log(location)
  useEffect(() => {
   let coords
   navigator.geolocation.getCurrentPosition(position => {
   coords = position.coords
   dispatch({type: 'SET_LOCATION', payload: coords})
    })
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default GeoLocation