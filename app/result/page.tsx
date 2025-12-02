export default function ReviewLayout() {
  const dummyReviews = [
    {
      user: "Rizky A.",
      rating: 5,
      comment:
        "Aplikasinya mantap! UI clean, fitur lengkap. Udah kayak aplikasi 1 juta download 😆🔥",
    },
    {
      user: "Sarah N.",
      rating: 4,
      comment:
        "Bagus banget, tapi kadang loading agak lama kalau sinyal sekarat. Overall recommended!",
    },
    {
      user: "Fadil R.",
      rating: 3,
      comment:
        "Lumayan, cuma butuh perbaikan di notifikasi karena suka telat masuk.",
    },
    {
      user: "Nadya K.",
      rating: 2,
      comment:
        "Ide aplikasinya keren, tapi sering crash di Android 12 😭 tolong diperbaiki dev!",
    },
    {
      user: "Anon",
      rating: 1,
      comment:
        "Aplikasi auto force close pas buka. Aku uninstall, tapi iconnya masih ada 😨 help.",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-10 text-center gap-8">
      <a href="/">
        <h1 className="text-4xl font-bold text-shadow-sm/30">TITLE HERE</h1>
      </a>

      {/* Top section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Main review box */}
        <article className="w-full">
          <h2 className="hidden md:block text-2xl text-left mb-3 font-bold text-shadow-sm/30">
            [App]{"'s"} Review{" "}
          </h2>
          <a href="https://play.google.com/store/apps/details?id=com.digidust.elokence.akinator.freemium&hl=id">
            <div className=" flex items-center md:items-start flex-col-reverse md:flex-row gap-5">
              <div className="w-full bg-white h-50 rounded-2xl shadow-sm flex items-center justify-center">
                <p className="opacity-70">[App] Review Content Here</p>
              </div>
              <h2 className="md:hidden text-2xl text-left w-full font-bold text-shadow-sm/30">
                [App]{"'s"} Review{" "}
              </h2>
              {/* Image */}
              <img
                src="https://i.pinimg.com/736x/69/1a/33/691a339ee61e786ca486ed6cd3e5b7e8.jpg"
                alt="app"
                className="w-50 h-50 rounded-full shadow-md object-cover object-center"
              />
            </div>
          </a>
        </article>
      </div>

      {/* Positive / Critic section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        <article className="w-full">
          <h2 className="text-xl text-left mb-1 font-bold text-shadow-sm/30">
            Positive
          </h2>
          <div className="w-full bg-white h-40 rounded-2xl shadow-sm flex items-center justify-center">
            <p className="opacity-70">Positive Review</p>
          </div>
        </article>
        <article className="w-full">
          <h2 className="text-xl text-left mb-1 font-bold text-shadow-sm/30">
            Critic
          </h2>
          <div className="w-full bg-white h-40 rounded-2xl shadow-sm flex items-center justify-center">
            <p className="opacity-70">Critic Review</p>
          </div>
        </article>
      </div>

      {/* Hall of Review */}
      <div className="flex flex-col items-center gap-5 w-full">
        <h2 className="text-2xl font-bold text-shadow-sm/30">Hall of Review</h2>

        {/* Scroll Container */}
        <div className="w-full max-w-5xl overflow-x-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <div className="flex flex-row gap-4 py-2">
            {dummyReviews.map((review, index) => (
              <div
                key={index}
                className="rounded-xl min-w-[350px] bg-white shadow-sm p-3 flex flex-col gap-3"
              >
                <p className="text-md text-left font-bold">
                  ⭐ {review.rating}
                </p>
                <p className="text-md text-left w-full opacity-70">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
