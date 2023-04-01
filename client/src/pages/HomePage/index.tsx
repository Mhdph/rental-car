import { Navbar } from '@/components/navbar'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { TopSection } from './TopSection'

const PageContainer = styled.div`
  ${tw`
  flex flex-col w-full h-full items-center overflow-x-hidden
`}
`

function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  )
}

export default HomePage
