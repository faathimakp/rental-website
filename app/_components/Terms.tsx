import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Terms() {
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
      <section className="bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/40 py-10 md:py-20">
        {/* Terms & Conditions */}

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="  overflow-hidden rounded-[32px] border border-slate-200 bg-blue-50 shadow-xl">
            <div className="border-l-4 border-blue-600 bg-sky-100 px-6 py-5 md:px-8">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Rental Terms & Conditions
              </h2>
            </div>

            <div className="space-y-5 p-6 md:p-8">
              {terms.map((term, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-[#002c50]" />
                  <p className="text-base leading-7 text-slate-700">{term}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

    </>
  );
}
