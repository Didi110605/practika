import s from './Form.module.css';
import Button from '../Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

function Form({
  theme,
  titleForBtn,
  themeForBtn,
  sizeForBtn,
  type,
  setModalState,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const types = {
    cart: useSelector((store) => store.cart.cart)
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    const newData = {
      ...data,
      orderedProducts: types[type]
    };

    setIsSubmitting(true);

    // Ваши действия с newData, например отправка на сервер
    console.log(newData);

    // После успешной отправки
    reset();
    setModalState(true);
  };

  const inputName = {
    ...register('firstname', {
      required: 'Имя обязательно к заполнению.',
      minLength: {
        value: 2,
        message: 'Имя должно состоять минимум из2 букв.',
      },
    }),
  };
  const inputPhoneNumber = {
    ...register('phoneNumber', {
      required: 'Номер телефона обязателен к заполнению.',
      pattern: {
        value: /^(\+7|8)\s?\(?(\d{3})\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
        message: 'Номер телефона должен быть в формате +7 XXX XXX-XX-XX.',
      },
    }),
  };
  const inputEmail = {
    ...register('email', {
      required: 'Почта обязательна к заполнению.',
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: 'Указан неверный формат почты.',
      },
    }),
  };

  return (
    <form className={`${s.form} ${s[theme]}`} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inp_wrap}>
        <input type={'text'} placeholder={'Name'} {...inputName} />
        {errors.firstname && (
          <p className={s.inp_error}>{errors.firstname.message}</p>
        )}
      </div>
      <div className={s.inp_wrap}>
        <input
          type={'text'}
          placeholder={'Phone number'}
          {...inputPhoneNumber}
        />
        {errors.phoneNumber && (
          <p className={s.inp_error}>{errors.phoneNumber.message}</p>
        )}
      </div>
      <div className={s.inp_wrap}>
        <input type={'email'} placeholder={'Email'} {...inputEmail} />
        {errors.email && <p className={s.inp_error}>{errors.email.message}</p>}
      </div>
      <Button
        title={type === 'discountBanner' ? (isSubmitting ? 'Request Submitted' : titleForBtn) : (isSubmitting ? 'The Ordered Is Placed' : titleForBtn)}
        disabled={isSubmitting}
        theme={isSubmitting ? 'white' : themeForBtn}
        size={sizeForBtn}
        type={'submit'}
      />
    </form>
  );
}

export default Form;