import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-bucket bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">

        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Gautam's <br /> Repair Shop </h1>
          <address>
            Koderma bazar <br /> 
            Ranchi, Jharkhand
          </address>
          <p>
            Open Daily: 9am to 5 pm 
          </p>
          <Link href="tel: 6295****99" className="hover:underline">629546**99</Link>
        </div>

      </main>
    </div>
  );
}
