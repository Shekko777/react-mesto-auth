import { Link } from "react-router-dom";

const Form = ({labelText, buttonText, bottomLink, children, onSubmit, isDisabled }) => {

  return (
    <form onSubmit={onSubmit} className="form" action="#" noValidate>
      <fieldset className="form__fieldset">
        <label className="form__label">{labelText}</label>
        {children}
         <button disabled={isDisabled} className={`form__button ${isDisabled ? 'form__button_disabled' : '' } `} type="submit">{buttonText}</button>
        {bottomLink && <p className="form__bottom-text">Уже зарегестрированы? <Link className="form__bottom-link" to="/sign-in">Войти</Link></p>}
      </fieldset>
    </form>
  )
}

export default Form;