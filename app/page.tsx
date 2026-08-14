"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [scene, setScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
  if (scene !== 2) return;
  if (photoIndex >= photos.length - 1) return;

  const timer = setTimeout(() => {
    setPhotoIndex((current) => current + 1);
  }, 3000);

  return () => clearTimeout(timer);
}, [scene, photoIndex]);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const photos = [
  "/ibu.jpeg",
  "/ibu2.jpeg",
  "/ibu3.jpeg",
  "/ibu4.jpeg",
  "/ibu5.jpeg",
  "/ibu6.jpeg",
];

  return (
<main
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#171311]
    text-[#f8eee5]
  "
>
  {/* Warm background atmosphere */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[radial-gradient(circle_at_50%_15%,rgba(201,169,143,0.12),transparent_32%),radial-gradient(circle_at_10%_70%,rgba(201,169,143,0.06),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(143,129,120,0.06),transparent_30%)]
    "
  />

  {/* Soft vignette */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[radial-gradient(circle_at_center,transparent_35%,rgba(10,8,7,0.35)_100%)]
    "
  />

<audio
  ref={audioRef}
  src="/birthday-song.mp3"
  loop
  preload="auto"
/>

<motion.button
  whileTap={{ scale: 0.9 }}
  onClick={toggleMusic}
  className="
    fixed
    right-5
    top-5
    z-50
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    border
    border-[#c9a98f]/30
    bg-[#171311]/70
    text-sm
    backdrop-blur-md
  "
  aria-label={isPlaying ? "Pause music" : "Play music"}
>
  {isPlaying ? "🔊" : "🔇"}
</motion.button>


  {/* Ambient background */}

  <motion.div
    animate={{
      x: [0, 20, -10, 0],
      y: [0, -15, 10, 0],
      opacity: [0.25, 0.4, 0.3, 0.25],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      left-[15%]
      top-[20%]
      h-56
      w-56
      rounded-full
      bg-[#c9a98f]/15
      blur-[90px]
    "
  />

  <motion.div
    animate={{
      x: [0, -25, 15, 0],
      y: [0, 20, -10, 0],
      opacity: [0.15, 0.3, 0.2, 0.15],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      bottom-[15%]
      right-[10%]
      h-64
      w-64
      rounded-full
      bg-[#8f8178]/10
      blur-[100px]
    "
  />

  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.1, 0.2, 0.1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-80
      w-80
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#c9a98f]/10
      blur-[110px]
    "
  />


<AnimatePresence mode="wait" initial={true}>

  {scene === 0 && (
<motion.div
  key="reveal"
  initial={{ opacity: 0, scale: 1.04 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.98 }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center"
>
      <p className="mb-4 text-sm tracking-[0.3em] uppercase text-[#c9a98f]">
        Just for you
      </p>

      <h1 className="text-4xl font-semibold">
        Happy Birthday, ibu 🤍
      </h1>

      <p className="mt-5 text-[#c9bdb4]">
        Aku bikin sesuatu khusus untuk ibu.
      </p>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => {
audioRef.current
  ?.play()
  .then(() => {
    setIsPlaying(true);
  })
  .catch((error) => {
    console.error("Audio gagal diputar:", error);
  });

setScene(1);
  }}
  className="
    relative
    mt-8
    overflow-hidden
    rounded-full
    border
    border-[#c9a98f]/40
    bg-[#c9a98f]/12
    px-7
    py-3
    text-sm
    text-[#f8eee5]
  "
>
  <span className="relative">
    Buka hadiahnya 
  </span>
</motion.button>

    </motion.div>
  )}

{scene === 1 && (
  <motion.div
    key="reveal"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center"
  >

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-md"
    >

<motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-sm tracking-[0.25em] uppercase text-[#c9a98f]"
>
  For you, Ibu
</motion.p>

<motion.h2
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.9 }}
  className="mt-6 text-3xl font-medium leading-relaxed"
>
  Untuk perempuan yang setiap hari
  mengurus begitu banyak hal.
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.9, duration: 0.9 }}
  className="mt-6 text-xl text-[#c9bdb4]"
>
  Ibu bekerja sebagai guru.
  <br />
  Tapi setelah pulang,
  masih ada rumah yang harus selalu diurus.
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3.2, duration: 1 }}
  className="mt-10 text-2xl font-medium"
>
  Dulu, aku mungkin belum benar-benar melihat semua yang ibu lakukan.
</motion.p>

<motion.button
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 4.5, duration: 0.8 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setScene(2)}
  className="mt-12 rounded-full border border-[#c9a98f]/40 bg-[#c9a98f]/10 px-6 py-3 text-sm"
>

        Lanjutkan →
      </motion.button>

    </motion.div>
  </motion.div>
)}

{scene === 2 && (
  <motion.div
    key="memory"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full max-w-md"
    >

      {/* TITLE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-sm tracking-[0.25em] uppercase text-[#c9a98f]"
      >
        Potret Ibu
      </motion.p>


      {/* INTRO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6"
      >
        <p className="leading-8 text-[#c9bdb4]">
          Dan ternyata, ada banyak sisi ibu
          yang belum pernah benar-benar aku perhatikan.
        </p>
      </motion.div>


      {/* PHOTO */}
<div className="mx-auto mt-8 flex h-[260px] w-full max-w-[340px] items-center justify-center">
  <AnimatePresence mode="wait">
    <motion.div
      key={photos[photoIndex]}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex h-full w-full items-center justify-center"
    >
      <img
        src={photos[photoIndex]}
        alt={`Memory ${photoIndex + 1}`}
        className="
          max-h-full
          max-w-full
          rounded-3xl
          border
          border-[#c9a98f]/20
          object-contain
          shadow-2xl
        "
      />
    </motion.div>
  </AnimatePresence>
</div>


      {/* PHOTO NUMBER */}
      <motion.p
        key={photoIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-4 text-xs tracking-[0.2em] text-[#8f8178]"
      >
        {photoIndex + 1} / {photos.length}
      </motion.p>


      {/* FINAL TEXT + BUTTON */}
      <AnimatePresence mode="wait">

        {photoIndex === photos.length - 1 && (
          <motion.div
            key="memory-text"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >

            <p className="mt-8 leading-8 text-[#c9bdb4]">
              Mungkin karena selama ini, aku hanya mengenal ibu sebagai ibu.
            </p>


            {/* HEART */}
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-6 text-xl"
            >
              🤍
            </motion.p>


            {/* BUTTON */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setScene(3)}
              className="mt-10 rounded-full border border-[#c9a98f]/40 bg-[#c9a98f]/10 px-6 py-3 text-sm text-[#f8eee5] transition hover:bg-[#c9a98f]/20"
            >
              Ada sesuatu yang mau aku sampaikan →
            </motion.button>

          </motion.div>
        )}

      </AnimatePresence>

    </motion.div>
  </motion.div>
)}

{scene === 3 && (
  <motion.div
    key="letter"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="relative flex min-h-screen flex-col items-center justify-center px-7 py-12"
  >

    <div className="w-full max-w-md">

      {/* LABEL */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center text-sm tracking-[0.25em] uppercase text-[#c9a98f]"
      >
        Untuk ibuku
      </motion.p>


      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-6 text-center text-3xl font-medium"
      >
        Bu,
      </motion.h2>


      {/* LETTER */}
      <div className="mt-8 space-y-6 text-left leading-8 text-[#c9bdb4]">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Terima kasih untuk semua yang ibu lakukan,
bahkan untuk hal-hal kecil yang dulu mungkin nggak pernah aku sadari.
        </motion.p>


        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 1 }}
        >
          Terima kasih sudah selalu berusaha,
selalu mengurus begitu banyak hal,
dan tetap menjadi ibu yang selalu ada untukku.
        </motion.p>


        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.6, duration: 1 }}
        >
          Mungkin aku belum cukup sering mengatakannya,
tapi aku benar-benar bersyukur punya ibu seperti ibu.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.6, duration: 1 }}
        >
          Saat ini aku belum bisa melakukan banyak hal untuk ibu, atau membalas semua yang sudah ibu berikan. Tapi aku ingin suatu hari nanti bisa membuat ibu merasa bangga dan bahagia, seperti ibu yang selalu berusaha melakukan yang terbaik untukku.
        </motion.p>


      </div>


      {/* BIRTHDAY MESSAGE */}
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 6.2, duration: 1 }}
        className="mt-10 text-center text-lg text-[#f8eee5]"
      >
        Selamat ulang tahun, bu. 🤍
      </motion.p>


      {/* NEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7.2, duration: 1 }}
        className="flex justify-center"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setScene(4)}
          className="mt-10 rounded-full border border-[#c9a98f]/40 bg-[#c9a98f]/10 px-6 py-3 text-sm text-[#f8eee5] transition hover:bg-[#c9a98f]/20"
        >
          Masih ada satu lagi →
        </motion.button>
      </motion.div>

    </div>
  </motion.div>
)}

{scene === 4 && (
  <motion.div
    key="final"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="relative flex min-h-screen flex-col items-center justify-center px-7 text-center"
  >

    {/* Soft glow */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a98f]/10 blur-[100px]"
    />

    <div className="relative max-w-md">

      {/* LABEL */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-sm tracking-[0.25em] uppercase text-[#c9a98f]"
      >
        One last thing
      </motion.p>


      {/* MAIN MESSAGE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="mt-7 text-4xl font-semibold leading-tight"
      >
        I love you, ibu. 🤍
      </motion.h2>


      {/* WISH */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 1.2 }}
        className="mt-7 text-lg leading-8 text-[#c9bdb4]"
      >
        Semoga ibu selalu sehat,
        selalu bahagia,
        dan selalu dikelilingi
        hal-hal baik.
      </motion.p>


      {/* HEART */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: [1, 1.08, 1],
        }}
        transition={{
          opacity: {
            delay: 4,
            duration: 1,
          },
          scale: {
            delay: 4,
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative mx-auto mt-10 flex h-24 w-24 items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full bg-[#c9a98f]/10 blur-2xl" />

        <span className="relative text-5xl">
          🤍
        </span>
      </motion.div>


      {/* SIGNATURE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1 }}
        className="mt-8 text-sm text-[#8f8178]"
      >
        — dari anakmu
      </motion.p>

    </div>
  </motion.div>
)}
</AnimatePresence>
  </main>
);
}