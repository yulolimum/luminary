import { Box } from '@luminary/core'
import { useEffect, useRef } from 'react'
import { ScrollView, View } from 'react-native'

const LENGTH = 10000

// Time: 1097ms
// Time: 1122ms

export default function Page() {
  const bench = useRef(0)

  useEffect(() => {
    bench.current = Date.now()
  }, [])

  return (
    <ScrollView style={{ backgroundColor: 'red' }} contentContainerStyle={{ gap: 16 }}>
      {Array.from({ length: LENGTH }).map((_, i) => (
        <Box
          onLayout={() => {
            if (i === LENGTH - 1) {
              console.log(`Time: ${Date.now() - bench.current}ms`)
            }
          }}
          key={i}
          w={100}
          aspect={1}
          bg="red.6"
          bd="red.6"
          bw={1}
          py="lg"
          ml="lg"
        />
      ))}
    </ScrollView>
  )
}
