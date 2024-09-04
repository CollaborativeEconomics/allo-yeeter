export default function Main({children}: {children: React.ReactNode}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 bg-[#000635]">
      <div className="w-[720px] p-24 flex flex-col items-center justify-center border border-slate-600 rounded-lg">
        {children}
      </div>
    </main>
  )
}
