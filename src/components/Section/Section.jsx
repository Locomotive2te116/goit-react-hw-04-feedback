import s from './Section.module.css';
export const Section = ({ children, title }) => {
  return (
    <section className={s.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
