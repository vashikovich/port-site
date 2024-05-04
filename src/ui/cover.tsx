import Image from "next/image.js";
import Tag from "../components/tag";
import Button from "../components/button";

export default function Cover({ greeting, bio }: CoverProps) {
  return (
    <section style={{ backgroundImage: "url('/images/cover-bg.jpg')" }}>
      <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center w-full px-12 py-20 max-w-screen-lg mx-auto">
        <div className="mx-auto md:mx-0 md:ml-16">
          <Image
            src="/images/cover.jpg"
            width={200}
            height={200}
            className="block md:hidden"
            alt="cover-image"
          />
          <Image
            src="/images/cover.jpg"
            width={500}
            height={500}
            className="hidden md:block"
            alt="cover-image"
          />
        </div>
        <div className="mt-10 md:py-6">
          <p className="font-bold md:text-2xl">{greeting}</p>
          <p className="text-2xl md:text-6xl font-extrabold mt-1 text-secondary">
            SOFTWARE DEVELOPER
          </p>
          <div className="flex flex-row gap-4 my-2">
            <Tag text="Remote" />
            <Tag text="Indonesia" />
          </div>
          <div className="space-y-5">
            {bio.split(/[\r\n]+/).map((b: string) => (
              <p className="" key={b}>
                {b}
              </p>
            ))}
          </div>
          <div className="mt-6 md:mt-8">
            <div className="hidden md:block">
              <Button>Hire</Button>
            </div>
            <div className="block md:hidden">
              <Button fullWidth>Hire</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CoverProps = {
  greeting: string;
  bio: string;
};
