import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Loader() {
  //   const router = useRouter();
  //   const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  //   useEffect(() => {
  //     const handleRouteChange = () => {
  //       setIsLoaderVisible(true);
  //     };

  //     const handleRoutComplete = () => {
  //       setIsLoaderVisible(false);
  //     };

  //     // here we subscribe to router change start and complete events
  //     router.events.on('routeChangeStart', handleRouteChange);
  //     router.events.on('routeChangeComplete', handleRoutComplete);

  //     // unsubscribe to router events when component unmounts to prevent memory leaks
  //     return () => {
  //       router.events.off('routeChangeStart', handleRouteChange);
  //       router.events.off(
  //         'routeChangeComplete',
  //         handleRoutComplete
  //       );
  //     };
  //   }, [router.events]);

  //   if (isLoaderVisible) {
  //     return (
  //       <section className='absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-[#232323]'>
  //         <article>
  //           <div className='relative'>
  //             <h1
  //               data-testid='element-title'
  //               className='animate-fadeIn-title text-4.2 font-normal capitalize leading-[6rem] text-[#E5E9F0] opacity-0'
  //             >
  //               abolfazl jamshidi
  //             </h1>
  //             <span className='animate-load-title absolute left-0 top-0 h-full w-0 bg-[#43d9ad]'></span>
  //           </div>
  //           <div className='relative'>
  //             <p
  //               data-testid='element-role'
  //               className='animate-fadeIn-role text-4xl font-medium text-[#4D5BCE] opacity-0'
  //             >
  //               &gt; Front-end developer
  //             </p>
  //             <span className='animate-load-role absolute left-0 top-0 h-full w-0 bg-[#4D5BCE]'></span>
  //           </div>
  //         </article>
  //       </section>
  //     );
  //   } else {
  //     return null;
  //   }

  return (
    <section className='absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-[#232323]'>
      <article>
        <div className='relative'>
          <h1
            data-testid='element-title'
            className='animate-fadeIn-title text-4.2 font-normal capitalize leading-[6rem] text-[#E5E9F0] opacity-0'
          >
            abolfazl jamshidi
          </h1>
          <span className='animate-load-title absolute left-0 top-0 h-full w-0 bg-[#43d9ad]'></span>
        </div>
        <div className='relative'>
          <p
            data-testid='element-role'
            className='animate-fadeIn-role text-4xl font-medium text-[#4D5BCE] opacity-0'
          >
            &gt; Front-end developer
          </p>
          <span className='animate-load-role absolute left-0 top-0 h-full w-0 bg-[#4D5BCE]'></span>
        </div>
      </article>
    </section>
  );
}

export default Loader;
