import { StaffType } from "../../../../types/types";
import s from "./staffCard.module.css";

type PropsType = {
  person: StaffType;
};

export const StaffCard = (props: PropsType) => {
  const { person } = props;

  return (
    <div className={s.staffCard}>
      <div className={s.staffCard_imageBlock}>
        <img
          className={s.staffCard_image}
          src={person.posterUrl}
          alt="poster"
        />
      </div>
      <div className={s.staffCard_nameBlock}>
        <h3 className={s.staffCard_NameRu}>{person.nameRu}</h3>
        <span className={s.staffCard_NameEn}>{person.nameEn}</span>
        <p className={s.staffCard_person}>{person.description}</p>
      </div>
    </div>
  );
};
