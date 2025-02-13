import React from "react";
import PaymentForm from "../Components/Payment";

export async function generateMetadata({ params }) {
  const { username } = await params;
  
  return {
    title: `${username}'s Profile | Get me a Biriyani`,
    description: `Support ${username} and help them achieve their goals`,
    openGraph: {
      title: `${username}'s Profile | Get me a Biriyani`,
      description: `Support ${username} and help them achieve their goals`,
      type: 'profile',
    },
  };
}

const Username = async ({ params }) => {
  const {username} = await params;
  return (
      <div className="flex flex-col relative  justify-center items-center">
        <img
          className=" h-[40vh] w-4/5 rounded-lg "
          src="https://media.licdn.com/dms/image/v2/D5616AQE8rn8eOsWD8g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1729411281794?e=1744848000&v=beta&t=Ucej61PSuCp3d5BzFVr12rv5U-VDjF0E2YHXCltEC6k"
          alt=""
        />
        <div className="flex relative justify-center bottom-8">
          <img
            height={70}
            width={70}
            className="rounded-full border-2"
            src="https://media.licdn.com/dms/image/v2/D5603AQHnawdVSgcdJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692678267040?e=1744848000&v=beta&t=aot3rR_rRysmEJ4DFTwWG6RaIiP9K7qwrAd0fZCuJzU"
            alt=""
          />
        </div>
        <div className="text-center flex flex-col relative bottom-5 gap-3">
          <h4 className="text-base font-semibold text-white">@{username}</h4>
          <p className="text-sm text-white">
            Digital creator sharing content and connecting with supporters
          </p>
        </div>
        <div>
          <section className="flex relative text-gray-400 body-font mx-auto">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Our Happy Customers
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Our customers love the convenience and ease of our platform. 
                  From seamless transactions to excellent customer support, 
                  we strive to provide the best experience for our users. 
                  Join our community and see why so many people trust us with their financial needs.
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/602x362"
                    ></img>
                    <div className="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                        THE SUBTITLE
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Neptune
                      </h1>
                      <p className="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/605x365"
                    ></img>
                    <div className="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                        THE SUBTITLE
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Holden Caulfield
                      </h1>
                      <p className="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/606x366"
                    ></img>
                    <div className="px-8 py-10 relative z-10 w-full bg-black opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                        THE SUBTITLE
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Alper Kamu
                      </h1>
                      <p className="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex w-[80%] gap-5 pb-10">
          <div className="w-1/2">
            <div className="flex justify-center items-center text-white">
              <div className="w-full max-w-2xl p-5 mt-1 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-center mb-5 text-gray-200">
                  Supporters
                </h3>
                <ul className="space-y-3 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 p-2">
                  {Array(10)
                    .fill()
                    .map((_, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 border-b border-gray-700 pb-2 last:border-none"
                      >
                        <span className="text-xl">👤</span>
                        <p className="font-medium text-gray-300">
                          John Doe donated{" "}
                          <span className="text-white font-bold">
                            ₹500
                          </span>
                        </p>
                        <p className="text-sm italic text-gray-400">
                          - "Keep up the great work!"
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <PaymentForm />
          </div>
        </div>
      </div>
  );
};

export default Username;
