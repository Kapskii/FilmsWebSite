import { ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../RTK/store";
import { fetchNews, setPage } from "../../../RTK/newsSlice";
import { NewsElement } from "./newsElement/NewsElement";
import { PaginationRanges } from "../pagination/Pagination";
import { Loader } from "../loader/Loader";
import s from './news.module.css'

export const News = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.newsReduser.news);
  const loader = useAppSelector((state) => state.newsReduser.loader);
  const page = useAppSelector((state) => state.newsReduser.currentPage);
  const totalPages = useAppSelector((state)=> state.newsReduser.totalPages)


  const newsPageChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

//   console.log(news);

  useEffect(() => {
    dispatch(fetchNews(page));
  }, [page]);

  return (
    <div className={s.news}>
      <div className={s.news_articleList}>
      {loader ? (<Loader/>) : (news.map((article, id) => <NewsElement article={article} key={id} />))}
        </div>
      <div className={s.news_paginationBlock}>
        <PaginationRanges pagesCount={totalPages} callBack={newsPageChange}/>
      </div>
    </div>
  );
};
