import {
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

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
   const terms = [
 
  "Fuel costs are not included in the rental price.",
 
  "Original Driving License and valid ID proof are required at pickup.",
  "Late returns beyond the agreed time will incur additional charges.",
  "Any damage to the vehicle will be charged as per actual repair cost.",
  "One helmet is provided per booking. Additional helmets are available on request.",
  "All rental rates include applicable GST.",
  "Anyone with a valid driving license can rent vehicles below 150cc. Minimum age: 21 years for bikes above 150cc and 23 years for bikes above 350cc.",
  "Full rental amount must be paid in advance along with a refundable security deposit.",
];

  return (
    <>
     
      <section className="bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/40 py-16 md:py-24">
     
             {/* Terms & Conditions */}

      
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-12  overflow-hidden rounded-[32px] border border-slate-200 bg-blue-50 shadow-xl">
              <div className="border-l-4 border-blue-600 bg-sky-100 px-6 py-5 md:px-8">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Rental Terms & Conditions
                </h2>
              </div>
    
              <div className="space-y-5 p-6 md:p-8">
                {terms.map((term, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <p className="text-base leading-7 text-slate-700">{term}</p>
                  </div>
                ))}
              </div>
            </div>
          </div >
      

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
                  <div className="flex h-9 w-9 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-r bg-sky-600 text-shadow-lg md:text-lg font-bold text-white">
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
        <div className="mt-10 md:mt-14 flex justify-center">
  <a
    href="https://www.google.com/search?num=10&sca_esv=a4f5fd6faf7ec072&sxsrf=ANbL-n4rpqN-VHIjP88fvWZL02UYGRyzRw:1780400556731&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZxKMu_6d5GlZEnLQXobvfQQ55wpO3qItSQTMvHDkDZN3Q8wtLubxGOiSPy3KKDhaT-cKssygl-mjXQJySWuBHsFmmFkEnRspQXQlNXV00Wz389kC66iRWedgzt_PZrwu8lyaWA%3D&q=Roam+kannur+bike+%26+scooter+rentals+in+kannur+Reviews&sa=X&ved=2ahUKEwilq_f1vOiUAxXre2wGHT0UI4wQ0bkNegQIQxAF&biw=1470&bih=798&dpr=2"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-sky-600 bg-white px-6 py-3 font-semibold text-sky-600 shadow-sm transition-all duration-300 hover:bg-sky-600 hover:text-white hover:shadow-lg"
  >
    View All Google Reviews
    <span>→</span>
  </a>
</div>
        </div>
      </section>

      {/* map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62868.43384806196!2d76.2673042!3d9.9312328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d3e5f5f5f5f%3A0x1234567890abcdef!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
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
