import Head from "next/head";
import React from "react";
import { Row, Page } from "../ui-ux";
import JobList from "../data-view/JobList";

const CompanyDetails = () => {
  return (
    <>
      <Head>
        <title>Next Page CompanyDetails</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Page className={""} FULL={false}>
        <div className="relative isolate">
          <div className="bg-black/70 px-6 py-24 sm:py-32 lg:px-8">
            <img
              src="https://picsum.photos/id/464/1200/300"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <div className="mx-auto max-w-2xl text-center  backgroundImage relative">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                The Company Name
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Here goes the compnay slogan...
              </p>
              <img
                className="h-50 w-50 flex-shrink-0 rounded-full bg-gray-300 mx-auto mb-5 absolute bottom-[-175px] left-0 right-0 z-1000"
                src="https://picsum.photos/id/337/100/100"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h4 className="mt-16 mb-5">Atlanta</h4>
          <button
            type="button"
            className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-5"
          >
            Back To Job Board
          </button>
          <h2 className="mb-10">Available Jobs:</h2>
          <JobList />
        </div>
      </Page>
    </>
  );
};

export default CompanyDetails;
