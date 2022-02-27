import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1> UrlParameter ページです</h1>
      <p>パラーメータは{id}です</p>
      <p>クエリパラーメータは{query.get("name")}です</p>
    </div>
  );
};
