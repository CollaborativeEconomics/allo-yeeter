'use client'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Main from '@/components/main'
import Button from '@/components/button'
import ButtonBlue from '@/components/button-blue'
import ButtonLink from '@/components/button-link'
import InputLabel from '@/components/input-label'

export default function Start() {
  const { register, watch, setValue } = useForm({
    defaultValues: { address: '', amount: '' }
  })
  const [address, amount] = watch(['address', 'amount'])

  function addRow(){
    console.log('New row')
  }

  return (
    <Main>
      <Link href="/"><h1 className="text-center mb-2 text-4xl">ALLO YEETER</h1></Link>
      <h2 className="text-center mb-4 text-2xl">Currency Distributor</h2>
      <form className="w-full">
        <table className="w-full mt-8 border-collapse">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td><InputLabel label="Wallet Address" register={register('address')}></InputLabel></td>
              <td><InputLabel label="Amount To Pay" register={register('amount')}></InputLabel></td>
            </tr>
            <tr>
              <td colSpan={2} className="text-left"><Button className="mt-2 px-4 py-2 border rounded">+</Button></td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="w-full flex flex-row justify-between align-center items-center">
        <ButtonBlue className="mt-12">UPLOAD CSV FILE</ButtonBlue>
        <ButtonLink href="/wizard/step2" className="mt-12">NEXT</ButtonLink>
      </div>
    </Main>
  )
}
