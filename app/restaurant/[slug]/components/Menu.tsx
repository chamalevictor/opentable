import { Items } from "@prisma/client";
import MenuCard from "./MenuCard";

export default function Menu({ menu }: { menu: Items[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p>This restaurant doesn't have a Menu</p>
        )}
      </div>
    </main>
  );
}
