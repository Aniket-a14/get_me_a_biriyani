import { Textarea } from "@/app/Components/ui/textarea";
import { AccordionDemo } from "./Components/Questions";

export const metadata = {
  title: 'Get me a Biriyani - Support Your Favorite Creators',
  description: 'A Simple Monetary Platform to receive funds from your followers',
  keywords: ['donations', 'creators', 'support', 'payments', 'biriyani'],
  openGraph: {
    title: 'Get me a Biriyani - Support Your Favorite Creators',
    description: 'A Simple Monetary Platform to receive funds from your followers',
    type: 'website',
    locale: 'en_IN',
    url: 'https://getmeabiriyani.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get me a Biriyani - Support Your Favorite Creators',
    description: 'A Simple Monetary Platform to receive funds from your followers',
  },
};

export default function Home() {
  return (
    <>
      <div className="flex text-white justify-center mx-auto">
        <div className="flex container flex-col justify-center items-center text-white h-[48vh]">
          <h1 className="mb-3 text-2xl font-bold">Get Me a Biriyani</h1>
          <p>
            A Simple Monetary Platform to receive funds from your followers.
            Click to <a href="#" className="underline">know more</a>
          </p>
          <div className="flex mt-2 gap-3">
            <button
              type="button"
              className="mt-3 py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
            >
              Start here
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,.35)] h-[2px]"></div>

      <div className="text-white container flex flex-col mx-auto pt-6 pb-24">
        <h1 className="text-xl font-bold text-center my-10">What Services do we provide?</h1>
        <div className="flex gap-x-5 justify-around">
          {[
            { img: "/coin.gif", title: "Multi Currency Options", desc: "Convert and Send Currency anywhere" },
            { img: "/man.gif", title: "Fund Yourself", desc: "Send money to yourself" },
            { img: "/group.gif", title: "Receive in Bulk", desc: "Receive from anyone and anywhere" },
          ].map((item, index) => (
            <div key={index} className="item space-y-3 flex flex-col justify-center items-center">
              <img className="bg-slate-400 rounded-full p-2" width={70} src={item.img} alt={item.title} />
              <p className="font-bold text-center">{item.title}</p>
              <p className="text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.35)] h-[2px]"></div>

      <h2 className="text-3xl font-semibold text-center text-white mt-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto mt-10">
        <AccordionDemo />
      </div>

      <div className="bg-[rgba(255,255,255,0.35)] h-[2px] mt-20"></div>

      <section className="px-5 py-24 flex flex-col mx-auto">
        <div className="container w-4/5 rounded-xl mx-auto">
          <div className="text-center w-full mb-12">
            <h1 className="text-3xl font-medium mb-4 text-white">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Get in touch with us for any queries or support.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
                  <Textarea />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                  <Textarea />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                  <Textarea />
                </div>
              </div>
              <div className="p-2 w-full flex justify-center">
                <button
                  type="button"
                  className="mt-3 py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}