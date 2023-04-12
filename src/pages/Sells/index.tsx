import { Factory } from 'phosphor-react'
import { PageContent } from '../../layouts/DefaultLayout/styles'

export function Sells() {
  return (
    <PageContent>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Factory size={32} />
        Em construção
      </h1>
    </PageContent>
  )
}
