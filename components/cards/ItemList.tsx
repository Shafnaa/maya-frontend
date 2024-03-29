import { findUserById } from "@/app/action/action";
import { postType } from "@/app/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemList = ({ item }: { item: postType }) => {
  const user = findUserById(item.userId);

  return (
    <li>
      <Link
        href={`/post/${item.id}`}
        className="flex flex-row items-stretch gap-2.5 px-2 py-1.5 bg-white rounded-2xl shadow-lg hover:shadow-2xl"
      >
        <Image
          width={64}
          height={64}
          src={`${user?.imageUrl}`}
          alt="name"
          className="rounded-full object-fill"
        />
        <div className="flex flex-col flex-1 justify-between items-start text-xs overflow-hidden">
          <div className="flex flex-row flex-1 self-stretch justify-between">
            <h5 className="h-4 font-bold flex-1 overflow-hidden">
              {item.title}
            </h5>
            <p>{item.createdAt.toLocaleDateString()}</p>
          </div>
          <div className="flex flex-row flex-1 self-stretch justify-between">
            <p className="h-4 flex-1 overflow-hidden">{user?.name}</p>
            <p>
              • {user?.majors.faculty}/{user?.majors.name}
            </p>
          </div>
          <div className="flex flex-row self-stretch gap-1 text-white text-xs overflow-x-auto">
            {item.tags.map((tag, i) => {
              return (
                <>
                  <div
                    className="odd:bg-primary even:bg-secondary rounded-xl px-2 py-1"
                    key={i}
                  >
                    {tag}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ItemList;
