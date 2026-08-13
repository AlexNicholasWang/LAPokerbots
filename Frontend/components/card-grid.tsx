import Link from "next/link";

import { Reveal } from "@/components/motion";

export type CardItem = {
  num: string;
  title: string;
  body: string;
  href?: string;
};

const cardClass =
  "flex min-h-[300px] flex-col border-r border-line bg-panel/55 p-[34px] no-underline last:border-0 max-mid:min-h-[230px] max-mid:border-r-0 max-mid:border-b max-mid:last:border-b-0";

function CardBody({ num, title, body }: CardItem) {
  return (
    <>
      <span className="font-mono text-[0.65rem] font-bold tracking-[0.14em] text-pink">
        {num}
      </span>
      <h3 className="mt-auto text-[1.5rem]">{title}</h3>
      <p className="mt-3 text-[0.95rem] text-dim">{body}</p>
    </>
  );
}

export function CardGrid({ items }: { items: readonly CardItem[] }) {
  return (
    <Reveal className="grid grid-cols-3 border border-line max-mid:grid-cols-1">
      {items.map((item) =>
        item.href ? (
          <Link key={item.num} href={item.href} className={cardClass}>
            <CardBody {...item} />
          </Link>
        ) : (
          <article key={item.num} className={cardClass}>
            <CardBody {...item} />
          </article>
        )
      )}
    </Reveal>
  );
}
