import {useRef, FormEvent} from 'react';
import {useAppDispatch} from '../../../hooks/store';
import {loginAction} from '../../../store/api-actions';
import {AuthData} from '../../../types/auth-data';

function LoginForm(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>

      <form
        className="login__form form"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>

          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            ref={emailRef}
          />
        </div>

        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>

          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
        </div>

        <button
          className="login__submit form__submit button"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
