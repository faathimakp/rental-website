"use client";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  scooterName?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  scooterName,
}: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 backdrop-blur-md">
      {/* Container */}
      <div className="flex min-h-screen items-start justify-center p-4 py-10 lg:items-center">
        {/* Modal */}
        <div className="relative w-full max-w-6xl overflow-hidden rounded-[30px] bg-white shadow-2xl lg:rounded-[40px]">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-700 transition hover:bg-red-500 hover:text-white lg:right-6 lg:top-6 lg:h-12 lg:w-12 lg:text-2xl"
          >
            ×
          </button>

          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_35%)]" />

          <div className="relative z-10 p-5 sm:p-8 lg:p-14">
            {/* Heading */}
            <div className="mb-10">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700 sm:text-sm">
                Premium Booking
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Rent Your Best Scooter
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base lg:text-lg">
                Complete the booking form and we’ll contact you instantly.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;

                const formData = new FormData(form);

                formData.append(
                  "access_key",
                  "5c1e4403-387d-4df4-a62c-3b8ac6eee549",
                );

                formData.append(
                  "subject",
                  `New Booking Request - ${scooterName}`,
                );

                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);

                const response = await fetch(
                  "https://api.web3forms.com/submit",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: json,
                  },
                );

                const result = await response.json();

                if (result.success) {
                  alert("Booking request sent successfully!");

                  form.reset();

                  onClose();
                } else {
                  alert("Something went wrong!");
                }
              }}
              className="grid gap-5 sm:gap-6 lg:grid-cols-2 xl:grid-cols-4"
            >
              {/* Your Web3Forms Access Key */}

              {/* Email Subject */}
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800 sm:text-base">
                  Name
                </label>

                <input
                  name="Name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white sm:h-16 sm:px-5 sm:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800 sm:text-base">
                  Email
                </label>

                <input
                  name="Email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white sm:h-16 sm:px-5 sm:text-base"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800 sm:text-base">
                  Phone Number
                </label>

                <input
                  name="Phone"
                  type="tel"
                  placeholder="Telephone"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white sm:h-16 sm:px-5 sm:text-base"
                />
              </div>

              {/* Vehicle */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800 sm:text-base">
                  Vehicle
                </label>

                <input
                  value={scooterName}
                  readOnly
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 text-sm text-slate-700 outline-none sm:h-16 sm:px-5 sm:text-base"
                />
              </div>

              {/* Pickup Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800 sm:text-base">
                  Pick Up Date
                </label>

                <input
                  name="Pickup Date"
                  type="date"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white sm:h-16 sm:px-5 sm:text-base"
                />
              </div>

              {/* Return Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800 sm:text-base">
                  Return Date
                </label>

                <input
                  name="Return Date"
                  type="date"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white sm:h-16 sm:px-5 sm:text-base"
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800 sm:text-base">
                  Pick Up Location
                </label>

                <select
                  name="Location"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white sm:h-16 sm:px-5 sm:text-base"
                >
                  <option value="">Select Location</option>
                  <option>Kochi</option>
                  <option>Calicut</option>
                  <option>Trivandrum</option>
                </select>
              </div>

              {/* Submit */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="h-14 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-slate-900 text-sm font-bold text-white shadow-xl transition duration-300 hover:scale-[1.02] sm:h-16 sm:text-base"
                >
                  Book Scooter Now
                </button>
              </div>
            </form>
            {/* Bottom Steps */}
            <div className="mt-10 rounded-[24px] bg-[#071133] px-5 py-6 sm:px-8 lg:mt-14">
              <div className="grid gap-6 text-center text-white lg:grid-cols-3">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <span className="text-4xl font-black text-blue-400 sm:text-5xl">
                    01.
                  </span>

                  <p className="text-base sm:text-lg lg:text-xl">
                    Fill the form
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <span className="text-4xl font-black text-blue-400 sm:text-5xl">
                    02.
                  </span>

                  <p className="text-base sm:text-lg lg:text-xl">
                    Confirm Booking
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <span className="text-4xl font-black text-blue-400 sm:text-5xl">
                    03.
                  </span>

                  <p className="text-base sm:text-lg lg:text-xl">
                    Enjoy The Ride
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
