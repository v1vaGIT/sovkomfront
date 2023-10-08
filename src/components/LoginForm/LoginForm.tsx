import {FC, useContext} from 'react';
import {Context} from "../../main.tsx";
import {observer} from "mobx-react-lite";
import s from './style.module.css'
import {Controller, useForm} from 'react-hook-form';
import Input from "../../shared/UI/input/Input.tsx";
import Button from "../../shared/UI/button/Button.tsx";
import clsx from "clsx";

export interface IFromData{
    email: string,
    password: string
}

const LoginForm: FC = () => {

    const {store} = useContext(Context)

    const {
        handleSubmit,
        control,
        formState: { errors, isValid }
    } = useForm(
        { mode: 'onBlur',
            reValidateMode: 'onChange',
            defaultValues: {
                email: '',
                password: '',
            }
        })

    const btnStyles = clsx(s.btnStyles, { [s.btnStyles__error]: !isValid })

    const loginMe = (data: IFromData) => {
        store.login(data.email, data.password)
    }

    return (
        <div className={s.form__container}>
            <div className={s.form__title}>
                Вход в университет Совкомбанк
            </div>
            <form className={s.form__formFieldsContainer} onSubmit={handleSubmit(loginMe)}>
                <div className={s.form__formField}>
                <Controller
                    name="email"
                    control={control}
                      rules={{
                          pattern: {
                              value: /^\S+@\S+\.\S+$/,
                              message: 'Введите корректное имя'
                          },
                          required: {
                              value: true,
                              message: 'Это поле необходимо заполнить.'
                          }
                      }}
                      render={({ field }) => (
                          <Input
                              fieldName={'Пользователь'}
                              value={field.value}
                              onChange={(e: any) => field.onChange(e.target.value)}
                              placeholder={'sovcom@mail.ru'}
                              error={errors?.email}
                              type={'text'}
                          />
                      )}
                />
                </div>

                <div className={s.form__formField}>
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            pattern: {
                                value: /^\s*([а-яА-Яёa-zA-Z]+\s*){1,3}$/,
                                message: 'Введите корректное имя'
                            },
                            required: {
                                value: true,
                                message: 'Это поле необходимо заполнить.'
                            }
                        }}
                        render={({ field }) => (
                            <Input
                                fieldName={'Пароль'}
                                value={field.value}
                                onChange={(e: any) => field.onChange(e.target.value)}
                                placeholder={'*****'}
                                error={errors?.password}
                                type={'password'}
                            />
                        )}
                    />
                </div>
                <div className={s.submitButton_container}>
                    <Button
                        title={'Войти'}
                        disabled={!isValid}
                        type={'submit'}
                        className={btnStyles}
                    />
                </div>
            </form>
        </div>
    );
};

export default observer(LoginForm);