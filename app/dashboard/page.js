"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      <div className="p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome, {session?.user?.name}
        </h2>
        <p className="mb-4">
          Here you can manage your account, view your transactions, and update
          your settings.
        </p>

        <div className="text-right mt-32">
          <h3 className="text-xl font-bold mb-2">Multi Currency Options</h3>
          <p>
            Convert and send currency anywhere with ease. Our platform supports
            multiple currencies to ensure you can transact globally without any
            hassle.
          </p>
        </div>

        <div className="text-right mt-10">
          <h3 className="text-xl font-bold mb-2">Fund Yourself</h3>
          <p>
            Send money to yourself effortlessly. Whether you need to transfer
            funds between your accounts or save for a rainy day, we've got you
            covered.
          </p>
        </div>

        <div className="text-right mt-10">
          <h3 className="text-xl font-bold mb-2">Receive in Bulk</h3>
          <p>
            Receive funds from anyone, anywhere. Our platform allows you to
            collect payments from multiple sources seamlessly.
          </p>
        </div>

        <div className="mt-32">
          <h3 className="text-xl font-bold mb-2">Frequently Asked Questions</h3>
          <p>
            Have questions? Check out our FAQ section to find answers to the
            most common queries about our services.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>
            If you have any queries or need support, feel free to reach out to
            us. Our team is here to help you with any issues you may face.
          </p>
        </div>

        <div className="text-center">
          <section className="text-white body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block w-8 h-8 text-gray-300 mb-8"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed text-lg">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware. Man bun next level
                  coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                  master cleanse direct trade indigo juice before they sold out
                  gentrify plaid gastropub normcore XOXO 90's pickled cindigo
                  jean shorts. Slow-carb next level shoindigoitch ethical
                  authentic, yr scenester sriracha forage franzen organic
                  drinking vinegar.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Aniket Saha
                </h2>
                <p className="text-gray-300">Web Developer</p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-4 mb-5 ">
          <h3 className="text-xl font-bold mb-2">Latest Updates</h3>
          <p>
            Stay up to date with the latest features and improvements to our
            platform. We are constantly working to provide you with the best
            experience possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
