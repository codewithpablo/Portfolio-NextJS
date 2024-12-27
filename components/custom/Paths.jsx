import Link from "next/link";
import { footerColumns } from "@/constants";

const Paths = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-evenly w-full">
      {footerColumns.map((column, index) => (
        <div key={index} className="text-center lg:text-left pb-6 lg:pb-0">
          <h4 className="pb-6 font-semibold">{column.title}</h4>
          <ul className="flex flex-col gap-2">
            {column.links.map((link, index) => (
              <Link href={link.href} key={index} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Paths;
