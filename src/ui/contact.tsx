import Image from "next/image.js";
import Button from "../components/button";

export default function Contact() {
  return (
    <section className="bg-slate-900">
      <div className="max-w-screen-lg mx-auto px-12 py-20 bg-slate-900">
        <div className="flex justify-center md:justify-start mb-12 md:mb-20">
          <h1 className="text-secondary text-center md:text-left md:text-6xl">
            LET&apos;S WORK TOGETHER
          </h1>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:justify-between gap-6">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/cover.jpg"
              width={100}
              height={100}
              alt="personal picture"
            />
            <div className="flex flex-col items-center">
              <p>indera.waskitho@gmail.com</p>
              <p>+62 856 715 9813</p>
            </div>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-6">
              <div className="flex gap-4 flex-col max-w-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="name" className="font-bold">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="py-1 px-2 rounded"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="youremail@example.com"
                      required
                      className="py-1 px-2 rounded"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="I want to work with you on my..."
                    required
                    className="py-1 px-2 rounded"
                  />
                </div>
              </div>
              <Button type="submit" fullWidth>
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
