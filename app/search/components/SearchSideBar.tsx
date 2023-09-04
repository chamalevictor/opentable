import { Location, Cuisine, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: {
    city?: string | undefined;
    cuisine?: string | undefined;
    price?: PRICE | undefined;
  };
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border w-full text-reg font-light text-center rounded-l p-2",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "border w-full text-reg font-light text-center p-2",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className: "border w-full text-reg font-light text-center rounded-r p-2",
    },
  ];
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "",
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            className="font-light text-reg capitalize"
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className="font-light text-reg capitalize"
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: "",
                query: {
                  ...searchParams,
                  price,
                },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
