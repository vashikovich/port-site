import Image from "next/image.js";
import Tag from "./tag";
import Button from "./button";

export default function Cover({ greeting, bio }) {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center w-full px-12 md:px-10 mt-10 md:mt-20">
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
      <div className="mt-10">
        <p className="font-bold">{greeting}</p>
        <p className="text-2xl md:text-4xl font-bold mt-1">
          SOFTWARE DEVELOPER
        </p>
        <div className="flex flex-row gap-4 my-2">
          <Tag text="Remote" />
          <Tag text="Indonesia" />
        </div>
        <div className="space-y-5">
          {bio.split(/[\r\n]+/).map((b) => (
            <p className="text-md" key={b}>
              {b}
            </p>
          ))}
        </div>
        <div className="mt-5">
          <Button color="primary-main">Hire</Button>
        </div>
      </div>
    </div>
  );
}
