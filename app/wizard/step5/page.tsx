import Link from "next/link"
import Main from "@/components/main"
import Button from '@/components/button'
import ButtonBlue from '@/components/button-blue'
import ButtonLink from '@/components/button-link'
import InputLabel from '@/components/input-label'

export default function Start() {

  function addRow(){
    console.log('New row')
  }

  return (
    <Main>
      <Link href="/"><h1 className="text-center mb-2 text-4xl">ALLO YEETER</h1></Link>
      <h2 className="text-center mb-4 text-2xl">Currency Distributor</h2>
      <form className="w-full">
        <h1>Step #5</h1>
      </form>
      <div className="w-full flex flex-row justify-between align-center items-center">
        <ButtonLink href="/" className="mt-12">HOME</ButtonLink>
        <ButtonLink href="/wizard/view" className="mt-12">VIEW TX</ButtonLink>
      </div>
    </Main>
  )
}
