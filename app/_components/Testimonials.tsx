
export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Savad Kakkad",
      review:
        "It was really helpful and affordable for travelling in kannur. I used access .thanks for service!!",
    },
    {
      id: 2,
      name: "Afsal Ansari",
      review:
        "Excellent service & vehicle condition too. Highly recommend to have a call with them and book it.",
    },
    {
      id: 3,
      name: "Muhammed Km",
      review:
        "I booked  access 125cc for my 2day kannur trip. It was great. scooty was in a decent condition",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/40 py-10 md:py-24">
        {/* Testimonials */}
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <div className="flex justify-center px-4">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm sm:gap-3 sm:px-5 sm:text-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />

                <span className="font-bold text-slate-900">5.0</span>

                <span className="text-yellow-400">★★★★★</span>

                <span className="text-slate-500 whitespace-nowrap">
                  (100 reviews)
                </span>
              </div>
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl font-normal text-slate-900 font-normal">
              What Our Riders Say
            </h2>

            <p className="mx-auto mt-3 md:mt-5 max-w-2xl text-shadow-lg md:text-lg leading-6 md:leading-8 text-slate-500  font-normal">
              Trusted by customers for premium Vehicle rentals and reliable
              service.
            </p>
          </div>

          <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-[32px]  font-normal border border-slate-200 bg-white p-5 md:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2"
              >
                <div className="mb-5 flex items-center gap-1 text-2xl text-yellow-400">
                  ★ ★ ★ ★ ★
                </div>

                <p className="text-base leading-6 md:leading-8 text-slate-600">
                  “{review.review}”
                </p>

                <div className=" mt-4 md:mt-8 flex items-center gap-3 md:gap-4">
                  <div className="flex h-9 w-9 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-r bg-[#002c50] text-shadow-lg md:text-lg font-bold text-white">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className=" text-shadow-lg md:text-lg font-bold text-slate-900">
                      {review.name}
                    </h4>

                    <p className=" text-sm text-slate-500">
                      Verified Google Review
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-14 flex justify-center">
            <a
              href="https://www.google.com/search?num=10&sca_esv=a4f5fd6faf7ec072&sxsrf=ANbL-n4rpqN-VHIjP88fvWZL02UYGRyzRw:1780400556731&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZxKMu_6d5GlZEnLQXobvfQQ55wpO3qItSQTMvHDkDZN3Q8wtLubxGOiSPy3KKDhaT-cKssygl-mjXQJySWuBHsFmmFkEnRspQXQlNXV00Wz389kC66iRWedgzt_PZrwu8lyaWA%3D&q=Roam+kannur+bike+%26+scooter+rentals+in+kannur+Reviews&sa=X&ved=2ahUKEwilq_f1vOiUAxXre2wGHT0UI4wQ0bkNegQIQxAF&biw=1470&bih=798&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#002c50] bg-white px-6 py-3 font-semibold text-[#002c50] shadow-sm transition-all duration-300 hover:bg-[#002c50] hover:text-white hover:shadow-lg"
            >
              View All Google Reviews
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d15618.553384672203!2d75.42281855!3d11.86056895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m1!2shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%2FKannur%2C%2BPadanapalam%2C%2BKannur%2C%2BKerala%2B670001%2F%4011.8605689%2C75.4228186%2C15z%2Fdata%3D*214m8*214m7*211m0*211m5*211m1*211s0x3ba43d34fa25fb8f%3A0x1f50700d9f68d967*212m2*211d75.3680734*212d11.8718394%3Fentry%3Dttu%26g_ep%3DEgoyMDI2MDYwMS4wIKXMDSoASAFQAw%253D%253D!4m5!1s0x3ba43d34fa25fb8f%3A0x1f50700d9f68d967!2sKannur%2C%20Padanapalam%2C%20Kannur%2C%20Kerala%20670001!3m2!1d11.871839399999999!2d75.3680734!5e0!3m2!1sen!2sin!4v1780547879266!5m2!1sen!2sin"
        width="100%"
        height="400"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </>
  );
}
