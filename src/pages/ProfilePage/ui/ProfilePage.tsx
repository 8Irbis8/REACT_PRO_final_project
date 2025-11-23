import { WithProtection } from '@/shared/store/HOCs/WithProtection';
import { Button } from '@/shared/ui/Button';
import { ButtonBack } from '@/shared/ui/ButtonBack';
import { Input } from '@/shared/ui/Input';
import classNames from 'classnames';
import s from './ProfilePage.module.css';

export const ProfilePage = WithProtection(() => {
  return (
    <>
      <ButtonBack />
      <h1 className={s['form__title']}>Мои данные</h1>
      <form className={classNames(s['form'], s['form'])}>
        <div className={s['form__row']}>
          <Input
            name="name"
            label=""
            type="text"
            placeholder="Введите ваше имя"
            className={s['input']}
            fullWidth
          />
          <Input
            name="about"
            label=""
            type="text"
            placeholder="Описание профессии"
            className={s['input']}
            fullWidth
          />
        </div>
        <div className={s['form__row']}>
          <Input
            name="avatar"
            label=""
            type="url"
            placeholder="Введите ссылку на аватарку"
            className={s['input']}
            fullWidth
          />
          <Input
            name="email"
            label=""
            type="email"
            placeholder="email"
            className={s['input']}
            fullWidth
          />
        </div>

        <Button
          type="submit"
          className={classNames(s['form__btn'], s['secondary'], s['maxContent'])}
        >
          Сохранить
        </Button>
      </form>
      <h2 className={s['form__title']}>Изменить пароль</h2>
      <form className={classNames(s['form'], s['form'])}>
        <div className={classNames(s['form__row'], s['form__row_min'])}>
          <Input
            name="password"
            label=""
            type="password"
            placeholder="Пароль"
            className={s['input']}
            fullWidth
          />
        </div>
        <Button
          type="submit"
          className={classNames(s['form__btn'], s['secondary'], s['maxContent'])}
        >
          Сохранить
        </Button>
      </form>
    </>
  );
});
