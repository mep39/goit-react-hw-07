import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.text}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
}
