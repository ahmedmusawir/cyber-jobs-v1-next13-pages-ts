import {
  FeaturedTestimonial,
  TestimonialData,
} from "@/data-layer/home-page-entities";
import {
  getTestimonialsSet_1,
  getTestimonialsSet_2,
  getTestimonialsSet_3,
} from "@/utils";

const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonialsOrg = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },

      // More testimonials...
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },

      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },

      // More testimonials...
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },

      // More testimonials...
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  featuredTestimonial: FeaturedTestimonial;
  testimonials: TestimonialData[];
}

const Testimonials = ({ featuredTestimonial, testimonials }: Props) => {
  // Creating an array for the left column with the fetched testimonials
  const leftColTestimonials: TestimonialData[] =
    getTestimonialsSet_1(testimonials);

  // Creating an array for the left column with the fetched testimonials
  const centerColTestimonials: TestimonialData[] =
    getTestimonialsSet_2(testimonials);

  // Creating an array for the left column with the fetched testimonials
  const rightColTestimonials: TestimonialData[] =
    getTestimonialsSet_3(testimonials);

  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-10">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>

        {/* MAIN GRID START */}
        <div className="mx-auto">
          {/* <div className="grid grid-cols-12 gap-6"> */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left testimonials */}
            {/* <div className="col-span-3"> */}
            <div className="col-span-1 md:col-span-4 lg:col-span-3">
              {leftColTestimonials.map((testimonial) => (
                // Rendering left testimonial cards here
                <figure
                  key={testimonial.id}
                  className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 mb-5"
                >
                  <blockquote className="text-gray-900">
                    <p>{testimonial.attributes.body}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.attributes.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold">
                        {testimonial.attributes.author.name}
                      </div>
                      <div className="text-gray-600">{`${testimonial.attributes.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            {/* Center testimonials (featured) */}
            {/* <div className="col-span-6"> */}
            <div className="col-span-1 md:col-span-4 lg:col-span-6">
              <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1 mb-8">
                <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900  bg-purple-200 rounded-2xl">
                  <p>{featuredTestimonial.body}</p>
                </blockquote>
                <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={featuredTestimonial.author.imageUrl}
                    alt=""
                  />
                  <div className="flex-auto">
                    <div className="font-semibold">
                      {featuredTestimonial.author.name}
                    </div>
                    <div className="text-gray-600">
                      {featuredTestimonial.author.handle}
                    </div>
                  </div>
                  <img
                    className="h-10 w-auto flex-none md:hidden lg:block"
                    src={featuredTestimonial.author.logoUrl}
                    alt=""
                  />
                </figcaption>
              </figure>
              {/* The second testimonial set in the middle column */}
              {centerColTestimonials.map((testimonial) => (
                // Rendering middle testimonial cards here
                <figure
                  key={testimonial.id}
                  className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 mb-5"
                >
                  <blockquote className="text-gray-900">
                    <p>{testimonial.attributes.body}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.attributes.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold">
                        {testimonial.attributes.author.name}
                      </div>
                      <div className="text-gray-600">{`${testimonial.attributes.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            {/* Right testimonials */}
            {/* <div className="col-span-3"> */}
            <div className="col-span-1 md:col-span-4 lg:col-span-3">
              {/* The third testimonial set in the right column */}
              {rightColTestimonials.map((testimonial) => (
                // Rendering right testimonial cards here
                <figure
                  key={testimonial.id}
                  className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 mb-5"
                >
                  <blockquote className="text-gray-900">
                    <p>{testimonial.attributes.body}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.attributes.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold">
                        {testimonial.attributes.author.name}
                      </div>
                      <div className="text-gray-600">{`${testimonial.attributes.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
        {/* MAIN GRID END */}
      </div>
    </div>
  );
};

export default Testimonials;
