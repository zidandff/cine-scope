import Image from "next/image";

export default function Page() {
  return (
    <section className="p-6">
      <div className="w-full h-[200px] bg-gradient-to-r from-[#005AA7] to-[#FFFDE4] rounded-3xl"></div>
      <div className="w-[100px] h-[100px] relative rounded-full mx-auto">
        <Image
          className="rounded-full -translate-y-1/2"
          src="/profile.jpg"
          alt="profile picture"
          objectFit="cover"
          fill={true}
        />
      </div>
      <h1 className="text-2xl text-center font-bold -mt-8">Zidan M. Daffa</h1>
    </section>
  );
}
