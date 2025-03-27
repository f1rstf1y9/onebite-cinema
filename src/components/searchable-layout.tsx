import { ReactNode } from "react";
import style from "./searchable-layout.module.css";
export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <div>
        <input placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div>
      {children}
    </div>
  );
}
