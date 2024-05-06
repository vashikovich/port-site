import Image from "next/image.js";
import Button from "../components/button";
import { MouseEventHandler, useState } from "react";
import Input from "@/components/input";

export default function Contact() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("initial");

  const send: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (!name || !email || !message) return;

    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      setStatus("sent");
    } catch (e) {
      setStatus("initial");
      alert(
        "There is a problem submitting your message. Please email manually to indera.waskitho@gmail.com"
      );
    }
  };

  const loadingEl = (
    <div className="relative inline-flex flex-col gap-2 items-center justify-center">
      <div className="relative flex w-6 h-6">
        <i className="absolute w-full h-full rounded-full animate-spin border-solid border-b-transparent border-l-transparent border-r-transparent border-2 border-t-current" />
        <i className="absolute w-full h-full rounded-full opacity-75 animate-spin border-dotted border-l-transparent border-t-transparent border-r-transparent border-2 border-b-current" />
      </div>
    </div>
  );

  return (
    <section id="contact-section" className="bg-slate-900">
      <div className="max-w-screen-lg mx-auto px-12 py-20 bg-slate-900">
        <div className="flex justify-center md:justify-start mb-12 md:mb-20">
          <h1 className="text-secondary text-center md:text-left md:text-6xl">
            LET&apos;S WORK TOGETHER
          </h1>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:justify-between gap-6">
          <div className="flex flex-col items-center gap-3 md:basis-1">
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
          <div className="md:basis-1">
            <form className="flex flex-col gap-6">
              <div className="flex gap-4 flex-col max-w-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="name" className="font-bold">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="youremail@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-bold">
                    Message
                  </label>
                  <Input
                    id="message"
                    name="message"
                    type="textarea"
                    rows={5}
                    placeholder="I want to work with you on my..."
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <Button
                type="submit"
                fullWidth
                onClick={send}
                icon={status == "sending" && loadingEl}
                disabled={status != "initial"}
              >
                <>
                  {status == "initial" && "Send"}
                  {status == "sent" && "Sent!"}
                </>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
