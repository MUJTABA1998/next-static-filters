import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Boats = () => {
    const [feaured, setFeatured] = useState(false)
    const router = useRouter()

    const handleFilter = (e) => {
        router.push(`/boats/${e.target.value}/${feaured}`)
    }
  return (
    <div>
        Filter blogs
        <div>
          <div>
            Filter By Featured
            <input type='checkbox' onChange={e => setFeatured(!feaured)}  value={`Featured`}/> Featured
          </div>
           <div>
            Filter By Category 
            <div>
            <input type='radio' onChange={handleFilter} name='tech' value={`Programming`}/> Programming
            </div>
            <div>
            <input type='radio' onChange={handleFilter} name='tech' value={`Technology`}/> Technology
            </div>
           </div>
        </div>
    </div>
  )
}

export default Boats