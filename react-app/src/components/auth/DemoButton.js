import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";

const DemoButton = () => {
    const dispatch = useDispatch();
    const onLogin = async (e) => {
        e.preventDefault();
        await dispatch(login("a.turing@bletchlypark.gov", "password"));
    };

    return <button onClick={onLogin}>Demo</button>;
};

export default DemoButton;