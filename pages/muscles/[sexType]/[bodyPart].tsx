import React from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/Layout/Layout'


const MuscleType = () => {
    const router = useRouter()
    const {bodyPart , sexType} = router.query
     
  return (  
    <Layout title={`${bodyPart} of ${sexType} muscle`} >
      {
        bodyPart
      }
    </Layout>
  )
}

export default MuscleType
