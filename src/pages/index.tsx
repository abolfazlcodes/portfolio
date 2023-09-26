import Hero from '@/ui/Hero';

export default function Home() {
  return (
    <section className='flex h-full items-center justify-center'>
      <Hero />
      <article className='h-3/4 w-1/3 rounded-lg border border-[#0c1616] bg-game-board p-12 shadow-game-box-shadow backdrop-blur-xl'>
        game
      </article>
    </section>
  );
}
