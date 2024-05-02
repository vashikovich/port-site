import Image from "next/image.js";
import Button from "./button";

export default function Contact() {
  return (
    <div className="p-10">
      <div className="relative w-fit">
        <h1 className="text-5xl font-bold text-primary-main/50">
          LET$apos;S WORK TOGETHER
        </h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:justify-between mt-6 gap-6">
        <div className="flex flex-row items-end md:flex-col md:items-start gap-3">
          <Image
            src="/images/cover.jpg"
            width={100}
            height={100}
            alt="personal picture"
          />
          <div>
            <p>indera.waskitho@gmail.com</p>
            <p>+62 856 715 9813</p>
          </div>
        </div>
        <div className="flex-1">
          <form>
            <div className="flex gap-4 flex-col max-w-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="youremail@example.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="I want to work with you on my..."
                  required
                />
              </div>
            </div>
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
