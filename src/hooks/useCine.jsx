import { useContext } from 'react'
import CineContext from '../context/cineProvider'

const useCine = () => {
    return useContext(CineContext)
}

export default useCine