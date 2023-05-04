import React from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/Layout/Layout'
import { useGetExerciseByIdQuery } from 'store/testApi'

const MuscleType = () => {
    const router = useRouter()
    const {bodyPart , sexType} = router.query

    const { data, isFetching, isLoading } = useGetExerciseByIdQuery(12, { refetchOnMountOrArgChange: true, skip: false })
    
    console.log(data);
    

  return (  
    <Layout title={`${bodyPart} of ${sexType} muscle`} >
      {
        bodyPart
      }
    </Layout>
  )
}

export default MuscleType
