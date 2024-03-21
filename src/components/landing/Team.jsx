export default function Team() {
  const member = [
    {
      name: "Jordi Irawan",
      role: "Developer",
      url: "/img/wan.jpg",
    },
    {
      name: "Veven Desta Aditia",
      role: "Supplier",
      url: "/img/veven.jpg",
    },
    {
      name: "Depro Winoto",
      role: "Supplier",
      url: "/img/depro.jpg",
    },
    {
      name: "Hariyadi",
      role: "Supplier",
      url: "/img/hariyadi.jpg",
    },
    {
      name: "Chyntia Stefhany",
      role: "Content Writing",
      url: "/img/stefhany.jpg",
    },
  ];
  return (
    <section
      id="team"
      className="flex flex-col items-center gap-8 [&_div]:z-10"
    >
      <div className=" text-center">
        <h1 className="mx-auto text-4xl font-bold">
          Our{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
            <span className="relative text-primary-content">Team</span>
          </span>
        </h1>
        <p className=" mx-auto mt-1 font-medium">
          Inilah kami yang menuju tak terbatas dan melampauinya
        </p>
      </div>
      <div className="flex w-full max-w-6xl flex-wrap justify-around gap-8">
        {member.map((data) => (
          <div className="text-center" key={data.name}>
            <img
              className="h-40 max-h-[40rem] w-40 max-w-[40rem] rounded-full border border-primary object-cover object-center"
              src={data.url}
              alt={data.name}
            />
            <h1 className="mt-4 text-xl font-medium">{data.name}</h1>
            <p className="text-primary">{data.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
