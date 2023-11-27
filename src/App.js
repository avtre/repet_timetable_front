import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import LessonsList from "./components/LessonsList/LessonsList";
import UserForm from "./components/UserForm/UserForm";
import React, { Component }  from 'react';

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<LessonsList />} />
                <Route path={'form'} element={<UserForm />} />
            </Routes>
        </div>
    );
}

export default App;
