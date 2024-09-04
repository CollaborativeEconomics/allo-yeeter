import Image from "next/image"
import Main from "@/components/main"
import ButtonLink from '@/components/button-link'

export default function Home() {
  return (
    <Main>
      <h1 className="text-center mb-2 text-4xl">ALLO YEETER</h1>
      <h2 className="text-center mb-4 text-2xl">Currency Distributor</h2>
      <Image  src="/hero.png" width={250} height={250} alt="Hero" />
      <ButtonLink href="/wizard/start" className="mt-12">START</ButtonLink>
    </Main>
  )
}
