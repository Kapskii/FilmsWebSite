import { NewsInfoType } from "../../../../types/types";
import s from "./newsElement.module.css";

type PropsType = {
  article: NewsInfoType;
};

export const NewsElement = (props: PropsType) => {
  const { article } = props;

  return (
    <div className={s.article}>
      <div className={s.article_imageBlock}>
        <img className={s.article_image} src={article.imageUrl} alt="image" />
      </div>
      <article className={s.article_InfoBlock}>
      <div className={s.article_InfoBlockdataInfo}>
          <span className={s.article_data}>{article.publishedAt}</span>
        </div>
        <h2 className={s.article_InfoBlockTitle}>{article.title}</h2>
        <p className={s.article_InfoBlockDescription}>{article.description}</p>
      <div className={s.article_InfoBlockButtonBlock}>
        <a className={s.article_InfoBlockButton} href={article.url} target="_blanck">Подробнее</a>
      </div>
      </article>
    </div>
  );
};
