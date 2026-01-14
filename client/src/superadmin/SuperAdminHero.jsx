
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useGetSuperAdminHeroPublicQuery } from "../redux/apis/superAdminHeroApi";

export default function SuperAdminHero() {
  const { data, isLoading } = useGetSuperAdminHeroPublicQuery();

  if (isLoading || !data?.hero) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        Loading...
      </section>
    );
  }

  const hero = data.hero;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b 
      from-[#0D1224] via-[#111624] to-[#0C1020] overflow-hidden
      scroll-mt-28"
    >
      {/* Clean Tech Grid */}
      <div
        className="absolute inset-0 opacity-10 
        bg-[radial-gradient(circle_at_1px_1px,#3B82F6_1px,transparent_1px)] 
        [background-size:34px_34px]"
      />

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 
        grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="space-y-7 text-center lg:text-left">
          {/* BADGE */}
          {hero.badgeText && (
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
              bg-blue-600/15 text-blue-400 text-sm font-medium border border-blue-500/20"
            >
              {hero.badgeText}
            </span>
          )}

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-snug">
            {hero.title}{" "}
            <span className="text-blue-500">{hero.highlightText}</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {hero.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {hero.buttonPrimary && (
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-7 py-3 font-semibold 
                bg-blue-600 text-white rounded-xl 
                shadow-[0_6px_20px_rgba(30,64,175,0.35)]
                hover:bg-blue-700 transition"
              >
                {hero.buttonPrimary} <ArrowRight size={18} />
              </button>
            )}

            {hero.buttonSecondary && (
              <button
                onClick={() => scrollTo("services")}
                className="px-7 py-3 font-semibold rounded-xl 
                border border-gray-400/20 text-white 
                hover:bg-gray-700/30 transition"
              >
                {hero.buttonSecondary}
              </button>
            )}
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-3 pt-4 text-gray-300">
            {hero.phone && (
              <Info>
                <Phone size={18} /> {hero.phone}
              </Info>
            )}
            {hero.email && (
              <Info>
                <Mail size={18} /> {hero.email}
              </Info>
            )}
            {hero.location && (
              <Info>
                <MapPin size={18} /> {hero.location}
              </Info>
            )}
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          {hero.stats?.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#131A2F] 
              border border-gray-700/30 text-center 
              shadow-[0_8px_24px_rgba(0,0,0,0.25)]
              hover:scale-105 transition"
            >
              <p className="text-3xl font-bold text-blue-400">{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info({ children }) {
  return (
    <div className="flex items-center gap-3 justify-center lg:justify-start">
      {children}
    </div>
  );
}










// import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
// import { useGetSuperAdminHeroPublicQuery } from "../redux/apis/superAdminHeroApi";

// export default function SuperAdminHero() {
//   const { data, isLoading } = useGetSuperAdminHeroPublicQuery();

//   if (isLoading || !data?.hero) {
//     return (
//       <section className="min-h-[60vh] flex items-center justify-center bg-[#0D1224] text-white">
//         Loading...
//       </section>
//     );
//   }

//   const hero = data.hero;

//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center 
//       bg-gradient-to-b from-[#0D1224] via-[#111624] to-[#0C1020]
//       overflow-hidden scroll-mt-28"
//     >
//       {/* Subtle tech grid */}
//       <div
//         className="absolute inset-0 opacity-[0.08]
//         bg-[radial-gradient(circle_at_1px_1px,#3B82F6_1px,transparent_1px)]
//         [background-size:36px_36px]"
//       />

//       <div
//         className="relative z-10 max-w-7xl mx-auto px-6 py-24
//         grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center"
//       >
//         {/* LEFT CONTENT */}
//         <div className="space-y-6 text-center lg:text-left">
//           {hero.badgeText && (
//             <span
//               className="inline-flex items-center px-4 py-1.5 rounded-full
//               bg-blue-600/15 text-blue-400 text-sm font-medium
//               border border-blue-500/20"
//             >
//               {hero.badgeText}
//             </span>
//           )}

//           <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight">
//             {hero.title}{" "}
//             <span className="text-blue-500">{hero.highlightText}</span>
//           </h1>

//           <p className="text-gray-300 text-[17px] max-w-lg mx-auto lg:mx-0 leading-relaxed">
//             {hero.description}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             {hero.buttonPrimary && (
//               <button
//                 onClick={() => scrollTo("contact")}
//                 className="inline-flex items-center gap-2 px-7 py-3 font-semibold
//                 bg-blue-600 text-white rounded-xl
//                 shadow-[0_6px_18px_rgba(37,99,235,0.35)]
//                 hover:bg-blue-700 transition"
//               >
//                 {hero.buttonPrimary} <ArrowRight size={18} />
//               </button>
//             )}

//             {hero.buttonSecondary && (
//               <button
//                 onClick={() => scrollTo("services")}
//                 className="px-7 py-3 font-semibold rounded-xl
//                 border border-white/20 text-white
//                 hover:bg-white/10 transition"
//               >
//                 {hero.buttonSecondary}
//               </button>
//             )}
//           </div>

//           <div className="flex flex-col gap-3 pt-4 text-gray-300">
//             {hero.phone && (
//               <Info>
//                 <Phone size={18} /> {hero.phone}
//               </Info>
//             )}
//             {hero.email && (
//               <Info>
//                 <Mail size={18} /> {hero.email}
//               </Info>
//             )}
//             {hero.location && (
//               <Info>
//                 <MapPin size={18} /> {hero.location}
//               </Info>
//             )}
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative max-w-xl mx-auto lg:mx-0">
//           <div
//             className="relative rounded-2xl overflow-hidden
//             border border-white/10
//             shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
//           >
//             <img
//               src={hero.image || "/smart-e.png"}
//               alt="MVAD IT Solutions"
//               className="w-full h-full object-cover aspect-[16/10]"
//             />

//             <div className="absolute inset-0
//               bg-gradient-to-t from-black/40 via-black/15 to-transparent"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Info({ children }) {
//   return (
//     <div className="flex items-center gap-3 justify-center lg:justify-start">
//       {children}
//     </div>
//   );
// }
