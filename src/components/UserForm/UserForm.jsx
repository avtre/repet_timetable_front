import React, {useEffect, useState} from 'react';
import './UserForm.css';
import {useTelegram} from "../../hooks/useTelegram";

const UserForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [classNumber, setClassNumber] = useState('');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Обновить данные'
        })
    }, []);

    useEffect(() => {
        if (!name || !surname || !classNumber) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }, [name, surname, classNumber]);

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeSurname = (e) => {
        setSurname(e.target.value)
    }

    const onChangeClassNumber = (e) => {
        setClassNumber(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Обновите ваши данные</h3>
            <input
                className={'input'}
                type='text'
                placeholder={'Имя'}
                value={name}
                onChange={onChangeName}
            />
            <input
                className={'input'}
                type='text'
                placeholder={'Фамилия'}
                value={surname}
                onChange={onChangeSurname}
            />
            <input
                className={'input'}
                type='number'
                placeholder={'Класс'}
                value={classNumber}
                onChange={onChangeClassNumber}
            />
        </div>
    );
};

export default UserForm;