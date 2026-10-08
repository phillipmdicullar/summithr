import { Quote, Star } from "lucide-react";
import "./testimonial.css"
const testimonials = [
  {
    name: "Ms. Celestine Munda",
    role: "Managing Director",
    company: "Britam",
    text: "Summit provided professional and reliable support throughout the process. Their team understood our needs and delivered a solution that made a real difference.",
  },
  {
    name: "Philip Emdokolo",
    role: "HR Manager",
    company: "Almaq ceramics",
    text: "The team was responsive, professional, and easy to work with. We appreciated their practical approach and attention to detail.",
  },
  {
    name: "Gagan vishwas",
    role: "Business Owner",
    company: "Boda plus company limnited",
    text: "Summit helped us identify the right approach for our organization. Their expertise and commitment made the entire experience seamless.",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonial">
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Client Stories
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0b2d4f] sm:text-5xl">
            Trusted by people
            <br />
            <span className="text-blue-600">who value results.</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-500">
            Here's what some of the people we've worked with have
            to say about their experience with Summit.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name + testimonial.role}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Quote size={21} />
                </div>

                <div className="flex gap-1 text-blue-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <p className="mt-7 text-[15px] leading-7 text-slate-600">
                "{testimonial.text}"
              </p>

              {/* Person */}
              <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b2d4f] text-sm font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0b2d4f]">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
    </div>
  );
}